import { Elysia, t } from "elysia";

export const itemModel = new Elysia().model({
  itemRedeemBody: t.Object({
    items: t.Array(t.Number()),
    dresses: t.Array(t.String()),
  }),
});
