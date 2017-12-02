fs = require('fs');

var mailgun = require('mailgun.js');

// Sends out an email using the mailgun API.
exports.notifyAddress = function(address, subject, template) {

    // Return early when emailing is not enabled.
    if (!config.email.enabled) {
      return;
    }
    var api_key = config.email.api_key;
    var api_domain = config.email.api_domain;
    var mg = mailgun.client({username: 'api', key: api_key});
    var email;
    var body = getEmailTemplate(template);

    // Fetch the email address.
    redisClient.hget(config.coin + ':notifications:', address, function(error, value){
        if (error || value == undefined){
            // We don't really consider this an error because we liberally call
            // this mail function on all addresses. Most will not have
            // registered an email address.
            return false;
        }

        mg.messages.create(api_domain, {
          from: config.email.from_address,
          to: value,
          subject: subject,
          text: body
        });
    });
};

// Reads an email template file and returns it.
function getEmailTemplate(template_name) {
  var replacement = [
    [/%POOL_HOST%/, config.email.domain],
  ];
  fs.readFile(config.email.template_dir + template_name, 'utf8', function (error, content) {
      if (error) {
          log('error', logSystem, 'Unable to read email template: ' + error);
          return "";
      }

      // Replace the macros in the template.
      for (var i = 0; i < replacement.length; i++) {
        content = content.replace(replacement[i][0], replacement[i][1]);
      }
      return content;
  });
};
