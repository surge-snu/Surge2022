import { hashSync } from "bcrypt";
import { ironOptions } from "../../../lib/ironOptions";
import { changeUserPassword, fetchUser } from "../../../services/user.server";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(ChangePassword, ironOptions);

async function ChangePassword(req, res) {
  const body = await req.body;
  const response = await changeUserPassword({
    name: body.friendlyName,
    email: body.email,
    college: "",
    password: hashSync(body.password, 10),
  });

  res.send({ status: 200, message: JSON.stringify(response) });
}
