import { getUser } from "../../../services/user.server";

export default async function isUser(req, res) {
  const { email } = await req.body;
  const user = await getUser(email);
  if (user) {
    res.send({ message: "User already exists" });
  } else {
    res.send({ message: "User does not exist" });
  }
}
