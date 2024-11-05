import prisma from "@/libs/prisma";

export async function getUserId(sessionId: string | null) {
  if (!sessionId) {
    throw new Error("Invalid Session");
  }

  const user = await prisma.session.findUnique({
    where: {
      sessionId: sessionId,
    },
    select: {
      userId: true,
    },
  });

  if (!user) {
    throw new Error("Invalid Session");
  }

  return user.userId;
}

export async function getUser(userId: bigint) {
  const user = await prisma.user.findUnique({
    where: {
      user_id: userId,
    },
  });

  if (!user) {
    throw new Error("Invalid User");
  }

  return user;
}
