let input;
let arrNumbers = [];

function beepBoop(input) {
  for (let index = 0; index <= input; index++) {
    arrNumbers[index] = (index);
  }
  if (arrNumbers === 1) {
    console.log("error");
  };
  console.log(arrNumbers);
}