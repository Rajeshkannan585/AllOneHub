import { db, auth } from "./firebase-config.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function likePost(postId){
  await setDoc(doc(db,`posts/${postId}/likes/${auth.currentUser.uid}`),{
    createdAt: Date.now()
  });
}