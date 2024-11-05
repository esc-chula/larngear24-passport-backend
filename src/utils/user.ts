import prisma from "@/libs/prisma";

export async function getUserId(sessionId: string) {
  const user = await prisma.session.findUnique({
    where: {
      sessionId: sessionId,
    },
    select: {
      userId: true,
    },
  });

  if (!user) {
    throw new Error("Session not found");
  }

  return user.userId;
}

export async function getUser(sessionId: string) {
  const userId = await getUserId(sessionId);

  const user = await prisma.user.findUnique({
    where: {
      user_id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}
