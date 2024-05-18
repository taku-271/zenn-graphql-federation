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

  await prisma.form.upsert({
    where: {
      id: 1,
    },
    create: {
      id: 1,
      projectId: 1,
    },
    update: {
      id: 1,
      projectId: 1,
    },
  });

  await prisma.form.upsert({
    where: {
      id: 2,
    },
    create: {
      id: 2,
      projectId: 1,
    },
    update: {
      id: 2,
      projectId: 1,
    },
  });

  await prisma.form.upsert({
    where: {
      id: 3,
    },
    create: {
      id: 3,
      projectId: 2,
    },
    update: {
      id: 3,
      projectId: 2,
    },
  });
};

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
