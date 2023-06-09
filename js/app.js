let input;
let arrNumbers = [];

function beepBoop(input) {
  for (let i = 0; i <= input; i++) {
    arrNumbers[i] = (i);

    if (arrNumbers[i] === 1) {
      arrNumbers[i] = "BEEP";
    } else if (arrNumbers[i] === 2) {
      arrNumbers[i] = "BOOP";
    } else if (arrNumbers[i] === 3) {
      arrNumbers[i] = "NEIGHBOR";
    };
  };

  console.log(arrNumbers);
}