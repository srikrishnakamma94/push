var push = require('web-push')

//let vapidkeys = push.generateVAPIDKeys();

//console.log(vapidkeys);

let vapidkeys = {
  publicKey: 'BDve_VdZQq36tdNR0BIbogIoxPEuHoDXCBPx13KMvv1mnuqP38uCScx5qGy-BsUj7ApJC9DWzuk_yY6wyy0_hLA',
  privateKey: 'K7nvExf0zL_y9Jgo6Y4NX04PWGB96Xa-nw2RB5qMAXM'
}


push.setVapidDetails("mailto:srikrishnakamma@outlook.com", vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dizdvKFzqaY:APA91bHziqLEO9Wdu2npUfeKL6y2fzVbkP_XJkTazNg2gS5naXCm9eIfJLyXQGaYviW33yMxbwyWtRaawBDlVoBWpEi3MDJsQGRzq7O8bLl_iWxfOLwS5UEwv_osmssZtmOL5OBSa8iy","expirationTime":null,"keys":{"p256dh":"BDi4-kXZYkvJnSqi1JD835DYDiKAVTLRMDQiZHzvFZPXSXs1vOKMLof2HZWlm9SspQlkGw19j7561dn_VRZgfao","auth":"b_emUtHzSwqV7U2hOhAfnA"}}

push.sendNotification(sub, 'test message');