import { PrismaClient } from "@prisma/client";
import { Elysia } from "elysia";

const prisma = new PrismaClient();

const api = new Elysia({ prefix: "/api" })
  .get("/", () => "API")
  .get("/items", async () => {
    const userid = BigInt(1);
    const item_user = await prisma.user_Item.findMany({
      where: {
        user_id: userid,
      },
      select: {
        item_id: true,
      },
    });

    const item_user_id = item_user.map((record) => String(record.item_id));
    return { items: item_user_id };
  });

export default api;
