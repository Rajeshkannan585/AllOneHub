import { db, auth } from "./firebase-config.js";
import {
  addDoc, collection, serverTimestamp, deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function createPost(data){
  return addDoc(collection(db, "posts"), {
    userId: auth.currentUser.uid,
    caption: data.caption || "",
    mediaUrl: data.mediaUrl || "",
    likesCount: 0,
    commentsCount: 0,
    createdAt: serverTimestamp()
  });
}

export async function deletePost(postId){
  return deleteDoc(doc(db, "posts", postId));
}