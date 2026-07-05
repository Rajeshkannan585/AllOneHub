import { db, auth } from './firebase-config.js';
import { doc, setDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export const savePost = (postId) =>
  setDoc(doc(db, `users/${auth.currentUser.uid}/bookmarks/${postId}`), { createdAt: Date.now() });

export const removeBookmark = (postId) =>
  deleteDoc(doc(db, `users/${auth.currentUser.uid}/bookmarks/${postId}`));