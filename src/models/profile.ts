import { Elysia, t } from "elysia";

export const profileModel = new Elysia().model({
  changeNameBody: t.Object({
    newname: t.String(),
  }),
});
