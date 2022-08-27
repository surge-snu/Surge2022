import { hashSync } from "bcrypt";
import { ironOptions } from "../../../lib/ironOptions";
import { createUser } from "../../../services/user.server";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(Register, ironOptions);

async function Register(req, res) {
  const body = await req.body;
  const response = await createUser({
    name: body.friendlyName,
    email: body.email,
    college: "",
    password: hashSync(body.password, 10),
  });

  res.send({ status: 200, message: JSON.stringify(response) });
}
