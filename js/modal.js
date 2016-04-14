var feedback, capitalInput, checkInput, userInput, correctScore, incorrectScore, reset;
var continents, modal, cancel
//declare variables
var correctTally = 0
var incorrectTally = 0
//set two global variables equal to 0. This will be used in the counter.

feedback = document.getElementById('message');
checkInput = document.getElementsByClassName('checkInput');
userInput = document.getElementsByClassName('capitalInput');
reset = document.getElementById('reset');
continents = document.getElementsByClassName('continentList');
cancel = document.getElementById('cancel');
/*
Make 'feedback' select the message HTML element,
make 'checkInput'select all elements under the checkInput class
make 'userInput' select all elements under the capitalInput class
make 'reset' select the reset HTML element
*/

var capitalObj = {
  "Sudan": "Khartoum",
  "Ethiopia": "Addis Abbaba",
  "Egypt": "Cairo",
  "Libya": "Tripoli"
}
/*
create a dictionary with key/value pairs. Make each country name a key
and make the capital of each country its respective value
*/

function userSubmit(e) {
  e.preventDefault();
  var country = e.target.id;
  var cap = capitalObj[country];
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id == country) {
      if (userInput[i].value == cap) {
        feedback.textContent = "Correct! you win!"
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = "Wrong, try again!"
      }
    }
  }
}
/*
1.  declare a function called 'userSubmit' which takes an event
2.  Prevent the default action of the event (which is to link to another page)
3.  make the variable 'country' equal to the HTML ID of the event target.
    The event target in this case is the clickable button. each button was
    given an id of its respective country.
4.  make the variable 'cap' equal to the the the value within the capitolObj
    dictionary that corresponds with the HTML ID of the of the event target.
5.  Create a for loop that iterates through the array of elements created when
    userInput is called (every element under the classname capitalInput)
6.  If the id of a given element in the userInput array is equal to the id of
    the event target... (what this does is that it singles out the the form you
    want instead of clumping all the forms together. Now when you enter a value,
    it will only check that value on the specific form you are focused on)
7.  is value input to any given element in the userInput array is equal to
    the value pair of the country it represents...
8.  Then change the message at the top to the given string and...
9.  make the HTML content of the correctScore element (in the table) equal to
    the correctTally number (set to zero as a global variable) plus 1.
10. If the value of the input that the user enters into the userInput element
    is an empty string, then change the feedback text to the given string.
11. If the value input to any given element in the userInput array is NOT equal
    to the value pair of the country it represents...
12. make the HTML content of the incorrectScore element (in the table) equal to
    the incorrectTally number (set to zero asa  global variable) plus 1.
13. Then change the message at the top to say the given string
*/

correctScore = document.getElementById('correctScore');
incorrectScore = document.getElementById('incorrectScore');
correctScore.innerHTML = 0
incorrectScore.innerHTML = 0
/*
set 'correctScore' and 'incorrectScore' equal to the elements within my
HTML table that were given those respective IDs
*/

/*
create a function counter that takes an event object. Must include the (e) because
a critical part of the function is another function which takes an event object.
if the userSubmit function returns true, then change the HTML of the correctTally
element to equal to the global variable originally set to 0. Add 1 incrementally
for each 'true' that is returned from userSubmit. Same functionality for false
i.e. 'else' just affecting a different element.  */

function resetScore(e) {
  e.preventDefault()
  correctTally = 0
  incorrectTally = 0
  correctScore.innerHTML = 0;
  incorrectScore.innerHTML = 0;
}
/*
This creates a function called reset score that takes an event object. That
event object is used on the first line of the function to prevent the link from
performing its default function. after it prevents that, it sets all the global
variables used in the counter to zero.*/

function countryClick(e) {
  e.preventDefault();
  modal = document.getElementById('modal');
  modal.className = '';
}

function cancelClick(e) {
  e.preventDefault();
  modal = document.getElementById('modal');
  modal.className = 'hide';
}

cancel.addEventListener('click', function(e) {
  cancelClick(e);
}, false);

for (var i=0; i < continents.length; i++) {
  continents[i].addEventListener('click', function(e) {
    countryClick(e);
  }, false);
}


for (var i = 0; i < checkInput.length; i++) {
  checkInput[i].addEventListener('click', function(e) {
    userSubmit(e);
  }, false);
}
/*
iterate through the elements that represent the submit buttons for each form.
85. for a given element within the array returned by the checkInput class, add an
event listener to that element that says on a click action, run the userSubmit
and the counter functions.*/

reset.addEventListener('click', function(e) {
  resetScore(e)
}, false)
