import { db, auth } from "./firebase-config.js";
import {
  addDoc, collection, query, orderBy, onSnapshot,
  serverTimestamp, doc, setDoc, updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function sendMessage(chatId, text) {
  if (!text.trim()) return;

  await addDoc(collection(db, `chats/${chatId}/messages`), {
    senderId: auth.currentUser.uid,
    text,
    isRead: false,
    createdAt: serverTimestamp()
  });

  await updateDoc(doc(db, "chats", chatId), {
    lastMessage: text,
    updatedAt: serverTimestamp()
  });
}

export function subscribeMessages(chatId, callback) {
  const q = query(
    collection(db, `chats/${chatId}/messages`),
    orderBy("createdAt", "asc")
  );

  return onSnapshot(q, (snap) => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}

export async function createChat(chatId, participants) {
  await setDoc(doc(db, "chats", chatId), {
    participants,
    type: participants.length > 2 ? "group" : "direct",
    updatedAt: serverTimestamp()
  }, { merge: true });
}