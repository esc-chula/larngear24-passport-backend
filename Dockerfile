FROM oven/bun:1.1.34 AS base
WORKDIR /app


### Build
FROM base AS build
WORKDIR /app
# Cache packages installation
COPY package.json package.json
COPY bun.lockb bun.lockb
COPY ./prisma ./prisma/

RUN bun install

COPY . .

ENV NODE_ENV=production
RUN bun run build

### Release
FROM base AS release

WORKDIR /app

# Required for prisma
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json package.json
COPY --from=build /app/dist/ ./dist
COPY --from=build /app/prisma/ ./prisma

ENV NODE_ENV=production

EXPOSE 3030

CMD ["bun", "run" , "start:migrate:prod"]
