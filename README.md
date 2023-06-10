1. take theinput from the user
  a. store it in a variable "input"
  b. break input into an array "arrNumer"
2. run a valitation check on "arrNumber"
  if (number[x] contain 1){
    replace 1 with "beep"
  } else if (number[x] contain 2){
    replace 2 with "bloop"
  }  else if (number[x] contain 3){
    replace 3 with "neighbor"
  }
3. display the result in the hidden div
  a. fun a for loop
    (let i; i < input; i++){
      console.log(i)
    }

Describe: beepBoop()

Test: It should return an array of numbers from 0 to the user's inputted number
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: It should replace 1 with the text "beep", 2 with "BOOP" and 3 with "NEIGHBOR"
Code: beepBoop(5);
Expected Output: [0, 'BEEP', 'BOOP', 'NEIGHBOR', 4, 5]

