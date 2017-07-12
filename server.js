const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const port = 3000;

app.use(helmet());
app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.urlencoded({'extended':false}));
app.use(bodyParser.json());
app.post('/contact',(req, res) => {
  console.log('request received');
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let mailOptions = {
    from: '"Humaid\'s portfolio" <communication.vrpacman@gmail.com>',
    to: 'humaidk2@gmail.com',
    subject: 'Portfolio-You have a new message',
    text: `name: ${name}\nemail: ${email}\nmessage: ${message}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
  })

  res.end();
})
app.listen(port);
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'communication.vrpacman@gmail.com',
    pass: 'rocketleague'
  }
});
console.log('Server listening on ', port, '...');