import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";

import { authService } from "@/modules/auth";
import { profileService } from "@/modules/profile";

import API from "@/modules/item";

const app = new Elysia()
  .use(swagger())
  .use(authService)
  .use(profileService)
  .use(API)
  .onError(({ error, code }) => {
    if (code === "NOT_FOUND") {
      return "Not found";
    }

    console.error(error);
    return "Internal server error";
  })
  .get("/healthz", "OK!")
  .listen(3030);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
