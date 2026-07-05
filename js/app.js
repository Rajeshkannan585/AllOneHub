import { requireAuth } from "./guards.js";

document.addEventListener("DOMContentLoaded", () => {
  const protectedPages = ["dashboard", "profile", "chat", "reels"];
  const current = location.pathname.toLowerCase();

  if (protectedPages.some(p => current.includes(p))) {
    requireAuth();
  }
});