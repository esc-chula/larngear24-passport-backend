import { Elysia, t } from "elysia";

export const messageModel = new Elysia().model({
  sendMessageBody: t.Object({
    message: t.String({ minLength: 1, maxLength: 1000 }),
  }),
});
