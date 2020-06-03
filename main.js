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

planets.forEach((planet) => {
  console.log(planet);
  let el = document.createElement("option");
  el.textContent = planet[0];
  //   el.value = planet[1];
  selectPlanets.appendChild(el);
});

// Calculate weight of planets
let result = 0;
const calculateWeight = (weight, planetName) => {
  let conversion = 0;
  for (let i = 0; i < planets.length; i++) {
    if (planets[i][0] === planetName) {
      conversion = planets[i][1];
    }
  }
  return weight * conversion;
};

// Function for handleClickEvent
const button = document.getElementById("calculate-button");
const handleClickEvent = () => {
  let userWeight = document.getElementById("user-weight").value;
  let planetName = document.getElementById("planets").value;
  let result = calculateWeight(userWeight, planetName);
  document.getElementById("output").innerHTML = `If you were on ${planetName}, you would weigh ${result}!`;
};
