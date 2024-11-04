import { Prisma, PrismaClient } from "@prisma/client";

const mockItemData: Prisma.itemCreateInput[] = [
  {
    item_id: 1,
    item_name: "1",
  },
  {
    item_id: 2,
    item_name: "2",
  },
];

const mockUserData: Prisma.userCreateInput[] = [
  {
    user_id: 1,
    email: "john@example.com",
    username: "john",
    baan: 1,
  },
];

const mockDressData: Prisma.dressCreateInput[] = [
  {
    dress_id: 1,
    dress_name: "1",
  },
  {
    dress_id: 2,
    dress_name: "2",
  },
];

const mockItemUserData = [
  {
    user_id: 1,
    item_id: 1,
  },
  {
    user_id: 1,
    item_id: 2,
  },
];

const mockUserDressData = [
  {
    user_id: 1,
    dress_id: 1,
  },
  {
    user_id: 1,
    dress_id: 2,
  },
];

const prisma = new PrismaClient();
async function main() {
  console.log("Start seeding...");
  const items = await prisma.item.createMany({
    data: mockItemData,
  });
  console.log("Created items: ", items);

  const users = await prisma.user.createMany({
    data: mockUserData,
  });
  console.log("Created users: ", users);

  const dresses = await prisma.dress.createMany({
    data: mockDressData,
  });
  console.log("Created dresses: ", dresses);

  const userItems = await prisma.user_item.createMany({
    data: mockItemUserData,
  });
  console.log("Created item_users: ", userItems);

  const userDresses = await prisma.user_dress.createMany({
    data: mockUserDressData,
  });
  console.log("Created user_dresses: ", userDresses);
}

main()
  .then(async (res) => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
    process.exit(1);
  });
