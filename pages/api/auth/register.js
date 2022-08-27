import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/ironOptions";
import db from "../../../lib/prisma";
import { hashSync } from "bcrypt";

export default withIronSessionApiRoute(Register, ironOptions);

async function Register(req, res) {
  const body = await req.body;
  const response = await db.user.create({
    data: {
      name: body.friendlyName,
      email: body.email,
      college: "",
      password: hashSync(body.password, 10),
    },
  });

  res.send({ status: 200, message: JSON.stringify(response) });
}
