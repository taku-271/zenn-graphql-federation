import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.form.upsert({
    where: {
      id: 1,
    },
    create: {
      name: "form 1",
      projectId: 1,
    },
    update: {
      name: "form 1",
      projectId: 1,
    },
  });
  await prisma.form.upsert({
    where: {
      id: 2,
    },
    create: {
      name: "form 2",
      projectId: 1,
    },
    update: {
      name: "form 2",
      projectId: 1,
    },
  });
  await prisma.form.upsert({
    where: {
      id: 3,
    },
    create: {
      name: "form 3",
      projectId: 2,
    },
    update: {
      name: "form 3",
      projectId: 2,
    },
  });
};

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
