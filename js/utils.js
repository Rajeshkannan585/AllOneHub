export const formatDate = (timestamp) =>
  new Date(timestamp?.seconds ? timestamp.seconds * 1000 : timestamp).toLocaleString();

export const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};