-- CreateTable
CREATE TABLE "Message" (
    "message_id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "message" VARCHAR(255) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("message_id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
