import swagger from "@elysiajs/swagger";
import { PrismaClient } from "@prisma/client";
import { Elysia } from "elysia";

const prisma = new PrismaClient();

const users = new Elysia({ prefix: "/users" })
  .get("/", () => "Users")
  .get("/profile", "Profile")
  .get("/settings", "Settings");

const api = new Elysia({ prefix: "/api"})
  .get("/", () => "API")
  .get('/item', async() => {
    const userid = BigInt(1)
    const item_user = await prisma.user_item.findMany({
      where: {
        user_id: userid,
      },
      select: {
        item_id: true,
      }
    })

    const item_user_id = item_user.map(record => String(record.item_id))
    return {"items": item_user_id}
  })
    
const app = new Elysia()
  .use(swagger())
  .use(users)
  .use(api)
  .get("/", () => "Hello Elysia")
  .get("/test", "Testing")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
