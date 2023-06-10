let input;
let arrNumbers = [];
let arrDigits = [];

function beepBoop(input) {

  for (let i = 0; i <= input; i++) {
    arrNumbers[i] = i.toString();

    if (arrNumbers[i] === '1') {
      arrNumbers[i] = 'Beep!';
    } else if (arrNumbers[i] === '2') {
      arrNumbers[i] = 'Boop!';
    } else if (arrNumbers[i] === '3') {
      arrNumbers[i] = 'neighbor?';
    };
  };
  // console.log(arrNumbers);

}

let outputString = "";

// arrNumbers.forEach(function numbersToDigits(number) {
//   console.log("the number: " + number);
//   arrDigits = number.split("");
//   console.log("the number after split: " + arrDigits);

//   outputString = outputString + beepBoop(input) + "  ";
// });

let arrRunningNumbers = [];


function runningNumbers(input) {
  for (let i = 0; i <= input; i++) {
    arrRunningNumbers[i] = i;
  }
  console.log(arrRunningNumbers);
}


function numbersToDigits(number) {
  console.log("the number: " + number);
  arrDigits = number.split("");
  console.log("the number after split: " + arrDigits);

  outputString = outputString + beepBoop(input) + "  ";
}

function replaceIncidents(arrNumbers) {


}


