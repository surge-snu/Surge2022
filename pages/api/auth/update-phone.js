import { ironOptions } from "../../../lib/ironOptions";
import { withIronSessionApiRoute } from "iron-session/next";
import { updatePhoneDB } from "../../../services/user.server";

export default withIronSessionApiRoute(UpdatePhone, ironOptions);

async function UpdatePhone(req, res) {
  const body = await req.body;

  const response = await updatePhoneDB({
    email: body.email,
    phone: body.phone
  });

  res.send({ status: 200, message: JSON.stringify(response) });
}
