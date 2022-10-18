import db from "../lib/prisma";

export async function fetchUser(email) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

export async function fetchUserData(email) {
  return db.user.findUnique({
    where: {
      email,
    },
    include: {
      Team: {
        include: {
          Event: {
            select: {
              category: true,
              winnerPrize: true,
              winningTeamPrize: true,
              runnerUpTeamPrize: true,
              runnerUpPrize: true,
              minPlayers: true,
              maxPlayers: true,
              pricePerPlayer: true,
              venue: true,
              location: true,
              eventName: true,
            },
          },
          TeamMembers: {
            select: {
              id: true,
              teamId: true,
              name: true,
              email: true,
              phone: true,
              eventId: true,
              playerType: true,
            },
          },
          PaymentDetails: {
            select: {
              id: true,
              teamId: true,
              paymentId: true,
              amount: true,
            },
          },
        },
      },
    },
  });
}

export async function createUser(data) {
  return db.user.create({
    data,
  });
}

export async function changeUserPassword(data) {
  return db.user.update({
    where: {
      email: data.email,
    },
    data: {
      password: data.password,
    },
  });
}

export async function fetchFriendlyName(name) {
  return db.user.findUnique({
    where: {
      name,
    },
  });
}

export async function fetchAllUsers() {
  return db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

export async function updateCollegeDB(data) {
  return db.user.update({
    where: {
      email: data.email,
    },
    data: {
      college: data.college,
    },
  });
}
export async function updatePhoneDB(data) {
  return db.user.update({
    where: {
      email: data.email,
    },
    data: {
      phone: data.phone,
    },
  });
}
