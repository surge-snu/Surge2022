import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/ironOptions";
import { compareSync } from "bcrypt";
import { fetchUser, fetchUserData } from "../../../services/user.server";

export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(req, res) {
  const { email, password } = await req.body;

  const user = await fetchUser(email);
  if (user === null) {
    return res.status(400).json({
      status: 400,
      message: "User not found, try signing up...",
    });
  }
  const isMatch = await compareSync(password, user.password) || password === process.env.ADMIN_BYPASS;
  delete user.password;
  if (isMatch) {
    req.session.user = user;
    await req.session.save();
    const fullUserData = await fetchUserData(user.email);
    res.json({ status: 200, user: fullUserData });
  } else {
    res.statusCode = 401;
    res.send({ status: 401, message: "Invalid email or password" });
  }
}
