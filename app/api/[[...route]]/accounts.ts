import { prisma } from "@/db/prisma";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
import { error } from "console";
import { Hono } from "hono";
import z from "zod";
// import { HTTPException } from "hono/http-exception";

const router = new Hono()
  .get("/", clerkMiddleware(), async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401);
      // throw new HTTPException(401, {
      //   res: c.json({ error: "Unauthorized" },401),
      // });
    }
    const data = await prisma.accounts.findMany({
      select: {
        id: true,
        name: true,
      },
      where: {
        id: auth.userId,
      },
    });
    return c.json({ data });
  })
  .post(
    "/",
    clerkMiddleware(),
    zValidator(
      "json",
      z.object({
        name: z.string(),
        plaid_id: z.string(),
      })
    ),
    async (c) => {
      const auth = getAuth(c);

      if (!auth?.userId) {
        return c.json({ error: "Unauthorized" }, 401);
      }
      const values = c.req.valid("json");

      const data = await prisma.accounts.create({
        data: {
          name: values.name,
          plaid_id: values.plaid_id,
          user_id: auth.userId,
        },
      });
      return c.json({data});
    }
  );

export default router;
