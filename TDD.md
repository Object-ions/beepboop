Test-Drive Development (TDD)

Describe: beepBoop()
Test: It should return an array of numbers from 0 to the user's inputted number.
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: It should take output and convert it from an array of numbers to a string
Code: getInput(5);
Expected Output: ['0', '1', '2', '3', '4', '5']

Test: It should replace the string 1 with the text "BEEP", replace the string 2 with "BOOP" and replace the string 3 with "NEIGHBOR".
Code: beepBoop(5);
Expected Output: ['0', 'BEEP', 'BOOP', 'NEIGHBOR', '4', '5']

Test: It should take arry output and combine it into a single string using a " ," to join.
Code: 
Expected Output: 0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5

Test: It should take string output and showcase its value in the <p> #input and remove the 'hidden' class.
Code: 
Expected Output: <div id="display-div" class="inside-form">

Test: It should pop an error message if submitted without setting a number.
Code: 
Expected Output: error message.