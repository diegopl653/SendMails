const {
  sendMail,
} = require("./src/interface-adapters/emailService/nodemailerEmailService");

const emailData = {
  mail: "dgprzln@gmail.com",
  name: "Diego",
  subject: "Prueba de envio de correo",
  text: "Hola mundo",
  template: "HelloWorld",
  business: "Coca-cola",
  time: "05:00",
  url: "https://www.micoca-cola.bo/",
};

sendMail(emailData);