// Display and hide mobile hamburger menu on click
function burgerMenu() {
  let burgerMenu = document.getElementById("burger-links");
  let xIcon = document.getElementById("x-icon");
  let burgerIcon = document.getElementById("burger-icon");

  if (burgerMenu.style.display === "block") {
    burgerMenu.style.display = "none";
    xIcon.style.display = "none";
    burgerIcon.style.display = "inline";
  } else {
    burgerMenu.style.display = "block";
    burgerIcon.style.display = "none";
    xIcon.style.display = "inline";
  }
}