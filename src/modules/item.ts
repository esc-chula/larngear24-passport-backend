import { Elysia } from "elysia";

import prisma from "@/libs/prisma";
import { getUser, getUserId } from "@/utils/user";

import { authorizationModel } from "@/models/authorization";
import { itemModel } from "@/models/item";

export const itemService = new Elysia({ prefix: "/item" })
  .use(authorizationModel)
  .use(itemModel)
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

  .get("/", async ({ userId }) => {
    const user = await getUser(userId);

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

  .post(
    "/redeem",
    async ({ body, set, userId }) => {
      const { items, dresses } = body;

      const format_item = items.map((item) => ({
        item_id: BigInt(item),
        item_name: item.toString(),
      }));
      const Item = await prisma.item.createMany({
        data: format_item,
        skipDuplicates: true,
      });

      const format_u_item = items.map((item) => ({
        user_id: userId,
        item_id: BigInt(item),
      }));
      const user_Item = await prisma.user_Item.createMany({
        data: format_u_item,
        skipDuplicates: true,
      });

      const format_dress = dresses.map((dress) => ({
        dress_id: BigInt(dress),
        dress_name: dress.toString(),
      }));
      const Dress = await prisma.dress.createMany({
        data: format_dress,
        skipDuplicates: true,
      });

      const format_u_dress = dresses.map((dress) => ({
        user_id: userId,
        dress_id: BigInt(dress),
      }));
      const user_Dress = await prisma.user_Dress.createMany({
        data: format_u_dress,
        skipDuplicates: true,
      });

      set.status = "OK";
      return {
        user_id: userId.toString(),
        items: items,
        dresses: dresses,
      };
    },
    {
      body: "itemRedeemBody",
    },
  )
  .delete(
    "/redeem",
    async ({ body, set, userId }) => {
      const { items, dresses } = body;

      const user = await getUser(userId);

      const format_item = items.map((item) => BigInt(item));
      const user_Item = await prisma.user_Item.deleteMany({
        where: {
          user: user,
          item_id: { in: format_item },
        },
      });
      const Item = await prisma.item.deleteMany({
        where: {
          item_id: { in: format_item },
        },
      });

      const format_dress = dresses.map((dress) => BigInt(dress));
      const user_Dress = await prisma.user_Dress.deleteMany({
        where: {
          user: user,
          dress_id: { in: format_dress },
        },
      });
      const Dress = await prisma.dress.deleteMany({
        where: {
          dress_id: { in: format_dress },
        },
      });

      set.status = "OK";
      return {
        user_id: userId.toString(),
        items: items,
        dresses: dresses,
      };
    },
    {
      body: "itemRedeemBody",
    },
  );
