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
    "My web development journey began in December of 2022.",
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
  funFactDisplay.style.padding = '1rem 2rem';
};

// Event listeners
// Hamburger menu
const burgerIcon = document.querySelector("#hamburger-icon");
if (burgerIcon != null) {
burgerIcon.addEventListener("click", burgerMenu);
};

// Random fun facts
const funButton = document.querySelector("#fun-button");
if (funButton != null) {
  funButton.addEventListener("click", randomFunFact);
};