var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user: 'uvatmvf@gmail.com',
        pass: ''
    }
});

var mailOptions = {
    from : 'uvatmvf@gmail.com',
    to : 'uvatmvf@gmail.com',
    subject: 'sending email',
    text: 'too easy'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    }
    else
        {
            console.log('email send ' + info.response);
        }
});