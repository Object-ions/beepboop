# _Mr. Roboger's Neighborhood_

#### By **Moshe Atia Poston**

 This project is an interactive web application that involves receiving an input from the user (number) and returning a list of values displayed.


_Live demo: [GH-pages](https://object-ions.github.io/beepboop/)_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

This project is an interactive web application that involves receiving an input from the user (number) and returning a list of values from 0 to the inputted number, with specific substitutions made based on the conditions outlined below.
It has a user-friendly interface, including a field for users to input their preferred number. The application should also handle exceptions where the user doesn't input a valid number.
Upon receiving the user's input, the application will generate a list of numbers starting from 0 up to the user's input.
 * If a number contains a '1', it will be replaced entirely with "Beep!" regardless of the other digits in the number.
 * If a number contains a '2' but no '1', it will be replaced entirely with "Boop!"
 * If a number contains a '3' but no '1' or '2', it will be replaced entirely with "Won't you be my neighbor?".
The user can reverse the output by clicking a button.
Once the substitutions have been made, the application will return and display the new list of values to the user with an option to reverse the list and display it from end to start.

## Setup/Installation Requirements

* Clone this repository to your local machine.
* Navigate to the project directory.
* Open the index.html file in a web browser.
* Answer one or more of the questions.

## Known Bugs

2 known bugs:
* 1. The 'revered' result does not updates automaticcly upon a new 'submit' click (only manually)_
* 2. When the result has more than 14 instances to display at the 'reverse' section it will overflow outside of the container.

## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Moshe Atia Poston

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.