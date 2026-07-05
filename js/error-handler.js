import * as Sentry from "@sentry/browser";

const MESSAGES = {
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/user-not-found": "Account not found.",
  "auth/wrong-password": "Incorrect password.",
  "permission-denied": "You don't have permission to do this.",
  "unavailable": "Service temporarily unavailable."
};

export function getErrorMessage(error) {
  return MESSAGES[error?.code] || error?.message || "Something went wrong.";
}

export function showToast(message, type = "error") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("visible");
  }, 10);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

export function handleError(error, context = {}) {
  console.error(error);

  try {
    Sentry.captureException(error, { extra: context });
  } catch {}

  showToast(getErrorMessage(error));
}

window.addEventListener("error", (event) => {
  handleError(event.error || new Error(event.message));
});

window.addEventListener("unhandledrejection", (event) => {
  handleError(event.reason);
});