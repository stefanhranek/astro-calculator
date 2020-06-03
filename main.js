// Write your JavaScript code here!
let planets = [
  ["Pluto", 0.06],
  ["Neptune", 1.148],
  ["Uranus", 0.917],
  ["Saturn", 1.139],
  ["Jupiter", 2.64],
  ["Mars", 0.3895],
  ["Moon", 0.1655],
  ["Earth", 1],
  ["Venus", 0.9032],
  ["Mercury", 0.377],
  ["Sun", 27.9],
];

// Populate dropdown menu with planets
let selectPlanets = document.getElementById("planets");

planets.reverse().forEach((planet) => {
  let el = document.createElement("option");
  el.textContent = planet[0];
  selectPlanets.appendChild(el);
});

// Calculate weight of planets
const calculateWeight = (weight, planetName) => {
  let conversion = 0;
  for (let i = 0; i < planets.length; i++) {
    if (planets[i][0] === planetName) {
      conversion = planets[i][1];
    }
  }
  return (weight * conversion).toFixed(2);
};

// Function for handleClickEvent
const handleClickEvent = () => {
  let userWeight = document.getElementById("user-weight").value;
  let planetName = document.getElementById("planets").value;
  let result = calculateWeight(userWeight, planetName);
  document.getElementById(
    "output"
  ).innerHTML = `If you were on <span class="text-accent-color">${planetName}</span>, you would weigh <span class="text-accent-color">${result}lbs</span>!`;
};

// Add a checkbox to the application that when checked will remove Pluto as an option in the dropdown list.
const handleCheckbox = () => {
  let checkbox = document.querySelector(".checkbox").value;
  let planets = document.getElementById("planets");
  if (checkbox === "no") {
    document.querySelector(".checkbox").value = "yes";
    for (var i = 0; i < planets.length; i++) {
      if (planets.options[i].value == "Pluto") planets.remove(i);
    }
    console.log("fuck pluto");
  } else {
    document.querySelector(".checkbox").value = "no";
    console.log("i tihink pluto is a plent");
  }
};

// Add a custom planet with its multiplier to the dropdown. Add two input fields (one for name, one for multiplier) and a button that once clicked will push a new planet to the dropdown.
