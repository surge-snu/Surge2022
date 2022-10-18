import { PaymentStatus } from "@prisma/client";
import db from "../lib/prisma";

export async function fetchAllEvents() {
  return db.event.findMany();
}

export async function fetchEvent(eventId) {
  return db.event.findUnique({
    where: {
      eventId: eventId,
    },
  });
}

export async function createTeam(data) {
  return {
    teamDetails: await db.team.create({
      data: data.teamDetails,
    }),
    teamMembers: await db.teamMember.createMany({
      data: data.teamMembers,
    }),
  };
}

export async function CreatePendingOrderDB(data) {
  return db.paymentDetails.createMany({
    data,
  });
}

export async function updatePaymentStatus(data) {
  return db.team.updateMany({
    data: {
      paymentStatus: PaymentStatus.PENDING,
    },
    where: {
      teamId: { in: data },
    },
  });
}
