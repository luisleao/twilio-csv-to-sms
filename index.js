const csv = require('csvtojson');
require("dotenv").config();

// Inicializar Twilio
const twilio = require('twilio');
const twilioClient = twilio( process.env.TWILIO_ACCOUNT_ID, process.env.TWILIO_AUTH_TOKEN);

csv()
    .fromFile('lista.csv')
    .then((lista) => {
        lista.forEach(async item => {
            console.log(item);
            let mensagem = `Olá ${item.nome}, seu agendamento com ${item.medico} está confirmado para ${item.horario}.`;
            console.log(mensagem);
            let sms = await twilioClient.messages.create({
                from: process.env.PHONE_NUMBER,
                to: item.telefone,
                body: mensagem
            });
            console.log(sms);
        })
    });

