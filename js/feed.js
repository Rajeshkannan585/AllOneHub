import { db } from "./firebase-config.js";
import {
  collection, query, orderBy, limit, startAfter, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let cursor = null;
let loading = false;

export async function loadFeed(batchSize = 10){
  if(loading) return [];
  loading = true;

  let q = query(collection(db,"posts"), orderBy("createdAt","desc"), limit(batchSize));

  if(cursor){
    q = query(collection(db,"posts"), orderBy("createdAt","desc"), startAfter(cursor), limit(batchSize));
  }

  const snap = await getDocs(q);

  if(!snap.empty){
    cursor = snap.docs[snap.docs.length - 1];
  }

  loading = false;

  return snap.docs.map(d => ({id:d.id, ...d.data()}));
}

export function renderPosts(posts, container){
  const html = posts.map(post => `
    <article class="post-card">
      ${post.mediaUrl ? `<img src="${post.mediaUrl}" class="post-media">` : ""}
      <p class="caption">${post.caption || ""}</p>
      <div class="stats">
        ❤️ ${post.likesCount || 0}
        💬 ${post.commentsCount || 0}
      </div>
    </article>
  `).join("");

  container.insertAdjacentHTML("beforeend", html);
}