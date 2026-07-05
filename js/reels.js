import { db, auth } from "./firebase-config.js";
import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function createReel(videoUrl, caption="") {
  return addDoc(collection(db, "reels"), {
    userId: auth.currentUser.uid,
    videoUrl,
    caption,
    likesCount: 0,
    sharesCount: 0,
    viewsCount: 0,
    createdAt: serverTimestamp()
  });
}