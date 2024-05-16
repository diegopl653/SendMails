const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "pruebas.dieguito@gmail.com",
        pass: "qyvq stvz lejb hjwo",
    }
});

const template = {
    helloworld: '<p>HelloWorld</p>'
};

async function sendMail(data) {
    try {
        let mailOptions = {
            from: "pruebas.dieguito@gmail.com",
            to: data.mail,
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

const emailData = {
    mail: "dgprzln@gmail.com",
    subject: "Prueba de envio de correo",
    text: "Hola mundo",
    template: "HelloWorld",
};

sendMail(emailData)
