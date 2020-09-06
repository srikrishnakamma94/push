var push = require('web-push')

//let vapidkeys = push.generateVAPIDKeys();

//console.log(vapidkeys);

let vapidkeys = {
  publicKey: 'BDve_VdZQq36tdNR0BIbogIoxPEuHoDXCBPx13KMvv1mnuqP38uCScx5qGy-BsUj7ApJC9DWzuk_yY6wyy0_hLA',
  privateKey: 'K7nvExf0zL_y9Jgo6Y4NX04PWGB96Xa-nw2RB5qMAXM'
}


push.setVapidDetails("mailto:srikrishnakamma@outlook.com", vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/ejOU2KjUgRk:APA91bHDOaiHJATZxvCirw-vJAIn6CPmd9Gbtc_cM0v8bm1BQjHwunO5bqGiwJd98M15Xb6K5Pfj9Zw_XfSjezjOfeuVF6p0XRVw7i_siNynsURGR0VGsRW5SD4UFKvNAaqZYWiijOhn","expirationTime":null,"keys":{"p256dh":"BGtbTN2koPn75Eokp5Lyf-fsIV7ihNS1CJBuAx1ZS4zmazirQgZQBS8lc9H2Mm9lh_6wL1r8GGL-uahAHcBUEio","auth":"g8d8E0Ob_OESYD_UdhQEJA"}}

push.sendNotification(sub, 'test message');