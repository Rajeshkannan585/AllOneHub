import { db, auth } from "./firebase-config.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function getUserRole() {
  const ref = doc(db, "users", auth.currentUser.uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data().role || "user" : "guest";
}

export async function isAdmin() {
  return (await getUserRole()) === "admin";
}