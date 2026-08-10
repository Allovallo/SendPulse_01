const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
  to: "grossco@meta.ua",
  from: "gaugalis@gmail.com",
  subject: "Test email",
  html: "<p><strong>Test email</strong> from localfost:3000</p>",
};

sgMail
  .send(email)
  .then(() => {
    console.log("Email send success!");
  })
  .catch((error) => console.log(error.message));
