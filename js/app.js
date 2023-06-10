let input;
let arrNumbers = [];
let arrDigits = [];
let arrRunningNumbers = [];
function beepBoop(input) {

  // working
  for (let i = 0; i <= input; i++) {
    arrDigits[i] = i.toString();

    if (arrDigits[i] === '3') {
      arrDigits[i] = 'neighbor?';
    } else if (arrDigits[i] === '2') {
      arrDigits[i] = 'Boop!';
    } else if (arrDigits[i] === '1') {
      arrDigits[i] = 'Beep';
    };
  };
  // console.log(arrNumbers);

}

function runningNumbers(input) {
  for (let i = 0; i <= input; i++) {
    arrRunningNumbers[i] = i;
  }

  console.log(arrRunningNumbers);
}

function numbersToDigits() {
  arrRunningNumbers.forEach(function (number) {
    let digits = String(number).split('');
    arrDigits.push(digits)
    console.log("the number after split: " + digits)
  });
}


function replaceIncidents(arrNumbers) {


}


