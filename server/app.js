const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const PORT = 5002;

dotenv.config();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/', (req, res) => {
//     res.send('smartlifecover');
// });
const clientPath = path.join(__dirname, '..', 'client');
app.use('/client', express.static(clientPath));


app.get("/", function(req, res) {
    res.sendFile(path.join(clientPath, 'index.html'));
});


app.get("/api/sendemail", function(req, res) {
     // 
     console.log(process.env.EMAIL_USER);
    const msg = {
        to: 'hrpatel.263@gmail.com',
        from: process.env.EMAIL_USER,
        subject: 'Hello from SendGrid',
        text: 'This is a test email!',
      };
      sgMail.setApiKey(process.env.SENDGRID_KEY)
      console.log(process.env.SENDGRID_KEY);
      sgMail.send(msg)
        .then(() => console.log('Email sent'))
        .catch((error) => console.error(error));
});


app.listen(PORT, () => {
    console.log('Server is running on port 5002');
});


app.use(cors({
    origin: '*'
}));


app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    })
);
