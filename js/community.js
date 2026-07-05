import { db, auth } from "./firebase-config.js";
import {
  addDoc, collection, doc, setDoc, deleteDoc,
  getDocs, query, where, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function createCommunity(data) {
  return addDoc(collection(db, "communities"), {
    name: data.name,
    description: data.description || "",
    coverImage: data.coverImage || "",
    ownerId: auth.currentUser.uid,
    membersCount: 1,
    createdAt: serverTimestamp()
  });
}

export async function joinCommunity(communityId) {
  return setDoc(
    doc(db, `communities/${communityId}/members/${auth.currentUser.uid}`),
    { joinedAt: serverTimestamp() }
  );
}

export async function leaveCommunity(communityId) {
  return deleteDoc(
    doc(db, `communities/${communityId}/members/${auth.currentUser.uid}`)
  );
}

export async function getMyCommunities() {
  const q = query(
    collection(db, "communities"),
    where("ownerId", "==", auth.currentUser.uid)
  );

  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}