# Elysia with Bun runtime

## Getting Started

First, copy `.env.template` to `.env` and fill in the required environment variables.

### Creating the database

Second, make sure that Docker is installed as this service require database to run locally. To start the database run:

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

### To install dependencies run

```bash
bun install
```

### To start the development server run

```bash
bun run dev
```

Open <http://localhost:3000/> with your browser to see the result.
