import swagger from "@elysiajs/swagger";
import { Prisma, PrismaClient } from "@prisma/client";
import { Elysia } from "elysia";

const prisma = new PrismaClient();

async function getAccount() {
  const account = await prisma.accounts.findMany({});
  return account;
}

async function createAccount() {
  const account = await prisma.accounts.create({
    data: {
      email: "random127",
      password: "password",
      username: "random127",
      created_on: new Date(),
    },
  });
  return account;
}

const users = new Elysia({ prefix: "/users" })
  .get("/", () => "Users")
  .get("/account", getAccount)
  .get("/create", createAccount)
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
