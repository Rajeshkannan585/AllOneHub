export function setLoading(button, state, text = "Loading...") {
  if (!button) return;

  if (state) {
    button.dataset.originalText = button.innerText;
    button.disabled = true;
    button.innerText = text;
  } else {
    button.disabled = false;
    button.innerText = button.dataset.originalText || "Submit";
  }
}