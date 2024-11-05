-- CreateTable
CREATE TABLE "User" (
    "user_id" BIGSERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "baan" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Item" (
    "item_id" BIGSERIAL NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "User_Item" (
    "user_item_id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "item_id" BIGINT NOT NULL,

    CONSTRAINT "User_Item_pkey" PRIMARY KEY ("user_item_id")
);

-- CreateTable
CREATE TABLE "Dress" (
    "dress_id" BIGSERIAL NOT NULL,
    "dress_name" TEXT NOT NULL,

    CONSTRAINT "Dress_pkey" PRIMARY KEY ("dress_id")
);

-- CreateTable
CREATE TABLE "User_Dress" (
    "user_dress_id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "dress_id" BIGINT NOT NULL,

    CONSTRAINT "User_Dress_pkey" PRIMARY KEY ("user_dress_id")
);

-- CreateTable
CREATE TABLE "Session" (
    "userId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_userId_key" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionId_key" ON "Session"("sessionId");

-- AddForeignKey
ALTER TABLE "User_Item" ADD CONSTRAINT "User_Item_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Item" ADD CONSTRAINT "User_Item_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Dress" ADD CONSTRAINT "User_Dress_dress_id_fkey" FOREIGN KEY ("dress_id") REFERENCES "Dress"("dress_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Dress" ADD CONSTRAINT "User_Dress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
