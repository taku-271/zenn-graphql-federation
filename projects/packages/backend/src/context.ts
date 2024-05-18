import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type GraphqlContext = {
  prisma: PrismaClient;
};

const createContext = (): GraphqlContext => {
  return {
    prisma,
  };
};

export default createContext;
