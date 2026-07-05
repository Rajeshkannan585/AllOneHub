import { getMessaging, getToken, onMessage }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js";

export async function registerPush(app) {
  const messaging = getMessaging(app);

  const token = await getToken(messaging, {
    vapidKey: "YOUR_VAPID_KEY"
  });

  return token;
}

export function foregroundNotifications(app, callback) {
  const messaging = getMessaging(app);
  onMessage(messaging, payload => callback(payload));
}