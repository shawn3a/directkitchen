'use strict';

/**
 * Module dependencies.
 */
var nodemailer = require('nodemailer');

exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.send = function(req, res) {
    var contact = req.body,
        content = 'Name: ' + contact.name + '\n' + 'Mobile: ' + contact.mobile + '\n' + 'Email: ' + contact.email + '\n' + 'Message: ' + contact.message + '\n';

    //var transporter = nodemailer.createTransport({
    //    service: 'Gmail',
    //    auth: {
    //        user: 'gmail.user@gmail.com',
    //        pass: 'userpass'
    //    }
    //});

    var transporter = nodemailer.createTransport('sendmail');



    var mailOptions = {
        from: contact.email, // sender address
        to: 'shawn@3a.nz', // list of receivers
        subject: 'Enquiry', // Subject line
        text: content, // plaintext body
        html: '<b>Hello world ✔</b>' // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });

};