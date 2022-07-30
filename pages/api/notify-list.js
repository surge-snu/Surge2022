import db from "../../lib/prisma";

export default async function NotifyList(req, res) {
  console.log(req.url);
  try {
    const { email } = req.query;
    db.notify
      .create({
        data: { email },
      })
      .then((result) => res.send({ success: true }));
  } catch (e) {
    console.log("Notify List API Error" + e);
    res.send({ Success: false });
  }
}
