import { db, auth } from "./firebase-config.js";
import { doc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function likeReel(reelId){
  await setDoc(doc(db, `reels/${reelId}/likes/${auth.currentUser.uid}`), {
    createdAt: Date.now()
  });

  await updateDoc(doc(db, "reels", reelId), {
    likesCount: increment(1)
  });
}

export async function trackView(reelId){
  await updateDoc(doc(db, "reels", reelId), {
    viewsCount: increment(1)
  });
}

export async function shareReel(reelId){
  await updateDoc(doc(db, "reels", reelId), {
    sharesCount: increment(1)
  });
}