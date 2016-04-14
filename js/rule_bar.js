var feedback, capitalInput, checkInput, userInput, correctScore, incorrectScore, input, reset;
var continents, modal, cancel, europe, asisMiddleEast, oceania, northAmerica, southAmerica, africa
var form1, form2, form3, form4, form5, form6, form7
var hideList, howToPlay, ruleLink, ruleClose;
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
modal = document.getElementById('modal');
ruleList = document.getElementById('ruleList');
ruleClick = document.getElementById('ruleClick');
ruleClose = document.getElementById('ruleClose');

//Assign various HTML elements to variables and arrays.

var continentObj = {
  "europe": {
    "United Kingdom": "London",
    "Ireland": "Dublin",
    "France": "Paris",
    "Spain": "Madrid",
    "Italy": "Rome",
    "Romania": "Bucharest",
    "Slovakia": "Bratislava"
  },
  "northAmerica": {
    "United States": "Washington",
    "Mexico": "Mexico City",
    "Panama": "Panama City",
    "Belize": "Belmopan",
    "Canada": "Ottowa",
    "Cuba": "Havana",
    "El Salvador": "San Salvador"
  },
  "southAmerica": {
    "Brazil": "Brasilia",
    "Colombia": "Bogota",
    "Venezuela": "Caracas",
    "Chile": "Santiago",
    "Uruguay": "Montevideo",
    "Paraguay": "Asunction",
    "Peru": "Lima"
  },
  "africa": {
    "Egypt": "Cairo",
    "Kenya": "Nairobi",
    "Ethiopia": "Addis Abbaba",
    "Mozambique": "Maputo",
    "Burkina Faso": "Ouagadougou",
    "Nigeria": "Abuja",
    "Madagascar:": "Antananarivo"
  },
  "asiaMiddleEast": {
    "China": "Beijing",
    "Saudi Arabia": "Riyadh",
    "Vietnam": "Hanoi",
    "Russia": "Moscow",
    "South Korea": "Seoul",
    "Japan": "Tokyo",
    "India": "New Delhi"
  },
  "oceania": {
    "Australia": "Canberra",
    "New Zealand": "Wellington",
    "New Guinea": "Port Moresby",
    "Philippines": "Manila",
    "East Timor": "Dili",
    "Tasmania": "Hobart",
    "Indonesia": "Jakarta"
  },
};
/*
1. Create a dictionary that holds the 6 major populated continents
2. The main "continentObj" dictionary has 6 keys, the value of each being
    another dictionary. So you have 6 dictionaries nested within one major
    dictionary, and each 6 dictionaries has 7 key value pairs. The keys are
    the countries and the value pair to each key is its capital.
*/

europeArray = Object.keys(continentObj["europe"])
asiaMiddleEastArray = Object.keys(continentObj["asiaMiddleEast"])
northAmericaArray = Object.keys(continentObj['northAmerica'])
southAmericaArray = Object.keys(continentObj['southAmerica'])
oceaniaArray = Object.keys(continentObj['oceania'])
africaArray = Object.keys(continentObj['africa'])
formArray = [form1, form2, form3, form4, form5, form6, form7]
/*
  assign the keys of each dictionary to an array respective of each continent.
  each array is represented by a variable that is respective of the continent
  it represents. Also create an array of all the forms. I will try to use the
  form array in the future.
*/

function europeSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the "i know this" button (which equals the country name)
  var cap = continentObj["europe"][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = "Correct! you win!"
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = "Wrong, try again!"
      }
    }
  }
}

function southAmericaSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the "i know this" button (which equals the country name)
  var cap = continentObj["southAmerica"][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = "Correct! you win!"
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = "Wrong, try again!"
      }
    }
  }
}

function asiaMiddleEastSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the "i know this" button (which equals the country name)
  var cap = continentObj["asiaMiddleEast"][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = "Correct! you win!"
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = "Wrong, try again!"
      }
    }
  }
}

function northAmericaSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the "i know this" button (which equals the country name)
  var cap = continentObj["northAmerica"][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = "Correct! you win!"
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = "Wrong, try again!"
      }
    }
  }
}

function africaSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the "i know this" button (which equals the country name)
  var cap = continentObj["africa"][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = "Correct! you win!"
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = "Wrong, try again!"
      }
    }
  }
}

function oceaniaSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the "i know this" button (which equals the country name)
  var cap = continentObj["oceania"][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = "Correct! you win!"
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = "Wrong, try again!"
      }
    }
  }
}
/*
  Probably not the most space effective, but a workable way to give functionality
  to the "I know this" buttons on each form. each function is given to a different
  continent in this instance. steps for this function (for oceania) listed below:
  1. declare the function: "oceaniaSubmit" with an event object parameter.
  2. Prevent the default function of whatever this function is attached to
  3. country = the id of the target. The target in this case is the "I Know this"
      button, and their IDs are country names.  the button IDs for oceania are
      assigned by the oceaniaClick function below.
  4. cap = the value pair to continentObj['oceania'][country], which is the capital
      of each country.
  5. start the for loop, for 7 instances, incrementing by one (7 because userInput.length = 7)
  6. userInput is an array that covers all the blank spaces where one enters the
      input i.e. writes in the capitals to the countries. if the blank space is
      equal to the country it represents, then..
  7.check if the value input to the blank line is equal to the cap variable (defined above)
  8. If the condition for #7 is met, then change the feedback text content to then
      given string and add a mark to the counter (defined below)
  9. if the value in the input area is a blank string, change the feedback text to
      the given string.
  10. if the value in the input area is another different from the above conditions,
      add 1 to to the incorrect tally and change the feedback text to the given string
*/


correctScore = document.getElementById('correctScore');
incorrectScore = document.getElementById('incorrectScore');
correctScore.innerHTML = 0
incorrectScore.innerHTML = 0
/*
set 'correctScore' and 'incorrectScore' equal to the elements within my
HTML table that were given those respective IDs. Set there initial values
as zero.
*/

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

function displayRules(e) {
  e.preventDefault()
  ruleList.className = 'showRules'
}

function closeRules(e) {
  e.preventDefault()
  ruleList.className = "hide"
}

function europeClick(e) {
  e.preventDefault();
  modal.className = 'europe'
  form1.firstElementChild.nextElementSibling.id = europeArray[0]
  form1.lastElementChild.id = europeArray[0]
  form1.firstElementChild.innerText = questionString + "United Kingdom";
  form2.firstElementChild.nextElementSibling.id = europeArray[1]
  form2.lastElementChild.id =  europeArray[1]
  form2.firstElementChild.innerText = questionString + "Ireland";
  form3.firstElementChild.nextElementSibling.id = europeArray[2]
  form3.lastElementChild.id = europeArray[2]
  form3.firstElementChild.innerText = questionString + "France";
  form4.firstElementChild.nextElementSibling.id = europeArray[3]
  form4.lastElementChild.id = europeArray[3]
  form4.firstElementChild.innerText = questionString + "Spain";
  form5.firstElementChild.nextElementSibling.id = europeArray[4]
  form5.lastElementChild.id = europeArray[4]
  form5.firstElementChild.innerText = questionString + "Italy";
  form6.firstElementChild.nextElementSibling.id = europeArray[5]
  form6.lastElementChild.id = europeArray[5]
  form6.firstElementChild.innerText = questionString + "Romania";
  form7.firstElementChild.nextElementSibling.id = europeArray[6]
  form7.lastElementChild.id = europeArray[6]
  form7.firstElementChild.innerText = questionString + "Slovkia";
}

function asiaMiddleEastClick(e) {
  e.preventDefault();
  modal.className = 'asiaMiddleEast'
  form1.firstElementChild.nextElementSibling.id = asiaMiddleEastArray[0]
  form1.lastElementChild.id = asiaMiddleEastArray[0]
  form1.firstElementChild.innerText = questionString + "China";
  form2.firstElementChild.nextElementSibling.id = asiaMiddleEastArray[1]
  form2.lastElementChild.id =  asiaMiddleEastArray[1]
  form2.firstElementChild.innerText = questionString + "Saudi Arabia";
  form3.firstElementChild.nextElementSibling.id = asiaMiddleEastArray[2]
  form3.lastElementChild.id = asiaMiddleEastArray[2]
  form3.firstElementChild.innerText = questionString + "Vietnam";
  form4.firstElementChild.nextElementSibling.id = asiaMiddleEastArray[3]
  form4.lastElementChild.id = asiaMiddleEastArray[3]
  form4.firstElementChild.innerText = questionString + "Russia";
  form5.firstElementChild.nextElementSibling.id = asiaMiddleEastArray[4]
  form5.lastElementChild.id = asiaMiddleEastArray[4]
  form5.firstElementChild.innerText = questionString + "South Korea";
  form6.firstElementChild.nextElementSibling.id = asiaMiddleEastArray[5]
  form6.lastElementChild.id = asiaMiddleEastArray[5]
  form6.firstElementChild.innerText = questionString + "Japan";
  form7.firstElementChild.nextElementSibling.id = asiaMiddleEastArray[6]
  form7.lastElementChild.id = asiaMiddleEastArray[6]
  form7.firstElementChild.innerText = questionString + "India";
}

function southAmericaClick(e) {
  e.preventDefault();
  modal.className = 'southAmerica'
  form1.firstElementChild.nextElementSibling.id = southAmericaArray[0]
  form1.lastElementChild.id = southAmericaArray[0]
  form1.firstElementChild.innerText = questionString + "Brazil";
  form2.firstElementChild.nextElementSibling.id = southAmericaArray[1]
  form2.lastElementChild.id =  southAmericaArray[1]
  form2.firstElementChild.innerText = questionString + "Colombia";
  form3.firstElementChild.nextElementSibling.id = southAmericaArray[2]
  form3.lastElementChild.id = southAmericaArray[2]
  form3.firstElementChild.innerText = questionString + "Venezuela";
  form4.firstElementChild.nextElementSibling.id = southAmericaArray[3]
  form4.lastElementChild.id = southAmericaArray[3]
  form4.firstElementChild.innerText = questionString + "Chile";
  form5.firstElementChild.nextElementSibling.id = southAmericaArray[4]
  form5.lastElementChild.id = southAmericaArray[4]
  form5.firstElementChild.innerText = questionString + "Uruguay";
  form6.firstElementChild.nextElementSibling.id = southAmericaArray[5]
  form6.lastElementChild.id = southAmericaArray[5]
  form6.firstElementChild.innerText = questionString + "Paraguay";
  form7.firstElementChild.nextElementSibling.id = southAmericaArray[6]
  form7.lastElementChild.id = southAmericaArray[6]
  form7.firstElementChild.innerText = questionString + "Peru";
}

function oceaniaClick(e) {
  e.preventDefault();
  modal.className = 'oceania';
  form1.firstElementChild.nextElementSibling.id = oceaniaArray[0]
  form1.lastElementChild.id = oceaniaArray[0]
  form1.firstElementChild.innerText = questionString + "Australia";
  form2.firstElementChild.nextElementSibling.id = oceaniaArray[1]
  form2.lastElementChild.id =  oceaniaArray[1]
  form2.firstElementChild.innerText = questionString + "New Zealand";
  form3.firstElementChild.nextElementSibling.id = oceaniaArray[2]
  form3.lastElementChild.id = oceaniaArray[2]
  form3.firstElementChild.innerText = questionString + "New Guinea";
  form4.firstElementChild.nextElementSibling.id = oceaniaArray[3]
  form4.lastElementChild.id = oceaniaArray[3]
  form4.firstElementChild.innerText = questionString + "Philippines";
  form5.firstElementChild.nextElementSibling.id = oceaniaArray[4]
  form5.lastElementChild.id = oceaniaArray[4]
  form5.firstElementChild.innerText = questionString + "East Timor";
  form6.firstElementChild.nextElementSibling.id = oceaniaArray[5]
  form6.lastElementChild.id = oceaniaArray[5]
  form6.firstElementChild.innerText = questionString + "Tasmania";
  form7.firstElementChild.nextElementSibling.id = oceaniaArray[6]
  form7.lastElementChild.id = oceaniaArray[6]
  form7.firstElementChild.innerText = questionString + "Indonesia";
}

function northAmericaClick(e) {
  e.preventDefault();
  modal.className = 'northAmerica';
  form1.firstElementChild.nextElementSibling.id = northAmericaArray[0]
  form1.lastElementChild.id = northAmericaArray[0]
  form1.firstElementChild.innerText = questionString + "United States";
  form2.firstElementChild.nextElementSibling.id = northAmericaArray[1]
  form2.lastElementChild.id =  northAmericaArray[1]
  form2.firstElementChild.innerText = questionString + "Mexico";
  form3.firstElementChild.nextElementSibling.id = northAmericaArray[2]
  form3.lastElementChild.id = northAmericaArray[2]
  form3.firstElementChild.innerText = questionString + "Panama";
  form4.firstElementChild.nextElementSibling.id = northAmericaArray[3]
  form4.lastElementChild.id = northAmericaArray[3]
  form4.firstElementChild.innerText = questionString + "Belize";
  form5.firstElementChild.nextElementSibling.id = northAmericaArray[4]
  form5.lastElementChild.id = northAmericaArray[4]
  form5.firstElementChild.innerText = questionString + "Canada";
  form6.firstElementChild.nextElementSibling.id = northAmericaArray[5]
  form6.lastElementChild.id = northAmericaArray[5]
  form6.firstElementChild.innerText = questionString + "Cuba";
  form7.firstElementChild.nextElementSibling.id = northAmericaArray[6]
  form7.lastElementChild.id = northAmericaArray[6]
  form7.firstElementChild.innerText = questionString + "El Salvador";
}

function africaClick(e) {
  e.preventDefault();
  modal.className = 'africa';
  form1.firstElementChild.nextElementSibling.id = africaArray[0]
  form1.lastElementChild.id = africaArray[0]
  form1.firstElementChild.innerText = questionString + "Egypt";
  form2.firstElementChild.nextElementSibling.id = africaArray[1]
  form2.lastElementChild.id =  africaArray[1]
  form2.firstElementChild.innerText = questionString + "Kenya";
  form3.firstElementChild.nextElementSibling.id = africaArray[2]
  form3.lastElementChild.id = africaArray[2]
  form3.firstElementChild.innerText = questionString + "Ethiopia";
  form4.firstElementChild.nextElementSibling.id = africaArray[3]
  form4.lastElementChild.id = africaArray[3]
  form4.firstElementChild.innerText = questionString + "Mozambique";
  form5.firstElementChild.nextElementSibling.id = africaArray[4]
  form5.lastElementChild.id = africaArray[4]
  form5.firstElementChild.innerText = questionString + "Burkina Faso";
  form6.firstElementChild.nextElementSibling.id = africaArray[5]
  form6.lastElementChild.id = africaArray[5]
  form6.firstElementChild.innerText = questionString + "Nigeria";
  form7.firstElementChild.nextElementSibling.id = africaArray[6]
  form7.lastElementChild.id = africaArray[6]
  form7.firstElementChild.innerText = questionString + "Madagascar";
}

/*
  These big blocks of code are purely the hard-coded display of each form
  that appears when a country is clicked. There are 3 pieces to each country, 2
  of which are assigning ids to each element within the HTML form (this will
  help with the submit functionality). The last piece is to give a string
  value to the label of each form that the user sees when he/she clicks on a
  continent. The first part of the string is defined above as the variable
  questionString.
*/

ruleClick.addEventListener('click', function(e) {
  displayRules(e);
}, false);

ruleClose.addEventListener('click', function(e) {
  closeRules(e);
}, false);

europe.addEventListener('click', function(e) {
  e.preventDefault()
  if (isModalDisplayed()) {
    if(isRulesDisplayed()){
      europeClick(e);
        addEventListenersToInput(europeSubmit)
    }
  }
});

asiaMiddleEast.addEventListener('click', function(e) {
  e.preventDefault()
  if (isModalDisplayed()) {
    if(isRulesDisplayed()) {
      asiaMiddleEastClick(e);
        addEventListenersToInput(asiaMiddleEastSubmit)
    }
  }
});

southAmerica.addEventListener('click', function(e) {
  e.preventDefault()
  if (isModalDisplayed()) {
    if (isRulesDisplayed()) {
      southAmericaClick(e);
        addEventListenersToInput(southAmericaSubmit)
    }
  }
});

oceania.addEventListener('click', function(e) {
  e.preventDefault()
  if (isModalDisplayed()) {
    if (isRulesDisplayed()) {
      oceaniaClick(e);
        addEventListenersToInput(oceaniaSubmit)
    }
  }
});

northAmerica.addEventListener('click', function(e) {
  e.preventDefault()
  if (isModalDisplayed()) {
    if (isRulesDisplayed()) {
      northAmericaClick(e);
        addEventListenersToInput(northAmericaSubmit)
    }
  }
});

africa.addEventListener('click', function(e) {
  e.preventDefault()
    if (isModalDisplayed()) {
      if (isRulesDisplayed()) {
        africaClick(e);
          addEventListenersToInput(africaSubmit)
    }
  }
});

/*
  these six code blocks add an event listener to each continent image. these
  listeners do the following things
  1. prevent the default clicking function
  2. check if a modal is being displayed by running the isModalDisplayed function
  3. if the contition is met, run the africkClick function and addEventListenersToInput
      function with each continent submit function as a parameter
*/

function addEventListenersToInput(submitFunction) {
  for (var i = 0; i < checkInput.length; i++) {
    checkInput[i].addEventListener('click', submitFunction, false)
  }
}
/*
  Declare a function called addEventListenersToInput that takes a parameter
  submitFunction. for 7 instances if i, incrementing by one. add an event listener
  to each checkInput element in the checkInput array and for that event listener,
  run the function listed in this function's parameter on a click.
*/

function removeEventListenersFromInput(removeFunction) {
  for (var i = 0; i < checkInput.length; i++) {
    checkInput[i].removeEventListener('click', removeFunction, false)
  }
}

/*
  essentially the same thing as above, except instead of adding an event listener
  to each element in the checkInput array, remove the event listener from the
  element in the array when a click event happens
*/


function isModalDisplayed() {
  if (modal.className !== 'hide') {
    return false;
  } else {
    return true
  }
}

function isRulesDisplayed() {
  if (ruleList.className !=='hide') {
    return false
  } else {
    return true
  }
}

/*
  this is the function that checks if a modal is displayed. If the className of
  the modal is not 'hide', return false. if the the className of the modal is
  hide, return true. This function is used above for each continent's event
  listener. the function of this function is to make it so when a modal is being
  displayed, the user cannot click and open another modal. If allowed to do this
  the counter is thrown off and everything gets buggy.
*/

function cancelClick(e) {
  var cont = e.target.parentElement.parentElement.className;
  e.preventDefault();
  modal = document.getElementById('modal');
  modal.className = 'hide';
  for (var i = 0; i < userInput.length; i++){
    userInput[i].value = ''
  }
  removeEventListenersFromInput(contFuncMap[cont])
}
/*
  This function make a bunch of stuff happen whenever the cancel button is clicked.
  This function is called in an event listener later which is attached to the
  cancel button for each modal. Listed steps below of what this function does
  1. declares a function called cancelClick which takes an event object parameter
  2. takes the event target (the cancel button), finds its grandparent element
      (the modal div) and extracts its className and assigns to the the variable
      cont. Remember each continent click event (i.e. africaClick) changes the
      modal className to a string of the respective continent that is clicked.
  3. assigns the modal element to the variable modal
  4. Changes the modal className to hide (to hide, from a continent name)
  5. for each userInput blank spaces that takes user input...
  6. change the value to a blank string. This makes it so that values entered
      into the input area don't remain in the boxes if the user clicks cancel
      button.
  7. Lastly, run the removeEventListenersFromInput function that uses the contFuncMap
      dictionary to extract one of the continent Submit functions (i.e. africaSubmit)
      and that removes the event listeners from the all of the submit buttons so that
      they don't pile up on each other and screw up the counter.
*/

var contFuncMap = {
  'oceania': oceaniaSubmit,
  'northAmerica': northAmericaSubmit,
  'southAmerica': southAmericaSubmit,
  'africa': africaSubmit,
  'asiaMiddleEast': asiaMiddleEastSubmit,
  'europe': europeSubmit,
}
/*
  This dictionary has all its keys as strings that are equal to the classNames
  of each continent that are assigned whenever a continent is clicked. All the
  value pairs are the userInput submit functions for each respective continent.
*/

cancel.addEventListener('click', function(e) {
  cancelClick(e);
}, false);

/*
  This adds an event listener to the cancel button element
  created on the HTML page. When the 'cancel' link is clicked it runs the
  'cancelClick' function above which hides the modal from the user's sight
*/

reset.addEventListener('click', function(e) {
  resetScore(e);
}, false);

/*
  This adds an event listener to the reset link where score is kept on the
  HTML table in the top right corner. When the link is clicked, the resetScore
  function is run. This doesn't have much purpose in this specific version.
*/
