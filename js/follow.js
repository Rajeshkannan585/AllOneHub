import { db, auth } from "./firebase-config.js";
import { doc, setDoc, deleteDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function followUser(targetId){
  await setDoc(doc(db, `followers/${targetId}/users/${auth.currentUser.uid}`), {
    createdAt: serverTimestamp()
  });

  await setDoc(doc(db, `following/${auth.currentUser.uid}/users/${targetId}`), {
    createdAt: serverTimestamp()
  });
}

export async function unfollowUser(targetId){
  await deleteDoc(doc(db, `followers/${targetId}/users/${auth.currentUser.uid}`));
  await deleteDoc(doc(db, `following/${auth.currentUser.uid}/users/${targetId}`));
}