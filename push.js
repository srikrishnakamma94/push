var push = require('web-push')

//let vapidkeys = push.generateVAPIDKeys();

//console.log(vapidkeys);

let vapidkeys = {
  publicKey: 'BDve_VdZQq36tdNR0BIbogIoxPEuHoDXCBPx13KMvv1mnuqP38uCScx5qGy-BsUj7ApJC9DWzuk_yY6wyy0_hLA',
  privateKey: 'K7nvExf0zL_y9Jgo6Y4NX04PWGB96Xa-nw2RB5qMAXM'
}


push.setVapidDetails("mailto:srikrishnakamma@outlook.com", vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fZbelBKvwec:APA91bFjm5XWOTpoQ-rZbzDLqYEefLwYvFY2WvLuSF3pMYf0ObCJtDiwd05c-QvchzvSV-DaICjFEeDJbV2wLJgOcFWu73W0oqKn0hsiK6a6ZO79VTSiyLM32PewXaV_zCqFCMyhwm03","expirationTime":null,"keys":{"p256dh":"BHW6lu6hq41lJt9KMoHiDQVvCproVIDA10L3Gj6r4CeMZWlc1-Pf9zW3gNK-kD1C0FUXW7qAp1OUIAKi0WeY9-U","auth":"tBK7IYThxsxgrJJh0zkQvQ"}}

push.sendNotification(sub, 'test message');