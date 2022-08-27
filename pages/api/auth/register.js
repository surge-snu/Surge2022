import { withIronSessionApiRoute } from "iron-session/next/dist";
import { ironOptions } from "../../../lib/ironOptions";

export default withIronSessionApiRoute(Register, ironOptions);

async function Register(req, res) {
  
}
