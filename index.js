const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
let scoreEl = document.getElementById("score-el");
const btnEl = document.getElementById("btn-el");
let metersToFeet = 0;
let feetToMeter = 0;
let litersToGalons = 0;
let galonsToLiters = 0;
let kilosToPounds = 0;
let poundsToKilos = 0;

btnEl.addEventListener("click", function () {
  //obtener el valor del input
  let inputValue = scoreEl.value;
  console.log(inputValue);
  calculations(inputValue);
});

function calculations(value) {
  //salida esperada
  //20 meters = 65.616 feet | 20 feet = 6.096 meters
  metersToFeet = value * 3.281;
  feetToMeter = value / 3.281;
  litersToGalons = value * 0.264;
  galonsToLiters = value / 0.264;
  kilosToPounds = value * 2.204;
  poundsToKilos = value / 2.204;
  lengthEl.innerHTML = ` ${value} Meters  = ${metersToFeet.toFixed(
    3
  )} Feet | ${value} Feet = ${feetToMeter.toFixed(3)} Meters`;

  volumeEl.innerHTML = ` ${value} Liters  = ${litersToGalons.toFixed(
    3
  )} Galons | ${value} Galons = ${galonsToLiters.toFixed(3)} Liters`;

  massEl.innerHTML = ` ${value} Kilos  = ${kilosToPounds.toFixed(
    3
  )} Pounds | ${value} Pounds = ${poundsToKilos.toFixed(3)} Kilos`;
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
