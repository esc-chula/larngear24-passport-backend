import { Elysia, t } from "elysia";

export const authModel = new Elysia().model({
  signInBody: t.Object({
    id: t.String(),
    email: t.String(),
    image: t.String(),
  }),
});
