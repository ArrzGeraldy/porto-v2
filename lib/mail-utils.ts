import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_MAIL_USER,
    pass: process.env.NEXT_MAIL_APP_PASSWORD,
  },
});

export const mailOptions = {
  from: process.env.NEXT_MAIL_USER,
  to: process.env.NEXT_MAIL_USER,
};
