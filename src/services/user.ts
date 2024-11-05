import { Elysia, t } from "elysia";

import prisma from "@/libs/prisma";
import { getUser } from "@/utils/user";
import { bigIntReplacer } from "@/utils/replacer";

export const userService = new Elysia({ prefix: "/user" })
  .onBeforeHandle(async ({ headers, set }) => {
    if (!headers.authorization) {
      set.status = "Unauthorized";
      return { message: "Missing authorization header" };
    }

    if (!headers.authorization.startsWith("Bearer ")) {
      set.status = "Unauthorized";
      return { message: "Invalid authorization header" };
    }
  })
  .get(
    "/profile",
    async ({ headers, set }) => {
      try {
        const sessionId = headers.authorization.split(" ")[1];
        const user = await getUser(sessionId);

        return JSON.stringify(user, bigIntReplacer);
      } catch (error) {
        set.status = "Internal Server Error";
        return { message: "Internal Server Error" };
      }
    },
    {
      headers: t.Object({
        authorization: t.String(),
      }),
    }
  )
  .patch(
    "/username",
    async ({ body, headers, set }) => {
      try {
        const sessionId = headers.authorization.split(" ")[1];
        const user = await getUser(sessionId);

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
      headers: t.Object({
        authorization: t.String(),
      }),
      body: t.Object({
        username: t.String(),
      }),
    }
  );
