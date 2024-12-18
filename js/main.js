// Header components
const header = document.querySelector("#header");
if (header != undefined) {
  header.innerHTML = `
<div class="fixed-header">
        <header>
            <ul>
                <div class="nav-pages">
                    <li id="home"><a href="https://benhatch.com/">Ben Hatch</a></li>
                    <li><a href="https://benhatch.com/blog">blog</a></li>
                    <li><a href="https://benhatch.com/about">about</a></li>
                    <li><a href="https://benhatch.com/now">now</a></li>
                    <!-- <div class="nav-socials">
                      <li><a href="https://www.youtube.com/@henbatch" target="_blank"><img src="images/youtube-icon.svg"
                                alt="YouTube icon"></a></li>          
                    </div> -->
                </div>
            </ul>
            <div class="mobile-nav">
                <h3 id="home"><a href="https://benhatch.com/">Ben Hatch</a></h3>
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
            <!-- <a href="https://www.youtube.com/@henbatch" target="_blank"><img src="images/youtube-icon.svg" alt="YouTube icon"></a> -->
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
                    <li id="home"><a href="https://benhatch.com/">Ben Hatch</a></li>
                    <li><a href="https://benhatch.com/blog">blog</a></li>
                    <li><a href="https://benhatch.com/about">about</a></li>
                    <li><a href="https://benhatch.com/now">now</a></li>
                    <!-- <div class="nav-socials">
                    <li><a href="https://www.youtube.com/@henbatch" target="_blank"><img src="../images/youtube-icon.svg" alt="YouTube icon"></a></li>
                    </div> -->
                </div>
            </ul>
            <div class="mobile-nav">
                <h3 id="home"><a href="https://benhatch.com/">Ben Hatch</a></h3>
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
            <!-- <a href="https://www.youtube.com/@henbatch" target="_blank"><img src="../images/youtube-icon.svg" alt="YouTube icon"></a> -->
        </div>
    </div>
`
}

// Email subscribe text component
const emailSubscribe = document.querySelector(".email-subscribe-text");
if (emailSubscribe != undefined) {
  emailSubscribe.innerHTML = `
  <h3>Join my email list</h3>
  <p>I send occasional updates on my writing, projects and miscellaneous dad musings. Short and sweet, no tl;dr drivel.</p>
  `
}

// Copy email to clipboard
function copyEmail() {
  const copy = document.getElementById('copy-icon');
  const checkmark = document.getElementById('checkmark-icon');
  const contactButton = document.getElementById('contact-button-text');
  const email = "hatch2k3@proton.me";
  navigator.clipboard.writeText(email).then(() => {
    // Show notification;
    copy.style.display = 'none';
    checkmark.style.display = 'inline';
    contactButton.innerHTML = `Email address copied`;
    // Hide the notification after 3 seconds
    setTimeout(() => {
      checkmark.style.display = 'none';
      copy.style.display = 'inline';
      contactButton.innerHTML = `hatch2k3@proton.me`;
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

// <li><div class="copy-to-clipboard" onclick="copyEmail()"><img id="checkmark-icon" src="images/Checkmark Icon.svg"><img id="copy-icon" src="images/Copy to Clipboard Icon.svg"><button id="contact-button"><div id="contact-button-text">hatch2k3@proton.me</div></button></div></li> 