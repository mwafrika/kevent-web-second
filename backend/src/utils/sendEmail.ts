// const nodemailer = require("nodemailer");
import * as nodemailer from "nodemailer";
import {SERVICE, HOST, USER, PASS} from "../config";
const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: HOST,
            service: SERVICE,
            port: 587,
            auth: {
                user: USER,
                pass: PASS,
            },

        });

        await transporter.sendMail({
            from: USER,
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