let input;
let arrNumbers = [];
let arrDigits = [];
let arrRunningNumbers = [];
function beepBoop(input) {

  // working
  for (let i = 0; i <= input; i++) {
    arrDigits[i] = i.toString();

    if (arrDigits[i].includes('3')) {
      arrDigits[i] = 'neighbor?';
    } else if (arrDigits[i].includes('2')) {
      arrDigits[i] = 'Boop!';
    } else if (arrDigits[i].includes('1')) {
      arrDigits[i] = 'Beep';
    };
  };
  console.log(arrDigits);

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


