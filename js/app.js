let input;
let arrNumbers = [];
let digits = [];

function beepBoop(input) {
  for (let i = 0; i <= input; i++) {
    arrNumbers[i] = (i);

    if (arrNumbers[i] === 1) {
      arrNumbers[i] = "Beep!";
    } else if (arrNumbers[i] === 2) {
      arrNumbers[i] = "Boop!";
    } else if (arrNumbers[i] === 3) {
      arrNumbers[i] = "neighbor?";
    };
  };

  console.log(arrNumbers);
}

function numbersToDigits(arrNumbers) {

}