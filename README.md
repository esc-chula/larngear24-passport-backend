# Elysia with Bun runtime

## Getting Started

First, copy `.env.template` to `.env` and fill in the required environment variables.

### Creating the database

Second, make sure that Docker is installed as this service require database to run locally. To start the database run:

```bash
docker compose -f ./docker/docker-compose.dev.yaml up
```

You can enter pgadmin via <http://localhost:5050> with the following credentials (see docker-compose.dev.yaml)

> email: <admin@admin.com>
>
> password: root

Then go to register page

1. Go to `Connection` page and add
   1. hostname: pd_db
   2. username: admin
   3. password: root
2. Click Save
3. Connect to db

After finishing development, you can stop the database by running:

```bash
docker compose -f ./docker/docker-compose.dev.yaml down
```

### To setup database for the first time

```bash
bunx prisma generate
bunx prisma migrate dev
bunx tsx ./prisma/seed.ts
bunx tsx ./prisma/seed_members.ts # make sure you has baan_lg24_google_id.csv in /prisma folder
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

### To delete database and start from scratch

```bash
docker compose -f ./docker/docker-compose.dev.yaml down
docker volume rm lg24-passport-backend_pg-data lg24-passport-backend_pgadmin-data
docker compose -f ./docker/docker-compose.dev.yaml up -d
```
