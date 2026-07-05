import { auth, db } from "./firebase-config.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { updatePassword, deleteUser } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export async function savePreferences(data){
  return updateDoc(doc(db, "users", auth.currentUser.uid), {
    settings: data
  });
}

export async function changePassword(newPassword){
  return updatePassword(auth.currentUser, newPassword);
}

export async function deleteAccount(){
  await updateDoc(doc(db, "users", auth.currentUser.uid), {
    status: "deleted"
  });

  return deleteUser(auth.currentUser);
}