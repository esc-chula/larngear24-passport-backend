# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Development

This service require database to run locally. To start the database run:

```bash
docker compose -f ./docker/docker-compose.dev.yaml up
```

After finishing development, you can stop the database by running:

```bash
docker compose -f ./docker/docker-compose.dev.yaml down
```

### To setup database for the first time

```bash
bunx prisma generate
bunx prisma migrate dev
```

**Note:** You can also run `bunx prisma studio` to open the Prisma Studio to see the database.
Note2: `prisma migrate dev` can reset the database, so be careful when running this command.

To start the development server run:

```bash
bun install
bun run dev
```

Open <http://localhost:3000/> with your browser to see the result.
