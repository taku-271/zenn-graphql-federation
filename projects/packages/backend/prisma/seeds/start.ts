import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.project.upsert({
    where: {
      id: 1,
    },
    create: {
      name: "project 1",
    },
    update: {
      name: "project 1",
    },
  });
  await prisma.project.upsert({
    where: {
      id: 2,
    },
    create: {
      name: "project 2",
    },
    update: {
      name: "project 2",
    },
  });
};

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
