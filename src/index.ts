import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";

import prisma from "@/libs/prisma";

const users = new Elysia({ prefix: "/users" })
  .get("/", () => "Users")
  .get("/profile", "Profile")
  .get("/settings", "Settings");

const app = new Elysia()
  .use(swagger())
  .use(users)
  .get("/", () => "Hello Elysia")
  .get("/test", "Testing")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
