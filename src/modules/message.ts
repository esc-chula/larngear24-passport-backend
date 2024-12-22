import { Elysia } from "elysia";

import prisma from "@/libs/prisma";
import { getUser, getUserId } from "@/utils/user";
import { messageModel } from "@/models/message";
import { authorizationModel } from "@/models/authorization";

export const messageService = new Elysia({ prefix: "/message" })
  .use(authorizationModel) 
  .use(messageModel) 
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

  .get("/", async ({ set }) => {
    try {
      const messages = await prisma.message.findMany({
        orderBy: {
            createdAt: "desc", 
          },
          include: {
            user: {
              select: {
                username: true,
                baan: true,
              },
            },
          },
      });

      const processedMessages = messages.map((message) => ({
        ...message,
        message_id: message.message_id.toString(),
        user_id: message.user_id.toString(),
      }));
  
      return processedMessages;

    } catch (error) {
      set.status = "Internal Server Error";
      return { message: "Failed to fetch messages" };
    }
  })

  .post(
    "/",
    async ({ body, userId, set }) => {
      const { message } = body;

      try {
        const new_message = await prisma.message.create({
          data: {
            message: message.toString(),
            user_id: BigInt(userId),
          },
        });

        set.status = "Created";
        return {
          ...new_message,
          message_id: new_message.message_id.toString(),
          user_id: new_message.user_id.toString(),
        };
        
      } catch (error) {
        set.status = "Internal Server Error";
        return { message: "Failed to send message" };
      }
    },
    { body: "sendMessageBody" }
  )

  .patch(
    "/:id",
    async ({ params, body, userId, set }) => {
      const messageId = parseInt(params.id, 10);
      const { message } = body;

      try {
        const existingMessage = await prisma.message.findFirst({
          where: {
            message_id: messageId,
          },
        });

        if (!existingMessage) {
          set.status = "Forbidden";
          return { message: "You are not authorized to edit this message" };
        }

        if (typeof message !== 'string' || message.length < 1 || message.length > 500) {
          set.status = "Bad Request";
          return { message: "Invalid message content" };
        }

        const updatedMessage = await prisma.message.update({
          where: { message_id: messageId },
          data: { message },
        });

        set.status = "OK";
        return {
          ...updatedMessage,
          message_id: updatedMessage.message_id.toString(),
          user_id: updatedMessage.user_id.toString(),
        };
      } catch (error) {
        set.status = "Internal Server Error";
        return { message: "Failed to edit message" };
      }
    },
    { body: "sendMessageBody" }
  )
  .delete("/:id", async ({ params, userId, set }) => {
    const messageId = parseInt(params.id, 10);

    try {
      // Ensure only the owner can delete the message
      const message = await prisma.message.findFirst({
        where: {
          message_id: messageId,
          user_id: BigInt(userId),
        },
      });

      if (!message) {
        set.status = "Forbidden";
        return { message: "You are not authorized to delete this message" };
      }

      await prisma.message.delete({
        where: {
          message_id: messageId,
        },
      });

      set.status = "OK";
      return { message: "Message deleted successfully" };
    } catch (error) {
      set.status = "Internal Server Error";
      return { message: "Failed to delete message" };
    }
  });