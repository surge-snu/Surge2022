import { ironOptions } from "../../../lib/ironOptions";
import { withIronSessionApiRoute } from "iron-session/next";
import { updateCollegeDB } from "../../../services/user.server";

export default withIronSessionApiRoute(UpdateCollege, ironOptions);

async function UpdateCollege(req, res) {
  const body = await req.body;

  const response = await updateCollegeDB({
    email: body.email,
    college: body.college
  });

  res.send({ status: 200, message: JSON.stringify(response) });
}
