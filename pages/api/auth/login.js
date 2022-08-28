import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/ironOptions";
import { compareSync } from "bcrypt";
import { fetchUser } from "../../../services/user.server";

export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(req, res) {
  const { email, password } = await req.body;
  // const user = {
  //   password: "$2b$09$LN3F0oodRRZNTwzLAIWvUulsUpNJRr/j2F/JlNdji7iEVyzP3bKQG",
  //   email: email,
  // };
  const user = await fetchUser(email);

  if (user === null) {
    return res.status(400).json({
      message: "User not found, try signing up...",
    })
  }
  const isMatch = await compareSync(password, user.password);
  delete user.password;
  if (isMatch) {
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } else {
    res.statusCode = 401;
    res.send({ message: "Invalid email or password" });
  }
}
