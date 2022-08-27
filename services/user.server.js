import db from "../lib/prisma";

export async function getUser(email) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

export async function createUser(data) {
  return db.user.create({
    data,
  });
}

export async function fetchFriendlyName() {
  return db.user.findMany({
    select: {
      email: true,
      friendlyName: true,
    },
  });
}
