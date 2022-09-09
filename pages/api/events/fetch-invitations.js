import { fetchUser } from "../../../services/user.server";

export default async function SendInvitationAPI(req, res) {
  const { email } = req.body;
  await fetchUser(email).then((result) => {
    res.status(200).json({ status: 200, message: result });
  });
}
