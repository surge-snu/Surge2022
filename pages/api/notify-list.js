import db from "../../lib/prisma";

export default async function NotifyList(req, res) {
  try {
    const { email } = req.query;
    db.notify
      .create({
        data: { email },
      })
      .then((result) => res.send({ success: true }));
  } catch (e) {
    res.send({ Success: false });
  }
}
