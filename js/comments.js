import { db, auth } from "./firebase-config.js";
import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function addComment(postId,text){
  return addDoc(collection(db,`posts/${postId}/comments`),{
    userId: auth.currentUser.uid,
    text,
    createdAt: serverTimestamp()
  });
}