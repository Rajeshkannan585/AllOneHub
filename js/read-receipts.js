import { db } from "./firebase-config.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function markAsRead(chatId, messageId) {
  await updateDoc(doc(db, `chats/${chatId}/messages/${messageId}`), {
    isRead: true,
    readAt: Date.now()
  });
}