import { db } from "./firebase-config.js";
import { collection, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function loadReels(batch=10){
  const snap = await getDocs(
    query(collection(db,"reels"), orderBy("createdAt","desc"), limit(batch))
  );

  return snap.docs.map(d => ({id:d.id, ...d.data()}));
}

export function enableAutoplay(selector="video"){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if(entry.isIntersecting){
        video.play().catch(()=>{});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.8 });

  document.querySelectorAll(selector).forEach(v => observer.observe(v));
}