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

Open <http://localhost:3030/> with your browser to see the result.

### To delete database and start from scratch

```bash
docker compose -f ./docker/docker-compose.dev.yaml down
docker volume rm lg24-passport-backend_pg-data lg24-passport-backend_pgadmin-data
docker compose -f ./docker/docker-compose.dev.yaml up -d
```

## Production

### To build and run docker container locally

```bash
docker buildx build -t lg-passport-backend:0.0.1 .
```

```bash
docker run --name backend -p <PORT>:3030 -e DATABASE_URL="postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@<DB_HOSTNAME>:5432/<DATABASE_NAME>?schema=public" lg-passport-backend:0.0.1
```

If docker is run outside of the network of the database, make sure to add the container to the network with `--network`. Thus, the run command will look like:

```bash
docker run --name backend -p <PORT>:3030 --network <NETWORK_NAME> -e DATABASE_URL="postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@<DB_HOSTNAME>:5432/<DATABASE_NAME>?schema=public" lg-passport-backend:0.0.1
```

### Seed the database

There are 3 tables that need to be seeded: `Members`, `Dress`, and `Items`. To seed the database, open the pg admin and import the data from the csv files and upload them to the database directly.
