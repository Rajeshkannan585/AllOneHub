import { auth, db } from "./firebase-config.js";
import {
  doc, getDoc, updateDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function getProfile(userId = auth.currentUser.uid){
  const snap = await getDoc(doc(db, "users", userId));
  return snap.exists() ? snap.data() : null;
}

export async function updateProfileData(data){
  return updateDoc(doc(db, "users", auth.currentUser.uid), {
    ...data,
    updatedAt: serverTimestamp()
  });
}