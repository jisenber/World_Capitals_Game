var feedback, capitalInput, checkInput, userInput;
//declare variables

feedback = document.getElementById('message');
checkInput = document.getElementsByClassName('checkInput');
userInput = document.getElementsByClassName('capitalInput');
/* Make 'feedback' select the message HTML element,
make 'checkInput'select all elements under the checkInput class
make 'userInput' select all elements under the capitalInput class
*/

var capitalObj = {
  "Sudan": "Khartoum",
  "Ethiopia": "Addis Abbaba",
  "Egypt": "Cairo",
  "Libya": "Tripoli"
}
/* create a dictionary with key/value pairs. Make each country name a key
and make the capital of each country its respective value*/

function userSubmit(e) {
  e.preventDefault();
  var country = e.target.id;
  var cap = capitalObj[country];
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id == country) {
      if (userInput[i].value == cap) {
        feedback.textContent = "Correct! you win!"
      } else {
        feedback.textContent = "Wrong, try again!"
      }
    }
  }
}

/*
21. declare a function called 'userSubmit' which takes an event
22. Prevent the default action of the event (which is to link to another page)
23. make the variable 'country' equal to the HTML ID of the event target.
    The event target in this case is the clickable button. each button was
    given an id of its respective country.
24. make the variable 'cap' equal to the the the value within the capitolObj
    dictionary that corresponds with the HTML ID of the of the event target.
25. Create a for loop that iterates through the array of elements created when
    userInput is called (every element under the classname capitalInput)
26. If the id of a given element in the userInput array is equal to the id of
    the event target... (what this does is that it singles out the the form you
    want instead of clumping all the forms together. Now when you enter a value,
    it will only check that value on the specific form you are focused on)
27. is value input to any given element in the userInput array is equal to
    the value pair of the country it represents...
28. Then change the message at the top to the given string.
29. If the value input to any given element in the userInput array is NOT equal
    to the value pair of the country it represents...
30.  then Change the message at the top to say the given string;
*/

for (var i = 0; i < checkInput.length; i++) {
  checkInput[i].addEventListener('click', function(e) {
    userSubmit(e);
  }, false);
}
/*iterate through the elements that represent the submit buttons for each form.
59. for a given element within the array returned by the checkInput class, add an
event listener to that element that says on a click action, run the userSubmit
function.*/
