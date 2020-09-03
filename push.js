var push = require('web-push')

let vapidkeys = {
  publicKey: 'BE-g3Au9t4CyQMyXQVAeuwqdSsPClMqPAJdTtsmXKvC208lIuuVzTc-uOo7h3Q74pJZNuDdjxBe9r9A8MIaai_w',
  privateKey: 'DFYPBJhByHL93xxU6KAmwdBiOd9Ax5jM_aAZBupwkO0'
}

push.setVapidDetails("mailto:srikrishnakamma@outlook.com", vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cdoWHzbuzxk:APA91bGABTsqWJUUfnCL1TZQq_vrQH9bdZmn_fjnS2eMRYGWKCuJkF0XCk47R3GMrhxyCoGuAhWpXQJGElXp1yO2mK7NUwkjTpeUuOoCznl3s8neiE_bOAv21uzazvOQh0zDrbYHUxPZ",
  "expirationTime": null,
  "keys": {
    "p256dh": "BCEkP_01nxhWAO3qnETusk2RXHW3cIPz6qSQJoUhDMkLwTugCuKLfES_i9LFei7alUakDGRQvEZXaQTMaQIRxdc",
    "auth": "v5ZXyrNVqdpJfmi4mH-XZw"
  }
}

push.sendNotification(sub, 'test message');