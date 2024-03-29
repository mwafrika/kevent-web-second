// const nodemailer = require("nodemailer");
import * as nodemailer from "nodemailer";
// import {SERVICE, HOST, USER, PASS} from "../config";
import * as dotenv from "dotenv";
dotenv.config();

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: 587,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },

        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject:subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error.response, "email not sent");
    }
};

export default sendEmail;