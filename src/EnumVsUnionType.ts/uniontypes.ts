type NotificationType = "email" | "sms" | "push";

function sendNotification(type: NotificationType) {
  console.log("Sending", type, "notification");
}

sendNotification("email");
sendNotification("sms");
//sendNotification("text");
