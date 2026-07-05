import { db, auth } from "./firebase-config.js";
import {
  addDoc, collection, query, where, orderBy,
  onSnapshot, updateDoc, doc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function createNotification(receiverId, type, payload = {}) {
  return addDoc(collection(db, "notifications"), {
    receiverId,
    senderId: auth.currentUser.uid,
    type,
    payload,
    isRead: false,
    createdAt: serverTimestamp()
  });
}

export function subscribeNotifications(callback) {
  const q = query(
    collection(db, "notifications"),
    where("receiverId", "==", auth.currentUser.uid),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, snap => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}

export async function markAsRead(notificationId) {
  return updateDoc(doc(db, "notifications", notificationId), {
    isRead: true
  });
}