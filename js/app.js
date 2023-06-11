
let input;
let arrDigits = [];
let displayDiv = document.getElementById('display-div');
let output = document.getElementById('output');
let form = document.getElementById('form');
let reverseButton = document.getElementById("reverse-button");
let reverseDisplayDiv = document.getElementById('reverse-div');
let outputReverse = document.getElementById('outputReverse');
let h3Reverse = document.querySelector('div#reverse-div h3');

// User Interface Logic:
form.addEventListener('submit', function getInput(event) {
  event.preventDefault();
  input = document.getElementById('input').value

  beepBoop(input);

});

reverseButton.onclick = reverseClick;
function reverseClick() {
  outputReverse.innerText = arrDigits.reverse();
  h3Reverse.classList.remove('hidden');
  outputReverse.classList.remove('hidden');

}

// Buisness Logic:
function beepBoop(input) {

  if (input === null || input === NaN || input === '') {
    error = document.getElementById('error');
    error.classList.remove('hidden');

  } else {

    arrDigits = [];
    for (let i = 0; i <= input; i++) {
      arrDigits[i] = i.toString();

      if (arrDigits[i].includes('3')) {
        arrDigits[i] = '\"Won\'t you be my neighbor?\"';
      } else if (arrDigits[i].includes('2')) {
        arrDigits[i] = '\"Boop!\"';
      } else if (arrDigits[i].includes('1')) {
        arrDigits[i] = '\"Beep\"';
      };
    };

    output.innerText = arrDigits.join(', ');
    error.classList.add('hidden');
    displayDiv.classList.remove('hidden');
    document.getElementById('input').value = null;
    reverseButton.classList.remove('hidden');



  }

};
