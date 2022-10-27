import { PaymentStatus } from "@prisma/client";
import db from "../lib/prisma";

export async function fetchAllPayments() {
  return db.paymentDetails.findMany({
    select: {
      id: true,
      amount: true,
      teamId: true,
      paymentId: true,
    },
  });
}

export async function fetchUnpaidPayments() {
  return db.paymentDetails.findMany({
    where: {
      paymentStatus: PaymentStatus.NOT_PAID,
    },
  });
}