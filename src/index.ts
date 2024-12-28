import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

import { authService } from "@/modules/auth";
import { itemService } from "@/modules/item";
import { profileService } from "@/modules/profile";
import { fileLogger } from "@bogeychan/elysia-logger";
import { log } from "./libs/prisma";
import { messageService } from "./modules/message";

const port = Bun.env.PORT || 3030;

const app = new Elysia()
  .use(
    fileLogger({
      file: "./out.log",
      autoLogging: true,
    }).derive({ as: "global" }, ({ log, ...rest }) => ({
      fileLogger: log,
      ...rest,
    })),
  )
  .use(log.into({ autoLogging: true }))
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

    log.error(error);

    return "Internal server error";
  })
  .get("/healthz", "OK!")
  .listen(port);

log.info(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
