document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
document.addEventListener("selectstart", (event) => {
  event.preventDefault();
});
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && (event.key === "c" || event.key === "u" || event.key === "x")) {
      event.preventDefault();
  }
});
document.addEventListener("dragstart", (event) => {
  event.preventDefault();
});