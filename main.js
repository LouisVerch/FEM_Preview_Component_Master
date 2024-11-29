// Get the button and box elements
const toggle_btn = document.getElementById("btn-toggle");
const box = document.getElementById("box");
const footer = document.getElementById("footer-container");
const close_btn = document.getElementById("btn-close");
const isLargeScreen = window.innerWidth > 768;
const popup = document.getElementById("pop-up");
// Toggle the box when the share button is clicked
toggle_btn.addEventListener("click", () => {
  // Toggle the visibility of the box
  if (
    (box.style.display === "none" || box.style.display === "") &&
    isLargeScreen === false
  ) {
    box.style.display = "flex"; // Show the box
    footer.style.display = "none"; //Hide the footer
  } else {
    box.style.display = "none";
    footer.style.display = "flex"; // Hide the box
  }
});
close_btn.addEventListener("click", () => {
  if (
    (box.style.display === "flex" || box.style.display === "") &&
    isLargeScreen === false
  ) {
    box.style.display = "none"; // Show the box
    footer.style.display = "flex"; //Hide the footer
  } else {
    box.style.display = "flex";
    footer.style.display = "none"; // Hide the box
  }
});
