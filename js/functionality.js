////////////////////////////////////////////////////////
// Navigation bar functionality
const navBtn = document.querySelector(".nav__button");
localStorage.setItem("darkMode", "enabled");
localStorage.setItem("mood", "blueMood");

navBtn.addEventListener("click", () => {
  document
    .querySelector(".main-container")
    .classList.toggle("main-container--sopened");
  document.querySelector(".sidebar").classList.toggle("sidebar--opened");
  document
    .querySelector(".nav__button")
    .classList.toggle("nav__button--sopened");
});

const sidebarItems = document.querySelectorAll(".sidebar__item");
let sidebarItemsArray = Array.from(sidebarItems);

for (let i = 0; i < 5; i++) {
  sidebarItemsArray[i].addEventListener("click", () => {
    document
      .querySelector(".main-container")
      .classList.toggle("main-container--sopened");
    document.querySelector(".sidebar").classList.toggle("sidebar--opened");
    document
      .querySelector(".nav__button")
      .classList.toggle("nav__button--sopened");
  });
}

///////////////////////////////////////////////
/// Dark Mode

// variablesskin

//get the darkmode previous settings if exists
let darkMode = localStorage.getItem("darkMode");

//define the toggle button
const darkModeButton = document.querySelector("#darkmodeToggle");

// Functions

const enableDarkMode = () => {
  //enable dark mode
  document.body.classList.add("darkmode");

  //set settings of darkmode to enabled
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  //disable dark mode
  document.body.classList.remove("darkmode");

  //set settings of dark mode to disabled
  localStorage.setItem("darkMode", "null");
};

// Update according to the user's previous settings

if (darkMode === "enabled") {
  enableDarkMode();
}

// Event Listener

darkModeButton.addEventListener("click", () => {
  //get the settings
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

//////////////////////////////////////////
///Mood switcher

//variables

let mood = localStorage.getItem("mood");

const blueButton = document.querySelector("#blueButton");
const yellowButton = document.querySelector("#yellowButton");
const orangeButton = document.querySelector("#orangeButton");
const greenButton = document.querySelector("#greenButton");
const pinkButton = document.querySelector("#pinkButton");

//Functions

const removeColor = () => {
  document.body.classList.remove("pink-mood");
  document.body.classList.remove("yellow-mood");
  document.body.classList.remove("blue-mood");
  document.body.classList.remove("green-mood");
  document.body.classList.remove("orange-mood");
};

const blueMood = () => {
  document.body.classList.add("blue-mood");
  localStorage.setItem("mood", "blueMood");
};
const pinkMood = () => {
  document.body.classList.add("pink-mood");
  localStorage.setItem("mood", "pinkMood");
};
const orangeMood = () => {
  document.body.classList.add("orange-mood");
  localStorage.setItem("mood", "orangeMood");
};
const yellowMood = () => {
  document.body.classList.add("yellow-mood");
  localStorage.setItem("mood", "yellowMood");
};
const greenMood = () => {
  document.body.classList.add("green-mood");
  localStorage.setItem("mood", "greenMood");
};

//check saved settings

if (mood === "blueMood") {
  removeColor();
  blueMood();
} else if (mood === "pinkMood") {
  removeColor();
  pinkMood();
} else if (mood === "orangeMood") {
  removeColor();
  orangeMood();
} else if (mood === "greenMood") {
  removeColor();
  greenMood();
} else if (mood === "yellowMood") {
  removeColor();
  yellowMood();
}

// Event Listner

blueButton.addEventListener("click", () => {
  mood = localStorage.getItem("mood");
  removeColor();
  blueMood();
});
orangeButton.addEventListener("click", () => {
  removeColor();
  orangeMood();
  mood = localStorage.getItem("mood");
});
pinkButton.addEventListener("click", () => {
  mood = localStorage.getItem("mood");

  removeColor();
  pinkMood();
});
greenButton.addEventListener("click", () => {
  mood = localStorage.getItem("mood");

  removeColor();
  greenMood();
});
yellowButton.addEventListener("click", () => {
  mood = localStorage.getItem("mood");

  removeColor();
  yellowMood();
});

////////////////////////////////////////////////////////
// Preloader

const preloader = document.querySelector(".preloader__background");

window.addEventListener("load", function () {
  preloader.style.display = "none";
});

/////////////////////////////////////////////////////
// Typing effect

const Typing = function (textElement, words, wait = 3000) {
  this.textElement = textElement;
  this.words = words;
  this.text = "";
  this.wordIndex = 0;
  this.wait = wait;
  this.type();
  this.isDeleting = false;
};

Typing.prototype.type = function () {
  const current = this.wordIndex % this.words.length;
  const fullText = this.words[current];

  if (this.isDeleting) {
    this.text = fullText.substring(0, this.text.length - 1);
  } else {
    this.text = fullText.substring(0, this.text.length + 1);
  }

  this.textElement.textContent = this.text;

  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.text === fullText) {
    typeSpeed = 1500;
    this.isDeleting = true;
  } else if (this.isDeleting && this.text === "") {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  const textElement = document.querySelector(".typing");
  const words = JSON.parse(textElement.getAttribute("data-words"));
  const wait = textElement.getAttribute("data-wait");

  new Typing(textElement, words, wait);
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
