var push = require('web-push')

//let vapidkeys = push.generateVAPIDKeys();

//console.log(vapidkeys);

let vapidkeys = {
  publicKey: 'BDve_VdZQq36tdNR0BIbogIoxPEuHoDXCBPx13KMvv1mnuqP38uCScx5qGy-BsUj7ApJC9DWzuk_yY6wyy0_hLA',
  privateKey: 'K7nvExf0zL_y9Jgo6Y4NX04PWGB96Xa-nw2RB5qMAXM'
}


push.setVapidDetails("mailto:srikrishnakamma@outlook.com", vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fWvhrL1ySCc:APA91bGxrPLqAXNyP5pb699C7_34uk-XBwMJV03jS5OHp9h_o-kHTZd1Xjn0_cNJdhoii26DbNP8MGwGU--M3isX7sXtJ2ypfagnL6f7GdwKd9uZ6_8asATY6UMOvtkFEMzPZyr1quDy","expirationTime":null,"keys":{"p256dh":"BJQbvaNj0Jrvazl9eEORWlAfPmmnZQpTW_X8rFXwOXP4esnsGvOFS1hnKuMrZvKLVpI6kBHG3I3oYZOryupBxXk","auth":"QuVYbPeyiG6ZgcEkArGKOg"}}

push.sendNotification(sub, 'test message');