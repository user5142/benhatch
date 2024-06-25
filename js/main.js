// Header components
const header = document.querySelector("#header");
if (header != undefined) {
  header.innerHTML = `
<div class="fixed-header">
        <header>
            <ul>
                <div class="nav-pages">
                    <li id="home"><a href="https://benhatch.com/">home</a></li>
                    <li><a href="https://benhatch.com/blog">blog</a></li>
                    <li><a href="https://benhatch.com/about">about</a></li>
                    <li><a href="https://benhatch.com/now">now</a></li>
                </div>
                <div class="nav-socials">
                    <li><a href="https://www.youtube.com/@hatch2k3" target="_blank"><img src="images/youtube-icon.svg"
                                alt="YouTube icon"></a></li>
                    <li><a href="https://twitter.com/hatch2k3" target="_blank"><img src="images/x-icon.svg"
                                alt="X icon"></a></li>
                    <li><button id="contact-button" onclick="copyEmail()">hatch2k3@proton.me</button><p id="notification">Email address copied to clipboard!</p></li>            
                </div>
            </ul>
            <div class="mobile-nav">
                <a href="https://benhatch.com/">home</a>
                <a id="hamburger-icon">
                    <img id="burger-icon" src="images/bh-hamburger-2.svg" alt="hamburger icon"><img id="x-icon"
                        src="images/bh-x-2.svg">
                </a>
            </div>
        </header>
        <div id="burger-links">
            <a href="https://benhatch.com/blog">blog</a>
            <a href="https://benhatch.com/about">about</a>
            <a href="https://benhatch.com/now">now</a>
            <a href="https://www.youtube.com/@hatch2k3" target="_blank"><img src="images/youtube-icon.svg" alt="YouTube icon"></a>
            <a href="https://twitter.com/hatch2k3" target="_blank"><img src="images/x-icon.svg" alt="X icon"></a>
        </div>
    </div>
`
}

const header2 = document.querySelector("#header2");
if (header2 != undefined) {
  header2.innerHTML = `
<div class="fixed-header">
        <header>
            <ul>
                <div class="nav-pages">
                    <li id="home"><a href="https://benhatch.com/">home</a></li>
                    <li><a href="https://benhatch.com/blog">blog</a></li>
                    <li><a href="https://benhatch.com/about">about</a></li>
                    <li><a href="https://benhatch.com/now">now</a></li>
                </div>
                <div class="nav-socials">
                    <li><a href="https://www.youtube.com/@hatch2k3" target="_blank"><img src="../images/youtube-icon.svg"
                                alt="YouTube icon"></a></li>
                    <li><a href="https://twitter.com/hatch2k3" target="_blank"><img src="../images/x-icon.svg"
                                alt="X icon"></a></li>
                    <li><button id="contact-button" onclick="copyEmail()">contact</button><p id="notification">Email address copied to clipboard!</p></li>
                </div>
            </ul>
            <div class="mobile-nav">
                <a href="https://benhatch.com/">home</a>
                <a id="hamburger-icon">
                    <img id="burger-icon" src="../images/bh-hamburger-2.svg" alt="hamburger icon"><img id="x-icon"
                        src="../images/bh-x-2.svg">
                </a>
            </div>
        </header>
        <div id="burger-links">
            <a href="https://benhatch.com/blog">blog</a>
            <a href="https://benhatch.com/about">about</a>
            <a href="https://benhatch.com/now">now</a>
            <a href="https://www.youtube.com/@hatch2k3" target="_blank"><img src="../images/youtube-icon.svg" alt="YouTube icon"></a>
            <a href="https://twitter.com/hatch2k3" target="_blank"><img src="../images/x-icon.svg" alt="X icon"></a>
        </div>
    </div>
`
}

// Copy email to clipboard
function copyEmail() {
  const email = "hatch2k3@proton.me";
  navigator.clipboard.writeText(email).then(() => {
    // Show notification
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    // Hide the notification after 3 seconds
    setTimeout(() => {
      notification.style.display = 'none';
    }, 3000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

// Header drop shadow
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.fixed-header');
  const scrolled = window.scrollY;

  if (scrolled > 0) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});

// Display and hide hamburger menu on click
const burgerMenu = () => {
  const burgerMenu = document.querySelector("#burger-links");
  const xIcon = document.querySelector("#x-icon");
  const burgerIcon = document.querySelector("#burger-icon");

  if (burgerMenu.style.display === "block") {
    burgerMenu.style.display = "none";
    xIcon.style.display = "none";
    burgerIcon.style.display = "inline";
  } else {
    burgerMenu.style.display = "block";
    burgerIcon.style.display = "none";
    xIcon.style.display = "inline";
  }
};

// Hamburger menu
const burgerIcon = document.querySelector("#hamburger-icon");
const projectsNav = document.querySelector("#burger-links");
if (burgerIcon != null) {
  burgerIcon.addEventListener("click", burgerMenu);
  projectsNav.addEventListener("click", burgerMenu);
};

// Random fun facts
const randomFunFact = () => {
  const funFacts = [
    "I received my undergraduate degree in Business Administration from the University of Vermont.",
    "My favorite app is Todoist.",
    "I pursued standup comedy for 2 years while living in Boston.",
    "I grew up in Ashland, Massachusetts.",
    "I co-managed a dog walking business in the North End of Boston.",
    "My all-time favorite movie is The Bourne Identity.",
    "My first passion in life was freestyle skiing.",
    "I played football, basketball, baseball and soccer growing up.",
    "I began my journey of learning to code in December of 2022.",
    "I broke my wrist playing football my freshman year of high school.",
    "My favorite band growing up was the Red Hot Chili Peppers.",
    "My first job out of college was at HubSpot working as a Business Development Representative.",
    "My childhood dog was a collie named Laddie.",
    "My favorite pizza topping combo is pepper and onion.",
    "I am 6 feet tall.",
    "I was very into extreme sports growing up, including skiing, scootering, aggressive inline and skateboarding.",
    "I have never met a celebrity.",
    "I built my first website in 2013.",
    "My favorite fruit is pineapple.",
    "My favorite design tool is Figma.",
    "This website is built from scratch with HTML, CSS and JavaScript."
  ];

  const funFactDisplay = document.querySelector("#dynamic-fun");
  const randomNum = Math.floor(Math.random() * funFacts.length);
  let funFact = funFacts[randomNum];
  funFactDisplay.style.color = `#080806`;
  funFactDisplay.innerHTML = funFact;
};

// Generate a random fun fact on button click
const funButton = document.querySelector("#fun-button");
if (funButton != null) {
  funButton.addEventListener("click", randomFunFact);
};