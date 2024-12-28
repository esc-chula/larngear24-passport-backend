import { createPinoLogger } from "@bogeychan/elysia-logger";
import { PrismaClient } from "@prisma/client";

export const log = createPinoLogger({ level: "info", timestamp: true });

const prismaClientSingleton = () => {
  log.info(`Connection Prisma to database: ${Bun.env.DATABASE_URL}`);
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (import.meta.env.NODE_ENV === "development") {
  globalThis.prismaGlobal = prisma;
}
