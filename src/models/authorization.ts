import { Elysia, t } from "elysia";

export const authorizationModel = new Elysia().model({
  authorizationHeader: t.Object({
    authorization: t.String(),
  }),
});
