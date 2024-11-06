import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";

import { authService } from "@/services/auth";
import { userService } from "./services/user";

import { PrismaClient } from "@prisma/client";
import { Elysia } from "elysia";
import API from './module/item'

const prisma = new PrismaClient();

const users = new Elysia({ prefix: "/users" })
  .get("/", () => "Users")
  .get("/profile", "Profile")
  .get("/settings", "Settings");
    
const app = new Elysia()
  .use(swagger())
  .use(authService)
  .use(userService)
  .use(API)
  .onError(({ error, code }) => {
    if (code === "NOT_FOUND") {
      return "Not found";
    }

    console.error(error);
    return "Internal server error";
  })
  .get("/healthz", "OK!")
  .listen(3030);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
