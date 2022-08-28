import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/ironOptions";
import { hashSync } from "bcrypt";
import { fetchFriendlyName, fetchUser } from "../../../services/user.server";
import { OTPTemplate } from "../../../public/Templates/OTP-template";

export default withIronSessionApiRoute(SendOtp, ironOptions);

async function SendOtp(req, res) {
  const { email, friendlyName, password, confirmPassword } = req.body;
  const isUser = await fetchUser(email);
  const isFriendlyName = await fetchFriendlyName(friendlyName);

  if (isUser !== null) {
    return res.status(400).json({
      status: 400,
      message: { email: "Account already exists, Try logging in..." },
    });
  }
  if (isFriendlyName !== null) {
    return res.status(400).json({
      status: 400,
      message: { name: "Username already in use, try a different one..." },
    });
  }

  if (password.trim() !== confirmPassword.trim()) {
    return res.status(400).json({
      status: 400,
      message: { password: "Passwords does not match" },
    });
  }

  const nanoid = customAlphabet("1234567890abcdef");
  const otp = nanoid(5);
  var mailOptions = {
    to: email,
    subject: "Otp for Surge registration",
    html: OTPTemplate("Account Verification", otp, friendlyName),
  };
  let transporter = nodemailer.createTransport({
    service: "Gmail",

    auth: {
      user: "verify.surge@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  // console.log(otp);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(200).json({ status: 200, otp: `${hashSync(otp, 10)}` });
  });
}
