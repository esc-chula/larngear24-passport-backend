import { Elysia, t } from "elysia";

import prisma from "@/libs/prisma";
import { getUser, getUserId } from "@/utils/user";
import { bigIntReplacer } from "@/utils/replacer";

import { authorizationModel } from "@/models/authorization";

export const userService = new Elysia({ prefix: "/user" })
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
  .get("/profile", async ({ userId, set }) => {
    try {
      const user = await getUser(userId);

      return JSON.stringify(user, bigIntReplacer);
    } catch (error) {
      console.error(error, JSON.stringify(error));
      set.status = "Internal Server Error";
      return { message: "Internal Server Error" };
    }
  })
  .patch(
    "/username",
    async ({ userId, body, set }) => {
      try {
        const user = await getUser(userId);

        await prisma.user.update({
          where: {
            user_id: user.user_id,
          },
          data: {
            username: body.username,
          },
        });

        return { message: "Username updated" };
      } catch (error) {
        set.status = "Internal Server Error";
        return { message: "Internal Server Error" };
      }
    },
    {
      body: t.Object({
        username: t.String(),
      }),
    }
  );
