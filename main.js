// Get the button and box elements
const toggle_btn = document.getElementById("btn-toggle");
const box = document.getElementById("box");
const pop_up = document.getElementById("pop-up");
const footer = document.getElementById("footer-container");
const close_btn = document.getElementById("btn-close");
// variable that measures if screen size > tablet
let isLargeScreen = window.innerWidth > 768;

// updates isLargeScreen when window is resized
window.addEventListener("resize", () => {
  isLargeScreen = window.innerWidth >= 768;
  if (isLargeScreen === true) {
    box.style.display = "none";
    footer.style.display = "flex";

    // Debugging of the fonction
    //   console.log("if activated");
    //   console.log(box.style.display);
  }
  if (isLargeScreen === false) {
    pop_up.style.display = "none";
  }
  // // For debugging of isLarge Screen
  // console.log("isLargeScreen updated:", isLargeScreen);
});
// Toggle the box when the share button is clicked
toggle_btn.addEventListener("click", () => {
  // Toggle the visibility of the box
  if (
    isLargeScreen === false &&
    (box.style.display === "none" || box.style.display === "")
  ) {
    console.log("if 1");
    box.style.display = "flex"; // Show the box
    footer.style.display = "none"; //Hide the footer
    close_btn.style.display = "flex";
  } else {
    if (
      (pop_up.style.display === "none" || pop_up.style.display === "") &&
      isLargeScreen === true
    ) {
      console.log("if 3");
      pop_up.style.display = "flex";
      toggle_btn.style.display = "none";
      close_btn.style.display = "flex";
    } else {
      console.log("if 4)");
      pop_up.style.display = "none";
      toggle_btn.style.display = "flex";
    }
  }
});
close_btn.addEventListener("click", () => {
  if (box.style.display === "flex" && isLargeScreen === false) {
    console.log("if5");
    box.style.display = "none"; // Show the box
    footer.style.display = "flex"; //Hide the footer
  } else {
    console.log("if6");
    pop_up.style.display = "none";
    toggle_btn.style.display = "flex";
    close_btn.style.display = "none";
  }
});
