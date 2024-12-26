import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

import { authService } from "@/modules/auth";
import { itemService } from "@/modules/item";
import { profileService } from "@/modules/profile";
import { messageService } from "./modules/message";

const app = new Elysia()
  .use(swagger())
  .use(cors()) // TODO: Allow CORS by Top level domain
  .use(authService)
  .use(profileService)
  .use(itemService)
  .use(messageService)
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
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
