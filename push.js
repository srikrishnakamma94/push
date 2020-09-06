var push = require('web-push')

//let vapidkeys = push.generateVAPIDKeys();

//console.log(vapidkeys);

let vapidkeys = {
  publicKey: 'BDve_VdZQq36tdNR0BIbogIoxPEuHoDXCBPx13KMvv1mnuqP38uCScx5qGy-BsUj7ApJC9DWzuk_yY6wyy0_hLA',
  privateKey: 'K7nvExf0zL_y9Jgo6Y4NX04PWGB96Xa-nw2RB5qMAXM'
}


push.setVapidDetails("mailto:srikrishnakamma@outlook.com", vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cSZ_q8l7GMA:APA91bH7vH5EtLJIR8TpXON9AZ-4EPBMgiMfB8gQmsGdB7VnXmpc_t1lScZvpDHUV1Q3nNHNLK-V0JzMJoJ-ZH_ybm10lseo7mKA8ZG56oPJrvEUO3pkOaqiwUmrViX3I5g1SQbLwY3m","expirationTime":null,"keys":{"p256dh":"BBbUMbUeDwnXs2k2yRsfoULMCC25ES31i53S5t2e8Q3H8Ab2oQHrHWllSD5zqd0di5sEtQlANKOK84Sh3Y746gg","auth":"ZsmmXAONJ6e0TC-IDNJNwQ"}}

push.sendNotification(sub, 'test message');