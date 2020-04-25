//  this is a function that sends email
const nodemailer = require('nodemailer');

module.exports = 
    function (message) {


        let transporter = nodemailer.createTransport({
            // host: 'smtp.gmail.com',
            // port: 465,
            service: 'gmail',
            //secure: false,
            auth: {
                user: 'emiklad1993@gmail.com',
                pass: "Emiklad24"
            },
            // tls: {
            //     rejectUnauthorized:false
            // }
        });

        const mailOptions = {
            from: 'emiklad1993@gmail.com',
            to: message.email,
            subject: 'Account Created',
            html: `<p>Your Account has been created with the following Details</p>
        <h3>Account Details</h3>
        <ul>
        <li>Name: ${message.name}</li>
        <li>Email: ${message.email}</li>
        <li>Phone: ${message.phone}</li> 
        <li>User: ${message.userName}</li>
        <li>Address: ${message.schoolAddress}</li>
        <li>Your School Liason: ${message.schoolLiason}</li>
        <li>Password: ${message.password}</li>
        </ul>
        <h3>Mesage</h3>`
        }
        //this is callback function to return status to firebase console
        const getDeliveryStatus = function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        };
        transporter.sendMail(mailOptions, getDeliveryStatus);
    }


