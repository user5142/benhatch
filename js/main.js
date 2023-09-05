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

// Generate a random fun fact on button click
const randomFunFact = () => {
  const funFacts = [
    "I received my undergraduate degree in Business Administration from the University of Vermont.",
    "My favorite sport is disc golf.",
    "My favorite app is Todoist.",
    "I pursued standup comedy for 2 years while living in Boston.",
    "I grew up in Ashland, Massachusetts.",
    "I co-managed a dog walking business in the North End of Boston.",
    "My all-time favorite movie is The Bourne Identity.",
    "My first passion in life was freestyle skiing.",
    "I played football, basketball, baseball and soccer growing up.",
    "I was first introduced to graphic design my freshman year of high school. Thanks Mr. Smith!",
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
    "My favorite design tool is Figma."
  ];

  const funFactDisplay = document.querySelector("#dynamic-fun");
  const randomNum = Math.floor(Math.random() * funFacts.length);
  let funFact = funFacts[randomNum];
  funFactDisplay.innerHTML = funFact;
  funFactDisplay.style.padding = '.75rem 2rem';
  funFactDisplay.style.border = '1px solid #0E2646';
};

// Event listeners
// Hamburger menu
const burgerIcon = document.querySelector("#hamburger-icon");
const projectsNav = document.querySelector("#burger-links");
if (burgerIcon != null) {
burgerIcon.addEventListener("click", burgerMenu);
projectsNav.addEventListener("click", burgerMenu);
};

// Random fun facts
const funButton = document.querySelector("#fun-button");
if (funButton != null) {
  funButton.addEventListener("click", randomFunFact);
};

// Nav bar drop shadow
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.fixed-header');
  const scrolled = window.scrollY;
  
  if (scrolled > 0) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});