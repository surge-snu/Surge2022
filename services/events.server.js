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
