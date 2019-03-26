var outputTemp = 0;

const toFahrenheit = (userInput) => {
  console.log('user input: '+userInput);
  outputTemp = userInput * (9 / 5) + 32;
  console.log('output temp: '+outputTemp);
  return outputTemp;
};


const toCelsius = (userInput) => {
  let outputTemp = (userInput - 32) * (5 / 9);
  return outputTemp;
};



const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');



const printToDom = (divId, textToPrint) => {
  console.log(divId);
  console.log(textToPrint);
  const selectedDiv = document.getElementById(divId);
  selectedDiv.value = textToPrint;

};



// Get a reference to the button element in the DOM
const button = document.getElementById("convertButton");
const clearButton = document.getElementById("clearButton");




// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  var userInput = document.getElementById("tempInput").value;
  if (document.getElementById("F2c").checked === true) {
    unit = "C";
    let result = toCelsius(userInput);
    console.log(result);
    domStringBuilder(result, unit);
  }
  else if (document.getElementById("C2f").checked === true) {
    unit = "F";
    result = toFahrenheit(userInput);
    console.log('to F: '+result);
    domStringBuilder(outputTemp, unit);
  }
};
const clearConverter = (e) => {
  document.getElementById("tempInput").value = null;
  document.getElementById("tempOutput").value = null;
};
var domString = "";
const domStringBuilder = (temperature, TempUnit) => {
  domString = outputTemp+' degrees '+unit;
  printToDom("tempOutput", domString);
}





// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearConverter);

