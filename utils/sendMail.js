const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
console.log('picked api key')
const fs = require("fs");

//pathToAttachment = `./merged-junit-results/merged-test-results.html`;
//attachment = fs.readFileSync(pathToAttachment).toString("base64");

const msg = {
  to: ['madhu@shrisaitechnology.com', 'madhusmita.m12@gmail.com','Anushree.Pradhan@mottmac.com'],
  from: 'fbsupport@mottmac.com', // Use the email address or domain you verified above
  subject: 'UGI Automation test run results',
  text: 'Link for UGI Automation test results',
  html: '<strong>https://admiring-chandrasekhar-99ed2e.netlify.app/</strong>',
  
    
  
};



//...
sgMail
  .send(msg)
  .then(() => console.log('Mail sent successfully'))
  .catch(error => console.error(error.toString()));
   
