import { sendInvitations } from "../../../services/invitation.server";

export default async function SendInvitationAPI(req, res) {
  const data = req.body;
  await sendInvitations(data).then((result) => {
    res.status(200).json({ status: 200, message: result });
  });
}
