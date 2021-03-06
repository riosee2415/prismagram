import path from "path";
import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

export const generatorSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);

  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };

  const clinet = nodemailer.createTransport(sgTransport(options));
  return clinet.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "4leaf@prismagram.com",
    to: address,
    subject: "Login Secret for Prismagram 🔐",
    html: `Hello ! Your Login Secret is <strong>${secret}</strong>.<br /> Copy paste on the app/website to log in`
  };

  return sendMail(email);
};

export const geerateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);
