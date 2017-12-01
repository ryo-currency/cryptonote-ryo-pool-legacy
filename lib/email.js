var mailgun = require('mailgun.js');

exports.notifyAddress = function(address, subject, body) {
      var api_key = config.email.api_key;
      var mg = mailgun.client({username: 'api', key: api_key});
      var domain = 'mg.sumokoin.ch';
      var email;
      redisClient.hget(config.coin + ':notifications:', address, function(error, value){
                if (error){
                  return false;
                }

                mg.messages.create(domain, {
                              from: "Sumokoin Overlord <overlord@sumokoin.ch>",
                              to: value,
                              subject: subject,
                              text: body
                          });
            });
};
