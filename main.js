function burgerMenu() {
    let burger = document.getElementById("burger-links");
    if (burger.style.display === "block") {
      burger.style.display = "none";
    } else {
      burger.style.display = "block";
    }
  }