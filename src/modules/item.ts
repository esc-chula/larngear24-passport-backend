import prisma from "@/libs/prisma";
import { Elysia, t } from "elysia";
import { getUser, getUserId } from "@/utils/user";
import { authorizationModel } from "@/models/authorization";

export const itemService = new Elysia({ prefix: "/item" })
  .use(authorizationModel)
  .guard({
    headers: "authorizationHeader",
  })
  .derive(async ({ headers }) => {
      const auth = headers["authorization"];
      const sessionId = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
      const userId = (await getUserId(sessionId)) as bigint;
  
      return {
        userId,
      };
  })

  .get("/", async ({userId}) => {
    const user =  await getUser(userId);
    //const userId = BigInt(1)
    const item_user = await prisma.user_Item.findMany({
      where: {
        user_id: userId,
      },
      select: {
        item_id: true,
      },
    });

    const item_user_id = item_user.map((record) => String(record.item_id));
    return { items: item_user_id };
  })

  .post('/redeem',async ({ body, query, userId }) => {
    const { items, dresses } = body
    //const user_id = BigInt(1);

    const format_item = items.map((item) => ({
      item_id : BigInt(item),
      item_name : item.toString(),
    }));
    const Item = await prisma.item.createMany({
      data: format_item,
      skipDuplicates: true,
    });

    const format_u_item = items.map((item) => ({
      userId, //change to userId
      item_id : BigInt(item),
    }));
    const user_Item = await prisma.user_Item.createMany({
      data: format_u_item,
      skipDuplicates: true,
    });

    const format_dress = dresses.map((dress) => ({
      dress_id : BigInt(dress),
      dress_name : dress.toString(),
    }));
    const Dress = await prisma.dress.createMany({
      data: format_dress,
      skipDuplicates: true,
    });

    const format_u_dress = dresses.map((dress) => ({
      userId, //change to userId
      dress_id : BigInt(dress),
    }));
    const user_Dress = await prisma.user_Dress.createMany({
      data: format_u_dress,
      skipDuplicates: true,
    });
    
    return {
      "status": "success",
      "data": {
        "user_id": userId.toString(), //change to userId
        "items": items,
        "dresses": dresses
      }
    }
  })
  
  .delete('/redeem', async ({ body , query, userId }) => {
    const { items, dresses } = body
    //const user_id = BigInt(1);

    const format_item = items.map((item) => BigInt(item));
    const user_Item = await prisma.user_Item.deleteMany({
      where: {
        userId: user_id, //change to userId
        item_id: {in: format_item}
      }
    });
    const Item = await prisma.item.deleteMany({
      where: {
        item_id: {in: format_item}
      }
    });
    

    const format_dress = dresses.map((dress) => BigInt(dress));
    const user_Dress = await prisma.user_Dress.deleteMany({
      where: {
        userId: user_id, //change to userId
        dress_id: {in: format_dress}
      }
    });
    const Dress = await prisma.dress.deleteMany({
      where: {
        dress_id: {in: format_dress}
      }
    });

    return {
      "status": "success",
      "data": {
        "user_id": userId.toString(), //change to userId
        "items": items,
        "dresses": dresses
      }
    }
  });
