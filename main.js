let outputTemp = 0;

let userInput = document.getElementById("tempInput").value;

const toFahrenheit =  (userInput) => {
  let outputTemp = userInput * (9/5) + 32;
  return outputTemp;
};


const toCelsius =  (userInput) => {
  let outputTemp = (userInput- 32) * (5/9);
  return outputTemp;
};



const celsius = document.getElementById('celsius');
const fahrenheit =document.getElementById('fahrenheit');



const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
 
};



// Get a reference to the button element in the DOM
const button = document.getElementById("convertButton");
const clearButton = document.getElementById("clearButton");




// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
 if (document.getElementById("F2c").checked === true) {
   unit = "C";
   let result = toCelsius(userInput);
   console.log(result);
   domStringBuilder(outputTemp, unit);
 }
 else if (document.getElementById("C2f").checked === true) {
  unit = "F";
  let result = toFahrenheit(userInput);
  console.log(result);
  domStringBuilder(outputTemp, unit);
}
};

let domString = "";
const domStringBuilder = (temperature, TempUnit) => {
  domString = `${outputTemp} degrees ${unit}`;
  printToDom("temp-Output", domstring);}





// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);