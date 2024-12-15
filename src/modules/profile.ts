import { Elysia } from "elysia";

import prisma from "@/libs/prisma";
import { getUser, getUserId } from "@/utils/user";

import { authorizationModel } from "@/models/authorization";
import { profileModel } from "@/models/profile";

export const profileService = new Elysia({ prefix: "/user" })
  .use(authorizationModel)
  .use(profileModel)
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
    const dress_user = await prisma.user_Dress.findMany({
      where: {
        user_id: userId,
      },
      select: {
        dress_id: true,
      },
    });
    const dress_user_id = dress_user.map((record) => String(record.dress_id));

    return {
      user_id: user?.user_id.toString(),
      username: user?.username,
      baan: user?.baan.toString(),
      email: user?.email,
      dresses: dress_user_id,
      items: item_user_id,
    };
  })
  .patch(
    "/changename",
    async ({ body, set, userId }) => {
      try {
        const newname = body.newname;

        await prisma.user.update({
          where: {
            user_id: userId,
          },
          data: {
            username: newname,
          },
        });
      } catch (error) {
        set.status = "Conflict";
        return {
          message: "failed",
        };
      }

      return {
        message: "Successfully change name",
      };
    },
    {
      body: "changeNameBody",
    },
  );
