let input;
let arrNumbers = [];
let arrDigits = [];

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

  arrNumbers.forEach(function numbersToDigits(number) {
    arrDigits = number.split(" ")
    console.log("arrDigits: " + arrDigits);
    console.log(number, i);
  });

  console.log(arrNumbers);
  numbersToDigits();
}

