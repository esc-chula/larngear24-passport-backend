-- CreateTable
CREATE TABLE "user" (
    "user_id" BIGSERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "baan" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "item" (
    "item_id" BIGSERIAL NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "user_item" (
    "user_item_id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "item_id" BIGINT NOT NULL,

    CONSTRAINT "user_item_pkey" PRIMARY KEY ("user_item_id")
);

-- CreateTable
CREATE TABLE "dress" (
    "dress_id" BIGSERIAL NOT NULL,
    "dress_name" TEXT NOT NULL,

    CONSTRAINT "dress_pkey" PRIMARY KEY ("dress_id")
);

-- CreateTable
CREATE TABLE "user_dress" (
    "user_dress_id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "dress_id" BIGINT NOT NULL,

    CONSTRAINT "user_dress_pkey" PRIMARY KEY ("user_dress_id")
);

-- AddForeignKey
ALTER TABLE "user_item" ADD CONSTRAINT "user_item_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "item"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_item" ADD CONSTRAINT "user_item_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_dress" ADD CONSTRAINT "user_dress_dress_id_fkey" FOREIGN KEY ("dress_id") REFERENCES "dress"("dress_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_dress" ADD CONSTRAINT "user_dress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
