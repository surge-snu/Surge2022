// const nodemailer = require("nodemailer");
// const customAlphabet = require("nanoid/customAlphabet");

import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";

export default function SendOtp(req, res) {
  const email = req.body.email;
  const nanoid = customAlphabet("1234567890abcdef");
  const otp = nanoid(5);
  var mailOptions = {
    to: email,
    subject: "Otp for Surge registration",
    html:
      "<h3>OTP for account verification is </h3>" +
      "<h1 style='font-weight:bold;'>" +
      otp +
      "</h1>",
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

    res.send({ status: "success", otp: "sent" });
  });
}
