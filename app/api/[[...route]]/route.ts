import z from "zod";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import accountRouter from "./accounts";
import { HTTPException } from "hono/http-exception";
import { error } from "console";

export const runtime = "edge";

const app = new Hono().basePath("/api");


// Works as Middleware. But in New version No need to add this middleware
// app.onError((err, c) => {
//   if (err instanceof HTTPException) {
//     return err.getResponse();
//   }

//   return c.json({ error: "Internal Server Error" }, 500);
// });

const routes = app.route("/accounts", accountRouter);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
