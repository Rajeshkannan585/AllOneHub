import { db, auth } from "./firebase-config.js";
import { doc, setDoc, serverTimestamp, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function setTyping(chatId, state) {
  await setDoc(doc(db, `chats/${chatId}/typing`, auth.currentUser.uid), {
    isTyping: state,
    updatedAt: serverTimestamp()
  });
}

export function watchTyping(chatId, userId, callback) {
  return onSnapshot(doc(db, `chats/${chatId}/typing`, userId), snap => {
    callback(snap.exists() ? snap.data().isTyping : false);
  });
}