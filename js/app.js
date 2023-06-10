let form = document.getElementById('form');
let input = document.getElementById('input');
let output = document.getElementById('output');

let arrDigits = [];
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


