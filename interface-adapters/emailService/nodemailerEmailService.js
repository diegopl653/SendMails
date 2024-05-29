const nodemailer = require("nodemailer");
const pug = require("pug");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
    }
});

const compileFunction = pug.compileFile("./templates/template.pug");

async function sendMail(data) {

    const template = {
        helloworld: compileFunction({
            name: data.name,
            business: data.business,
            url: data.url,
        })
    };

    try {
        let mailOptions = {
            from: "pruebas.dieguito@gmail.com",
            to: data.mail,
            name: data.name,
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