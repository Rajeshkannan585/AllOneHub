import { observeAuth } from "./auth.js";
import { getUserRole } from "./roles.js";

export function requireAuth() {
  observeAuth(user => {
    if (!user) location.href = "login.html";
  });
}

export async function requireRole(role) {
  const current = await getUserRole();
  if (current !== role) location.href = "dashboard.html";
}