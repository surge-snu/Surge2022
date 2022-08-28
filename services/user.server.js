import db from "../lib/prisma";

export async function fetchUser(email) {
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

export async function fetchFriendlyName(name) {
  return db.user.findUnique({
    where: {
      name,
    },
  });
}
