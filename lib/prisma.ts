import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
declare global {
  var globalPrisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.globalPrisma) {
    global.globalPrisma = new PrismaClient();
  }
  prisma = global.globalPrisma;
}

export default prisma;
