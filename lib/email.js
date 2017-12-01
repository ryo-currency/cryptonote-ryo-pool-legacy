
var api_key = 'key-18f0d3adb0243f33eb6f8e290ab6b13c';
var domain = 'mg.sumokoin.ch';

var mailgun = require('mailgun.js');
var mg = mailgun.client({username: 'api', key: api_key});

exports.notifyAddress = function(address, subject, body) {
    var email;
    redisClient.hget(config.coin + ':notifications:', address, function(error, value){
        if (error){
            return false;
        }

        email = value;
    });
    mg.messages.create('sandbox-123.mailgun.org', {
        from: "Sumokoin Overlord <overlord@sumokoin.ch>",
        to: [email],
        subject: subject,
        text: body
      });


};
