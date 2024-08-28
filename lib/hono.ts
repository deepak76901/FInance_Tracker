import { hc } from "hono/client";
import { AppType } from "@/app/api/[[...route]]/route";
import { usePathname } from "next/navigation";

export const client = hc<AppType>(`${window.location.origin}`!);