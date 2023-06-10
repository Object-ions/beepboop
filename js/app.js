
let input;
let arrDigits = [];
let displayDiv = document.getElementById('display-div');
let output = document.getElementById('output');
let form = document.getElementById('form');

function beepBoop(input) {
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
  output.innerText = arrDigits;
  displayDiv.removeAttribute('class')

};

form.addEventListener('submit', function getInput(event) {
  event.preventDefault();
  input = document.getElementById('input').value
  console.log(input);
  beepBoop(input);
});

