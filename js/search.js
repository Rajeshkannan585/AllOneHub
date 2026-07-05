import { db } from "./firebase-config.js";
import {
  collection, query, where, getDocs, limit
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function searchUsers(term){
  const q = query(
    collection(db, "users"),
    where("keywords", "array-contains", term.toLowerCase()),
    limit(20)
  );

  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function searchPosts(term){
  const q = query(
    collection(db, "hashtags"),
    where("name", "==", term.toLowerCase()),
    limit(20)
  );

  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}