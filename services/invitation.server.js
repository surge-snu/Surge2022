import { InvitationStatus } from "@prisma/client";
import db from "../lib/prisma";

export async function sendInvitations(data) {
  return db.invitations.createMany({
    data: data,
    skipDuplicates: true,
  });
}

export async function acceptInvitation(data) {
  return db.invitations.update({
    where: {
      id: data.id,
    },
    data: {
      status: InvitationStatus.ACCEPTED,
    },
  });
}
export async function rejectInvitation(data) {
  return db.invitations.update({
    where: {
      id: data.id,
    },
    data: {
      status: InvitationStatus.REJECTED,
    },
  });
}

export async function CancelInvitation(data) {
  return db.invitations.update({
    where: {
      id: data.id,
    },
    data: {
      status: InvitationStatus.CANCELLED,
    },
  });
}

export async function RevokeInvitation(data) {
  return db.invitations.update({
    where: {
      id: data.id,
    },
    data: {
      status: InvitationStatus.REVOKED,
    },
  });
}
