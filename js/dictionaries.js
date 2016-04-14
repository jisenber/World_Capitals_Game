var feedback, capitalInput, checkInput, userInput, correctScore, incorrectScore, input, reset;
var continents, modal, cancel, europe, asisMiddleEast, oceania, northAmerica, southAmerica, africa
var form1, form2, form3, form4, form5, form6, form7
//declare variables
var correctTally = 0
var incorrectTally = 0
//set two global variables equal to 0. This will be used in the counter.

var questionString = "What is the Capital of ";

feedback = document.getElementById('message');
checkInput = document.getElementsByClassName('checkInput');
userInput = document.getElementsByClassName('capitalInput');
reset = document.getElementById('reset');
continents = document.getElementsByClassName('continentList');
input = document.getElementsByClassName('input')
cancel = document.getElementById('cancel');
europe = document.getElementById('europe');
africa = document.getElementById('africa');
asiaMiddleEast = document.getElementById('asiaMiddleEast');
northAmerica = document.getElementById('northAmerica');
southAmerica = document.getElementById('southAmerica');
oceania = document.getElementById('oceania');
form1 = document.getElementById('form1');
form2 = document.getElementById('form2');
form3 = document.getElementById('form3');
form4 = document.getElementById('form4');
form5 = document.getElementById('form5');
form6 = document.getElementById('form6');
form7 = document.getElementById('form7');
//don't forget to try DOM traversing wish nextSibling and whatnot

/*
Make 'feedback' select the message HTML element,
make 'checkInput'select all elements under the checkInput class
make 'userInput' select all elements under the capitalInput class
make 'reset' select the reset HTML element
*/

/*
create a dictionary with key/value pairs. Make each country name a key
and make the capital of each country its respective value
*/

/*
function capitalSubmit(e) {
  e.preventDefault()
  var continent = e.target.id;
  var country = continentObj[continent]
  var cap = continentObj[continent[country]]
}
*/
var continentObj = {
  "europe": {
    "United Kingdom": "London",
    "Ireland": "Dublin",
    "France": "Paris",
    "Spain": "Madrid",
    "Italy": "Rome",
    "Romania": "Bucharest",
    "Slovakia": "Bratislava",
  },
  "northAmerica": {
    "United States": "Washington",
    "Mexico": "Mexico City",
    "Panama": "Panama City",
    "Belize": "Belmopan",
    "Canada": "Ottowa",
    "Cuba": "Havana",
    "El Salvador": "San Salvador",
  },
  "southAmerica": {
    "Brazil": "Brasilia",
    "Colombia": "Bogota",
    "Venezuela": "Caracas",
    "Chile": "Santiago",
    "Uruguay": "Montevideo",
    "Paraguay": "Asunction",
    "Peru": "Lima",
  },
  "africa": {
    "Egypt": "Cairo",
    "Kenya": "Nairobi",
    "Ethiopia": "Addis Abbaba",
    "Mozambique": "Maputo",
    "Burkina Faso": "Ouagadougou",
    "Nigeria": "Abuja",
    "Madagascar:": "Antananarivo",
  },
  "asiaMiddleEast": {
    "China": "Beijing",
    "Saudi Arabia": "Riyadh",
    "Vietnam": "Hanoi",
    "Russia": "Moscow",
    "South Korea": "Seoul",
    "Japan": "Tokyo",
    "India": "New Delhi",
  },
  "oceania": {
    "Australia": "Canberra",
    "New Zealand": "Wellington",
    "New Guinea": "Port Moresby",
    "Philippines": "Manila",
    "East Timor": "Dili",
    "Tasmania": "Hobart",
    "Indonesia": "Jakarta",
  },
};
/*
function userSubmit(e) {
  e.preventDefault();
  var continent = e.target.id;
  var country = continentObj[continent]
  var cap = country[""];
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
*/
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

function europeClick(e) {
  e.preventDefault();
  modal = document.getElementById('modal');
  modal.className = '';
  form1.firstElementChild.id = continentObj["europe"]["United Kingdom"];
  form1.firstElementChild.nextElementSibling.id = continentObj["europe"]["United Kingdom"];
  form1.lastElementChild.id = continentObj["europe"]["United Kingdom"];
  form1.firstElementChild.innerText = questionString + "United Kingdom";
  form2.firstElementChild.id = continentObj["europe"]["Ireland"];
  form2.firstElementChild.nextElementSibling.id = continentObj["europe"]["Ireland"];
  form2.lastElementChild.id =  continentObj["europe"]["Ireland"];
  form2.firstElementChild.innerText = questionString + "Ireland";
  form3.firstElementChild.id = continentObj["europe"]["France"];
  form3.firstElementChild.nextElementSibling.id = continentObj["europe"]["France"];
  form3.lastElementChild.id = continentObj["europe"]["France"];
  form3.firstElementChild.innerText = questionString + "France";
  form4.firstElementChild.id = continentObj["europe"]["Spain"];
  form4.firstElementChild.nextElementSibling.id = continentObj["europe"]["Spain"];
  form4.lastElementChild.id = continentObj["europe"]["Spain"];
  form4.firstElementChild.innerText = questionString + "Spain";
  form5.firstElementChild.id = continentObj["europe"]["Italy"];
  form5.firstElementChild.nextElementSibling.id = continentObj["europe"]["Italy"];
  form5.lastElementChild.id = continentObj["europe"]["Italy"];
  form5.firstElementChild.innerText = questionString + "Italy";
  form6.firstElementChild.id = continentObj["europe"]["Romania"];
  form6.firstElementChild.nextElementSibling.id = continentObj["europe"]["Romania"];
  form6.lastElementChild.id = continentObj["europe"]["Romania"];
  form6.firstElementChild.innerText = questionString + "Romania";
  form7.firstElementChild.id = continentObj["europe"]["Slovakia"];
  form7.firstElementChild.nextElementSibling.id = continentObj["europe"]["Slovakia"];
  form7.lastElementChild.id = continentObj["europe"]["Slovakia"];
  form7.firstElementChild.innerText = questionString + "Slovkia";
}

function asiaMiddleEastClick(e) {
  e.preventDefault();
  modal = document.getElementById('modal');
  modal.className = '';
  form1.firstElementChild.id = continentObj["asiaMiddleEast"]["China"];
  form1.firstElementChild.nextElementSibling.id = continentObj["asiaMiddleEast"]["China"];
  form1.lastElementChild.id = continentObj["asiaMiddleEast"]["China"];
  form1.firstElementChild.innerText = questionString + "China";
  form2.firstElementChild.id = continentObj["asiaMiddleEast"]["Saudi Arabia"];
  form2.firstElementChild.nextElementSibling.id = continentObj["asiaMiddleEast"]["Saudi Arabia"];
  form2.lastElementChild.id =  continentObj["asiaMiddleEast"]["Saudi Arabia"];
  form2.firstElementChild.innerText = questionString + "Saudi Arabia";
  form3.firstElementChild.id = continentObj["asiaMiddleEast"]["Vietnam"];
  form3.firstElementChild.nextElementSibling.id = continentObj["asiaMiddleEast"]["Vietnam"];
  form3.lastElementChild.id = continentObj["asiaMiddleEast"]["Vietnam"];
  form3.firstElementChild.innerText = questionString + "Vietnam";
  form4.firstElementChild.id = continentObj["asiaMiddleEast"]["Russia"];
  form4.firstElementChild.nextElementSibling.id = continentObj["asiaMiddleEast"]["Russia"];
  form4.lastElementChild.id = continentObj["asiaMiddleEast"]["Russia"];
  form4.firstElementChild.innerText = questionString + "Russia";
  form5.firstElementChild.id = continentObj["asiaMiddleEast"]["South Korea"];
  form5.firstElementChild.nextElementSibling.id = continentObj["asiaMiddleEast"]["South Korea"];
  form5.lastElementChild.id = continentObj["asiaMiddleEast"]["South Korea"];
  form5.firstElementChild.innerText = questionString + "South Korea";
  form6.firstElementChild.id = continentObj["asiaMiddleEast"]["Japan"];
  form6.firstElementChild.nextElementSibling.id = continentObj["asiaMiddleEast"]["Japan"];
  form6.lastElementChild.id = continentObj["asiaMiddleEast"]["Japan"];
  form6.firstElementChild.innerText = questionString + "Japan";
  form7.firstElementChild.id = continentObj["asiaMiddleEast"]["India"];
  form7.firstElementChild.nextElementSibling.id = continentObj["asiaMiddleEast"]["India"];
  form7.lastElementChild.id = continentObj["asiaMiddleEast"]["India"];
  form7.firstElementChild.innerText = questionString + "India";
}

function southAmericaClick(e) {
  e.preventDefault();
  modal = document.getElementById('modal');
  modal.className = '';
  form1.firstElementChild.id = continentObj["southAmerica"]["Brazil"];
  form1.firstElementChild.nextElementSibling.id = continentObj["southAmerica"]["Brazil"];
  form1.lastElementChild.id = continentObj["southAmerica"]["Brazil"];
  form1.firstElementChild.innerText = questionString + "Brazil";
  form2.firstElementChild.id = continentObj["southAmerica"]["Colombia"];
  form2.firstElementChild.nextElementSibling.id = continentObj["southAmerica"]["Colombia"];
  form2.lastElementChild.id =  continentObj["southAmerica"]["Colombia"];
  form2.firstElementChild.innerText = questionString + "Colombia";
  form3.firstElementChild.id = continentObj["southAmerica"]["Venezuela"];
  form3.firstElementChild.nextElementSibling.id = continentObj["southAmerica"]["Venezuela"];
  form3.lastElementChild.id = continentObj["southAmerica"]["Venezuela"];
  form3.firstElementChild.innerText = questionString + "Venezuela";
  form4.firstElementChild.id = continentObj["southAmerica"]["Chile"];
  form4.firstElementChild.nextElementSibling.id = continentObj["southAmerica"]["Chile"];
  form4.lastElementChild.id = continentObj["southAmerica"]["Chile"];
  form4.firstElementChild.innerText = questionString + "Chile";
  form5.firstElementChild.id = continentObj["southAmerica"]["Uruguay"];
  form5.firstElementChild.nextElementSibling.id = continentObj["southAmerica"]["Uruguay"];
  form5.lastElementChild.id = continentObj["southAmerica"]["Uruguay"];
  form5.firstElementChild.innerText = questionString + "Uruguay";
  form6.firstElementChild.id = continentObj["southAmerica"]["Paraguay"];
  form6.firstElementChild.nextElementSibling.id = continentObj["southAmerica"]["Paraguay"];
  form6.lastElementChild.id = continentObj["southAmerica"]["Paraguay"];
  form6.firstElementChild.innerText = questionString + "Paraguay";
  form7.firstElementChild.id = continentObj["southAmerica"]["Peru"];
  form7.firstElementChild.nextElementSibling.id = continentObj["southAmerica"]["Peru"];
  form7.lastElementChild.id = continentObj["southAmerica"]["Peru"];
  form7.firstElementChild.innerText = questionString + "Peru";
}

function oceaniaClick(e) {
  e.preventDefault();
  modal = document.getElementById('modal');
  modal.className = '';
  form1.firstElementChild.id = continentObj["oceania"]["Australia"];
  form1.firstElementChild.nextElementSibling.id = continentObj["oceania"]["Australia"];
  form1.lastElementChild.id = continentObj["oceania"]["Australia"];
  form1.firstElementChild.innerText = questionString + "Australia";
  form2.firstElementChild.id = continentObj["oceania"]["New Zealand"];
  form2.firstElementChild.nextElementSibling.id = continentObj["oceania"]["New Zealand"];
  form2.lastElementChild.id =  continentObj["oceania"]["New Zealand"];
  form2.firstElementChild.innerText = questionString + "New Zealand";
  form3.firstElementChild.id = continentObj["oceania"]["New Guinea"];
  form3.firstElementChild.nextElementSibling.id = continentObj["oceania"]["New Guinea"];
  form3.lastElementChild.id = continentObj["oceania"]["New Guinea"];
  form3.firstElementChild.innerText = questionString + "New Guinea";
  form4.firstElementChild.id = continentObj["oceania"]["Philippines"];
  form4.firstElementChild.nextElementSibling.id = continentObj["oceania"]["Philippines"];
  form4.lastElementChild.id = continentObj["oceania"]["Philippines"];
  form4.firstElementChild.innerText = questionString + "Philippines";
  form5.firstElementChild.id = continentObj["oceania"]["East Timor"];
  form5.firstElementChild.nextElementSibling.id = continentObj["oceania"]["East Timor"];
  form5.lastElementChild.id = continentObj["oceania"]["East Timor"];
  form5.firstElementChild.innerText = questionString + "East Timor";
  form6.firstElementChild.id = continentObj["oceania"]["Tasmania"];
  form6.firstElementChild.nextElementSibling.id = continentObj["oceania"]["Tasmania"];
  form6.lastElementChild.id = continentObj["oceania"]["Tasmania"];
  form6.firstElementChild.innerText = questionString + "Tasmania";
  form7.firstElementChild.id = continentObj["oceania"]["Indonesia"];
  form7.firstElementChild.nextElementSibling.id = continentObj["oceania"]["Indonesia"];
  form7.lastElementChild.id = continentObj["oceania"]["Indonesia"];
  form7.firstElementChild.innerText = questionString + "Indonesia";
}

function northAmericaClick(e) {
  e.preventDefault();
  modal = document.getElementById('modal');
  modal.className = '';
  form1.firstElementChild.id = continentObj["northAmerica"]["United States"];
  form1.firstElementChild.nextElementSibling.id = continentObj["northAmerica"]["United States"];
  form1.lastElementChild.id = continentObj["northAmerica"]["United States"];
  form1.firstElementChild.innerText = questionString + "United States";
  form2.firstElementChild.id = continentObj["northAmerica"]["Mexico"];
  form2.firstElementChild.nextElementSibling.id = continentObj["northAmerica"]["Mexico"];
  form2.lastElementChild.id =  continentObj["northAmerica"]["Mexico"];
  form2.firstElementChild.innerText = questionString + "Mexico";
  form3.firstElementChild.id = continentObj["northAmerica"]["Panama"];
  form3.firstElementChild.nextElementSibling.id = continentObj["northAmerica"]["Panama"];
  form3.lastElementChild.id = continentObj["northAmerica"]["Panama"];
  form3.firstElementChild.innerText = questionString + "Panama";
  form4.firstElementChild.id = continentObj["northAmerica"]["Belize"];
  form4.firstElementChild.nextElementSibling.id = continentObj["northAmerica"]["Belize"];
  form4.lastElementChild.id = continentObj["northAmerica"]["Belize"];
  form4.firstElementChild.innerText = questionString + "Belize";
  form5.firstElementChild.id = continentObj["northAmerica"]["Canada"];
  form5.firstElementChild.nextElementSibling.id = continentObj["northAmerica"]["Canada"];
  form5.lastElementChild.id = continentObj["northAmerica"]["Canada"];
  form5.firstElementChild.innerText = questionString + "Canada";
  form6.firstElementChild.id = continentObj["northAmerica"]["Cuba"];
  form6.firstElementChild.nextElementSibling.id = continentObj["northAmerica"]["Cuba"];
  form6.lastElementChild.id = continentObj["northAmerica"]["Cuba"];
  form6.firstElementChild.innerText = questionString + "Cuba";
  form7.firstElementChild.id = continentObj["northAmerica"]["El Salvador"];
  form7.firstElementChild.nextElementSibling.id = continentObj["northAmerica"]["El Salvador"];
  form7.lastElementChild.id = continentObj["northAmerica"]["El Salvador"];
  form7.firstElementChild.innerText = questionString + "El Salvador";
}

function africaClick(e) {
  e.preventDefault();
  modal = document.getElementById('modal');
  modal.className = '';
  form1.firstElementChild.id = continentObj["africa"]["Egypt"];
  form1.firstElementChild.nextElementSibling.id = continentObj["africa"]["Egypt"];
  form1.lastElementChild.id = continentObj["africa"]["Egypt"];
  form1.firstElementChild.innerText = questionString + "Egypt";
  form2.firstElementChild.id = continentObj["africa"]["Kenya"];
  form2.firstElementChild.nextElementSibling.id = continentObj["northAmerica"]["Kenya"];
  form2.lastElementChild.id =  continentObj["africa"]["Kenya"];
  form2.firstElementChild.innerText = questionString + "Kenya";
  form3.firstElementChild.id = continentObj["africa"]["Ethiopia"];
  form3.firstElementChild.nextElementSibling.id = continentObj["africa"]["Ethiopia"];
  form3.lastElementChild.id = continentObj["africa"]["Ethiopia"];
  form3.firstElementChild.innerText = questionString + "Ethiopia";
  form4.firstElementChild.id = continentObj["africa"]["Mozambique"];
  form4.firstElementChild.nextElementSibling.id = continentObj["africa"]["Mozambique"];
  form4.lastElementChild.id = continentObj["africa"]["Mozambique"];
  form4.firstElementChild.innerText = questionString + "Mozambique";
  form5.firstElementChild.id = continentObj["africa"]["Burkina Faso"];
  form5.firstElementChild.nextElementSibling.id = continentObj["africa"]["Burkina Faso"];
  form5.lastElementChild.id = continentObj["africa"]["Burkina Faso"];
  form5.firstElementChild.innerText = questionString + "Burkina Faso";
  form6.firstElementChild.id = continentObj["africa"]["Nigeria"];
  form6.firstElementChild.nextElementSibling.id = continentObj["africa"]["Nigeria"];
  form6.lastElementChild.id = continentObj["africa"]["Nigeria"];
  form6.firstElementChild.innerText = questionString + "Nigeria";
  form7.firstElementChild.id = continentObj["africa"]["Madagascar"];
  form7.firstElementChild.nextElementSibling.id = continentObj["africa"]["Madagascar"];
  form7.lastElementChild.id = continentObj["africa"]["Madagascar"];
  form7.firstElementChild.innerText = questionString + "Madagascar";
}

europe.addEventListener('click', function(e) {
  europeClick(e);
}, false)

asiaMiddleEast.addEventListener('click', function(e) {
  asiaMiddleEastClick(e);
}, false)

southAmerica.addEventListener('click', function(e) {
  southAmericaClick(e);
}, false)

oceania.addEventListener('click', function(e) {
  oceaniaClick(e);
}, false)

northAmerica.addEventListener('click', function(e) {
  northAmericaClick(e);
}, false)

africa.addEventListener('click', function(e) {
  africaClick(e);
}, false)

function cancelClick(e) {
  e.preventDefault();
  modal = document.getElementById('modal');
  modal.className = 'hide';
}

cancel.addEventListener('click', function(e) {
  cancelClick(e);
}, false);

/*
for (var i=0; i < continents.length; i++) {
  continents[i].addEventListener('click', function(e) {
    countryClick(e);
  }, false);
}
*/
/*
for (var i = 0; i < checkInput.length; i++) {
  checkInput[i].addEventListener('click', function(e) {
    userSubmit(e);
  }, false);
}

iterate through the elements that represent the submit buttons for each form.
85. for a given element within the array returned by the checkInput class, add an
event listener to that element that says on a click action, run the userSubmit
and the counter functions.
*/

reset.addEventListener('click', function(e) {
  resetScore(e);
}, false);
