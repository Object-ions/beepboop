let input;
let arrNumbers = [];
let arrDigits = [];
let arrRunningNumbers = [];
function beepBoop(input) {

  // working
  for (let i = 0; i <= input; i++) {
    arrDigits[i] = i.toString();

    if (arrDigits[16][16][i] === '3') {
      arrDigits[16][i] = 'neighbor?';
    } else if (arrDigits[16][i] === '2') {
      arrDigits[16][i] = 'Boop!';
    } else if (arrDigits[16][i] === '1') {
      arrDigits[16][i] = 'Beep';
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


