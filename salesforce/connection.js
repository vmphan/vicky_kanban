const nforce = require('nforce');

/**
 * Creates connection to Salesforce CRM
 */

// module.exports = nforce.createConnection({
//   clientId: process.env.SF_CLIENT_ID,
//   clientSecret: process.env.SF_CLIENT_SECRET,
//   redirectUri: 'https://login.salesforce.com/services/oauth2/success',
//   apiVersion: 'v43.0',
//   mode: 'single',
//   autoRefresh: true,
//   username: process.env.SF_USERNAME,
//   password: process.env.SF_PASSWORD,
//   oauth: {
//     access_token: process.env.SF_ACCESS_TOKEN,
//     instance_url: process.env.SF_INSTANCE_URL,
//   },
// });

module.exports = nforce.createConnection({
  clientId: "3MVG9vtcvGoeH2bhvFUqeJgIghsVXZkgdvHM9alrbNYogWwSghakciihuLo5XdY5OeNp6Jba3IrSyybcuFAMd",
  clientSecret: "E3EEF1EFC970F28787A649A50AA1E7569FC542840B0D473D20AF80B95FC3AA6C",
  redirectUri: 'https://login.salesforce.com/services/oauth2/success',
  apiVersion: 'v43.0',
  mode: 'single',
  autoRefresh: true,
  username: "vphan@devclass.com",
  password: "Salesforce1g0ERU7L43N1cqVs4ytmrMx1O",
  oauth: {
    access_token: "6Cel800D3i000000EDJe8883i000000YUbp0rkUFsP4Dr5xdO1SawZ1TLkS2NGNcLqyzg5b37jeLZ6o4RBhb6asFtzgY8g4sonor10mKssr",
    instance_url: "https://na112.salesforce.com",
  },
});
