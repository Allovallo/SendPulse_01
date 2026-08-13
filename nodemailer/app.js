const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, //25, 465, 2525
  auth: {
    user: "grossco@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "gaugalis@gmail.com",
  from: "grossco@meta.ua",
  subject: "Test email",
  html: "<p><strong>Test email</strong> from localfost:3000</p>",
};

transport
  .sendMail(email)
  .then(() => console.log("Email send success!!!"))
  .catch((error) => console.log(error.message));
