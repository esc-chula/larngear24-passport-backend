import { Elysia } from "elysia";

import prisma from "@/libs/prisma";

import { authModel } from "@/models/auth";

export const authService = new Elysia({ prefix: "/auth" }).use(authModel).post(
  "/sign-in",
  async ({ body, set }) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });
      if (!user) {
        const createdSession = await prisma.session.findUnique({
          where: {
            sessionId: body.id,
          },
        });

        if (createdSession) {
          set.status = "Conflict";
          return { message: "Session ID Already Exists" };
        }

        // TODO: FETCH BAAN FROM SOMEWHERE & VALIDATE USER ROLE
        const createdUser = await prisma.user.create({
          data: {
            username: body.name,
            baan: 999,
            email: body.email,
          },
        });

        await prisma.session.create({
          data: {
            userId: createdUser.user_id,
            sessionId: body.id,
          },
        });

        return { message: "Signin Success" };
      } else {
        await prisma.session.update({
          where: {
            userId: user.user_id,
          },
          data: {
            sessionId: body.id,
          },
        });
      }
    } catch (error) {
      set.status = "Internal Server Error";
      return { message: "Internal Server Error" };
    }
  },
  {
    body: "signInBody",
  }
);
