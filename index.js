const os = require('os')
const ip = require('ip')
const nodemailer = require('nodemailer')
const config = require('./config')
const log = require('./log')

const name = os.hostname()
const address = ip.address()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email,
    pass: config.password
  }
});

const mailOptions = {
  from: config.email, // sender address
  to: config.email, // list of receivers
  subject: 'Device Ip', // Subject line
  html: `<p>${name} <a href="http://${address}:3000">${address}</a> </p>`// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
  if(err) console.log(err)
  
  console.log(info);
  process.exit()
});
