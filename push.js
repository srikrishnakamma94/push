var push = require('web-push')

//let vapidkeys = push.generateVAPIDKeys();

//console.log(vapidkeys);

let vapidkeys = {
  publicKey: 'BDve_VdZQq36tdNR0BIbogIoxPEuHoDXCBPx13KMvv1mnuqP38uCScx5qGy-BsUj7ApJC9DWzuk_yY6wyy0_hLA',
  privateKey: 'K7nvExf0zL_y9Jgo6Y4NX04PWGB96Xa-nw2RB5qMAXM'
}


push.setVapidDetails("mailto:srikrishnakamma@outlook.com", vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d2mb4nQm-7g:APA91bHGTBiFhWG9GhNth-LLEnA86Y-wwnRQnXwQLtLeDaFEIqJDvUYlgn6vvxYBpnVnA-mXhG7F1sWZ95g-YeWfsHs5ZSUqmYXtLuVyTQNBrrfKPev17uaBOaAHTmKa_w7wU2l8A3Gw","expirationTime":null,"keys":{"p256dh":"BA4WxEq7XAZ127n8wj0z9-3YObBWdg37ZhYstNYmODFQzMbWybt0I4QQapGgbwzjkBbsfA-prrciGwguoQlzoyg","auth":"lcM2WC8iCplvDXKjGlAopQ"}}

push.sendNotification(sub, 'test message');