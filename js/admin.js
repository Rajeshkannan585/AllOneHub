import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function getReports(){
  const snap = await getDocs(collection(db,"reports"));
  return snap.docs.map(d => ({id:d.id,...d.data()}));
}