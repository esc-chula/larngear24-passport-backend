import fs from 'fs';
import { PrismaClient} from '@prisma/client';

function csvToMembersData(csv: string) {
  const rows = csv.trim().split("\n");
  const headers = rows.shift()?.split(",").map((h) => h.replace(/"/g, ""));
  if (!headers) return [];

  const membersData = rows.map((row) => {
    const values = row.split(",").map((v) => v.replace(/"/g, ""));
    const member: Record<string, string> = {};

    headers.forEach((header, index) => {
      member[header] = values[index];
    });

    
    return {
      lg_number: member["lg_number"],
      prefix: member["prefix"],
      first_name: member["first_name"],
      last_name: member["last_name"],
      nick_name: member["nick_name"],
      school: member["school"],
      baan: member["baan"],
      google_id: member["googleId\r"].slice(0, member["googleId\r"].length -1),
    };
  });

  return membersData;
}


const mockDevMembersData = [
  {
    "lg_number" : "LG_DEV001",
    "prefix": "นางสาว",
    "first_name": "ณภัทร",
    "last_name": "เสรีรักษ์",
    "nick_name": "นีร",
    "school": "Chula",
    "baan": "1",
    "google_id": "117525997933765874261"
  },
  {
    "lg_number" : "LG_DEV002",
    "prefix": "นาย",
    "first_name": "พี่โจ้",
    "last_name": "jojo",
    "nick_name": "jo",
    "school": "Chula",
    "baan": "1",
    "google_id": "113926223118812005219"
  },
];

const prisma = new PrismaClient();
async function main() {
  // gem Nong's data
  const filePath = './prisma/bann_lg24_google_id.csv';
  const csvInput = fs.readFileSync(filePath, 'utf8');
  const mockMembersData = csvToMembersData(csvInput);
  
  console.log("Start seeding...");
  const userMembers = await prisma.members.createMany({
    data: mockMembersData,
  });
  console.log("Created members: ", userMembers);

  // gen Dev Data
  // console.log("Start seeding...");
  // const userMembers = await prisma.members.createMany({
  //   data: mockDevMembersData,
  // });
  // console.log("Created members: ", userMembers);
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
