import { Elysia, t } from "elysia";

import { getUser } from "@/utils/user";
import { bigIntReplacer } from "@/utils/replacer";

export const userService = new Elysia({ prefix: "/user" }).get(
  "/profile",
  async ({ headers, set }) => {
    if (!headers.authorization) {
      set.status = "Unauthorized";
      return { message: "Missing authorization header" };
    }

    if (!headers.authorization.startsWith("Bearer ")) {
      set.status = "Unauthorized";
      return { message: "Invalid authorization header" };
    }

    const sessionId = headers.authorization.split(" ")[1];
    const user = await getUser(sessionId);

    return JSON.stringify(user, bigIntReplacer);
  },
  {
    headers: t.Object({
      authorization: t.String(),
    }),
  }
);
