import { ironOptions } from "../../../lib/ironOptions";
import { withIronSessionApiRoute } from "iron-session/next";
import { customAlphabet } from "nanoid";
import { payForCart } from "../../../services/events.server";

const nanoid = customAlphabet("1234567890abcdef");
export default withIronSessionApiRoute(Pay, ironOptions);

async function Pay(req, res) {
  const body = await req.body;
  const paymentId = nanoid(10);
  const paySplit = body.paySplit.map((member) => {
    return {
      ...member,
      paymentId: paymentId,
    };
  });
  const response = await payForCart(paySplit);

  res.send({ status: 200, message: JSON.stringify(response) });
}
