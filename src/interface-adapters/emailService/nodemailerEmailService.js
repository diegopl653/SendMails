const nodemailer = require("nodemailer");
const pug = require("pug");
require("dotenv").config();
const otpGenerator = require("../../Utils/OtpGenerator");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
    }
});

const otp = otpGenerator.otpGenerator();

const compileFunction = pug.compileFile("./src/templates/template.pug");

async function sendMail(data) {

    const template = {
        helloworld: compileFunction({
            name: data.name,
            business: data.business,
            url: data.url,
            otp: otp,
        })
    };

    try {
        let mailOptions = {
            from: "pruebas.dieguito@gmail.com",
            to: data.mail,
            name: data.name,
            time: data.time,
            subject: data.subject,
            text: data.text,
            html: template.helloworld
        };

        let info = await transporter.sendMail(mailOptions);
        console.log("mensaje enviado: ", info.messageId);
        return info.messageId;
    } catch (error) {
        console.log("Error al enviar el correo: ", error)
        throw error;
    }
};

module.exports = {
    sendMail
};