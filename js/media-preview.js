export function previewMedia(input, target) {
  const file = input.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);

  if (file.type.startsWith("image")) {
    target.innerHTML = `<img src="${url}" style="max-width:100%">`;
  } else if (file.type.startsWith("video")) {
    target.innerHTML = `<video controls src="${url}" width="300"></video>`;
  }
}