import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/ironOptions";

export default withIronSessionApiRoute(logoutRoute, ironOptions);

async function logoutRoute(req, res) {
  req.session.destroy();
  res.send({ ok: true });
}
