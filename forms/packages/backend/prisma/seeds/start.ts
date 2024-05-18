import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.form.upsert({
    where: {
      id: 1,
    },
    create: {
      name: "form 1",
    },
    update: {
      name: "form 1",
    },
  });
  await prisma.form.upsert({
    where: {
      id: 2,
    },
    create: {
      name: "form 2",
    },
    update: {
      name: "form 2",
    },
  });
  await prisma.form.upsert({
    where: {
      id: 3,
    },
    create: {
      name: "form 3",
    },
    update: {
      name: "form 3",
    },
  });
};

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
