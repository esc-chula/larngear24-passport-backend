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
        const memberInfo = await prisma.members.findUnique({
          where : {
            google_id : body.id,
          }
        })
        

        if(!memberInfo){
          set.status = "Conflict";
          return { message: "Google Account not allow" };
        }

        const createdUser = await prisma.user.create({
          data: {
            username: `${memberInfo.first_name} ${memberInfo.last_name}`,
            baan: parseInt(memberInfo.baan),
            email: body.email,
            image : body.image,
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
  },
);
