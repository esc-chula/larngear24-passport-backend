import { PrismaClient } from "@prisma/client";
import { Elysia } from "elysia";

const prisma = new PrismaClient();

const profileApi = new Elysia({ prefix: "/api" })
  .get("/", () => "API")
  .get("/users", async () => {
    const userid = BigInt(1);
    const user = await prisma.user.findFirst({
      where: {
        user_id: userid,
      },
    })
  
    const item_user = await prisma.user_Item.findMany({
      where: {
        user_id: userid,
      },
      select: {
        item_id: true,
      },
    });
    const item_user_id = item_user.map((record) => String(record.item_id));
    const dress_user = await prisma.user_Dress.findMany({
      where: {
        user_id: userid,
      },
      select: {
        dress_id: true,
      },
    });
    const dress_user_id = dress_user.map((record) => String(record.dress_id));

    return {
      "user_id": user?.user_id.toString(),
      "username": user?.username,
      "baan": user?.baan.toString(),
      "email": user?.email,
      "dresses": dress_user_id,
      "items":item_user_id
  };
  });

export default profileApi;
