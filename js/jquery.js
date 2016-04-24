var correctTally = 0
var incorrectTally = 0
//set two global variables equal to 0. This will be used in the counter.

var questionString = 'What is the Capital of ';

var feedback = document.getElementById('message');
var checkInput = document.getElementsByClassName('checkInput');
var userInput = document.getElementsByClassName('capitalInput');
var reset = document.getElementById('reset');
var continents = document.getElementsByClassName('continentList');
var input = document.getElementsByClassName('input')
var cancel = document.getElementById('cancel');
var Europe = document.getElementById('Europe');
var Africa = document.getElementById('Africa');
var Asia_Middle_East = document.getElementById('Asia_Middle_East');
var North_America = document.getElementById('North_America');
var South_America = document.getElementById('South_America');
var Oceania = document.getElementById('Oceania');
var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var form4 = document.getElementById('form4');
var form5 = document.getElementById('form5');
var form6 = document.getElementById('form6');
var form7 = document.getElementById('form7');
var modal = document.getElementById('modal');
var ruleList = document.getElementById('ruleList');
var ruleClick = document.getElementById('ruleClick');
var ruleClose = document.getElementById('ruleClose');

//Assign various HTML elements to variables and arrays.

var continentObj = {
  'Europe': {
    'United Kingdom': 'London',
    'Ireland': 'Dublin',
    'France': 'Paris',
    'Spain': 'Madrid',
    'Italy': 'Rome',
    'Romania': 'Bucharest',
    'Slovakia': 'Bratislava'
  },
  'North_America': {
    'United States': 'Washington',
    'Mexico': 'Mexico City',
    'Panama': 'Panama City',
    'Belize': 'Belmopan',
    'Canada': 'Ottowa',
    'Cuba': 'Havana',
    'El Salvador': 'San Salvador'
  },
  'South_America': {
    'Brazil': 'Brasilia',
    'Colombia': 'Bogota',
    'Venezuela': 'Caracas',
    'Chile': 'Santiago',
    'Uruguay': 'Montevideo',
    'Paraguay': 'Asunction',
    'Peru': 'Lima'
  },
  'Africa': {
    'Egypt': 'Cairo',
    'Kenya': 'Nairobi',
    'Ethiopia': 'Addis Abbaba',
    'Mozambique': 'Maputo',
    'Burkina Faso': 'Ouagadougou',
    'Nigeria': 'Abuja',
    'Madagascar:': 'Antananarivo'
  },
  'Asia_Middle_East': {
    'China': 'Beijing',
    'Saudi Arabia': 'Riyadh',
    'Vietnam': 'Hanoi',
    'Russia': 'Moscow',
    'South Korea': 'Seoul',
    'Japan': 'Tokyo',
    'India': 'New Delhi'
  },
  'Oceania': {
    'Australia': 'Canberra',
    'New Zealand': 'Wellington',
    'New Guinea': 'Port Moresby',
    'Philippines': 'Manila',
    'East Timor': 'Dili',
    'Tasmania': 'Hobart',
    'Indonesia': 'Jakarta'
  },
};
/*
1. Create a dictionary that holds the 6 major populated continents
2. The main 'continentObj' dictionary has 6 keys, the value of each being
    another dictionary. So you have 6 dictionaries nested within one major
    dictionary, and each 6 dictionaries has 7 key value pairs. The keys are
    the countries and the value pair to each key is its capital.
*/

var EuropeArray = Object.keys(continentObj['Europe'])
var Asia_Middle_EastArray = Object.keys(continentObj['Asia_Middle_East'])
var North_AmericaArray = Object.keys(continentObj['North_America'])
var South_AmericaArray = Object.keys(continentObj['South_America'])
var OceaniaArray = Object.keys(continentObj['Oceania'])
var AfricaArray = Object.keys(continentObj['Africa'])
var formArray = [form1, form2, form3, form4, form5, form6, form7]
/*
  assign the keys of each dictionary to an array respective of each continent.
  each array is represented by a variable that is respective of the continent
  it represents. Also create an array of all the forms. I will try to use the
  form array in the future.
*/

function EuropeSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the 'i know this' button (which equals the country name)
  var cap = continentObj['Europe'][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = 'Correct! you win!'
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = 'Wrong, try again!'
      }
    }
  }
}

function South_AmericaSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the 'i know this' button (which equals the country name)
  var cap = continentObj['South_America'][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = 'Correct! you win!'
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = 'Wrong, try again!'
      }
    }
  }
}

function Asia_Middle_EastSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the 'i know this' button (which equals the country name)
  var cap = continentObj['Asia_Middle_East'][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = 'Correct! you win!'
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = 'Wrong, try again!'
      }
    }
  }
}

function North_AmericaSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the 'i know this' button (which equals the country name)
  var cap = continentObj['North_America'][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = 'Correct! you win!'
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = 'Wrong, try again!'
      }
    }
  }
}

function AfricaSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the 'i know this' button (which equals the country name)
  var cap = continentObj['Africa'][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = 'Correct! you win!'
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = 'Wrong, try again!'
      }
    }
  }
}

function OceaniaSubmit(e) {
  e.preventDefault();
  var country = e.target.id; //country = ID of the 'i know this' button (which equals the country name)
  var cap = continentObj['Oceania'][country]; //cap = the value to each key in the above dictionary
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].id === country) {
      if (userInput[i].value === cap) {
        feedback.textContent = 'Correct! you win!'
        correctScore.innerHTML = (correctTally += 1)
      } else if (userInput[i].value == '') {
        feedback.textContent = 'C\'mon! take a guess!'
      } else if (userInput[i] !== cap) {
        incorrectScore.innerHTML = (incorrectTally += 1)
        feedback.textContent = 'Wrong, try again!'
      }
    }
  }
}
/*
  Probably not the most space effective, but a workable way to give functionality
  to the 'I know this' buttons on each form. each function is given to a different
  continent in this instance. steps for this function (for Oceania) listed below:
  1. declare the function: 'OceaniaSubmit' with an event object parameter.
  2. Prevent the default function of whatever this function is attached to
  3. country = the id of the target. The target in this case is the 'I Know this'
      button, and their IDs are country names.  the button IDs for Oceania are
      assigned by the OceaniaClick function below.
  4. cap = the value pair to continentObj['Oceania'][country], which is the capital
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


var correctScore = document.getElementById('correctScore');
var incorrectScore = document.getElementById('incorrectScore');
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
  ruleList.className = 'hide'
}

function EuropeClick(e) {
  e.preventDefault();
  modal.className = 'Europe'
  form1.firstElementChild.nextElementSibling.id = EuropeArray[0]
  form1.lastElementChild.id = EuropeArray[0]
  form1.firstElementChild.innerText = questionString + 'United Kingdom';
  form2.firstElementChild.nextElementSibling.id = EuropeArray[1]
  form2.lastElementChild.id =  EuropeArray[1]
  form2.firstElementChild.innerText = questionString + 'Ireland';
  form3.firstElementChild.nextElementSibling.id = EuropeArray[2]
  form3.lastElementChild.id = EuropeArray[2]
  form3.firstElementChild.innerText = questionString + 'France';
  form4.firstElementChild.nextElementSibling.id = EuropeArray[3]
  form4.lastElementChild.id = EuropeArray[3]
  form4.firstElementChild.innerText = questionString + 'Spain';
  form5.firstElementChild.nextElementSibling.id = EuropeArray[4]
  form5.lastElementChild.id = EuropeArray[4]
  form5.firstElementChild.innerText = questionString + 'Italy';
  form6.firstElementChild.nextElementSibling.id = EuropeArray[5]
  form6.lastElementChild.id = EuropeArray[5]
  form6.firstElementChild.innerText = questionString + 'Romania';
  form7.firstElementChild.nextElementSibling.id = EuropeArray[6]
  form7.lastElementChild.id = EuropeArray[6]
  form7.firstElementChild.innerText = questionString + 'Slovkia';
}

function Asia_Middle_EastClick(e) {
  e.preventDefault();
  modal.className = 'Asia_Middle_East'
  form1.firstElementChild.nextElementSibling.id = Asia_Middle_EastArray[0]
  form1.lastElementChild.id = Asia_Middle_EastArray[0]
  form1.firstElementChild.innerText = questionString + 'China';
  form2.firstElementChild.nextElementSibling.id = Asia_Middle_EastArray[1]
  form2.lastElementChild.id =  Asia_Middle_EastArray[1]
  form2.firstElementChild.innerText = questionString + 'Saudi Arabia';
  form3.firstElementChild.nextElementSibling.id = Asia_Middle_EastArray[2]
  form3.lastElementChild.id = Asia_Middle_EastArray[2]
  form3.firstElementChild.innerText = questionString + 'Vietnam';
  form4.firstElementChild.nextElementSibling.id = Asia_Middle_EastArray[3]
  form4.lastElementChild.id = Asia_Middle_EastArray[3]
  form4.firstElementChild.innerText = questionString + 'Russia';
  form5.firstElementChild.nextElementSibling.id = Asia_Middle_EastArray[4]
  form5.lastElementChild.id = Asia_Middle_EastArray[4]
  form5.firstElementChild.innerText = questionString + 'South Korea';
  form6.firstElementChild.nextElementSibling.id = Asia_Middle_EastArray[5]
  form6.lastElementChild.id = Asia_Middle_EastArray[5]
  form6.firstElementChild.innerText = questionString + 'Japan';
  form7.firstElementChild.nextElementSibling.id = Asia_Middle_EastArray[6]
  form7.lastElementChild.id = Asia_Middle_EastArray[6]
  form7.firstElementChild.innerText = questionString + 'India';
}

function South_AmericaClick(e) {
  e.preventDefault();
  modal.className = 'South_America'
  form1.firstElementChild.nextElementSibling.id = South_AmericaArray[0]
  form1.lastElementChild.id = South_AmericaArray[0]
  form1.firstElementChild.innerText = questionString + 'Brazil';
  form2.firstElementChild.nextElementSibling.id = South_AmericaArray[1]
  form2.lastElementChild.id =  South_AmericaArray[1]
  form2.firstElementChild.innerText = questionString + 'Colombia';
  form3.firstElementChild.nextElementSibling.id = South_AmericaArray[2]
  form3.lastElementChild.id = South_AmericaArray[2]
  form3.firstElementChild.innerText = questionString + 'Venezuela';
  form4.firstElementChild.nextElementSibling.id = South_AmericaArray[3]
  form4.lastElementChild.id = South_AmericaArray[3]
  form4.firstElementChild.innerText = questionString + 'Chile';
  form5.firstElementChild.nextElementSibling.id = South_AmericaArray[4]
  form5.lastElementChild.id = South_AmericaArray[4]
  form5.firstElementChild.innerText = questionString + 'Uruguay';
  form6.firstElementChild.nextElementSibling.id = South_AmericaArray[5]
  form6.lastElementChild.id = South_AmericaArray[5]
  form6.firstElementChild.innerText = questionString + 'Paraguay';
  form7.firstElementChild.nextElementSibling.id = South_AmericaArray[6]
  form7.lastElementChild.id = South_AmericaArray[6]
  form7.firstElementChild.innerText = questionString + 'Peru';
}

function OceaniaClick(e) {
  e.preventDefault();
  modal.className = 'Oceania';
  form1.firstElementChild.nextElementSibling.id = OceaniaArray[0]
  form1.lastElementChild.id = OceaniaArray[0]
  form1.firstElementChild.innerText = questionString + 'Australia';
  form2.firstElementChild.nextElementSibling.id = OceaniaArray[1]
  form2.lastElementChild.id =  OceaniaArray[1]
  form2.firstElementChild.innerText = questionString + 'New Zealand';
  form3.firstElementChild.nextElementSibling.id = OceaniaArray[2]
  form3.lastElementChild.id = OceaniaArray[2]
  form3.firstElementChild.innerText = questionString + 'New Guinea';
  form4.firstElementChild.nextElementSibling.id = OceaniaArray[3]
  form4.lastElementChild.id = OceaniaArray[3]
  form4.firstElementChild.innerText = questionString + 'Philippines';
  form5.firstElementChild.nextElementSibling.id = OceaniaArray[4]
  form5.lastElementChild.id = OceaniaArray[4]
  form5.firstElementChild.innerText = questionString + 'East Timor';
  form6.firstElementChild.nextElementSibling.id = OceaniaArray[5]
  form6.lastElementChild.id = OceaniaArray[5]
  form6.firstElementChild.innerText = questionString + 'Tasmania';
  form7.firstElementChild.nextElementSibling.id = OceaniaArray[6]
  form7.lastElementChild.id = OceaniaArray[6]
  form7.firstElementChild.innerText = questionString + 'Indonesia';
}

function North_AmericaClick(e) {
  e.preventDefault();
  modal.className = 'North_America';
  form1.firstElementChild.nextElementSibling.id = North_AmericaArray[0]
  form1.lastElementChild.id = North_AmericaArray[0]
  form1.firstElementChild.innerText = questionString + 'United States';
  form2.firstElementChild.nextElementSibling.id = North_AmericaArray[1]
  form2.lastElementChild.id =  North_AmericaArray[1]
  form2.firstElementChild.innerText = questionString + 'Mexico';
  form3.firstElementChild.nextElementSibling.id = North_AmericaArray[2]
  form3.lastElementChild.id = North_AmericaArray[2]
  form3.firstElementChild.innerText = questionString + 'Panama';
  form4.firstElementChild.nextElementSibling.id = North_AmericaArray[3]
  form4.lastElementChild.id = North_AmericaArray[3]
  form4.firstElementChild.innerText = questionString + 'Belize';
  form5.firstElementChild.nextElementSibling.id = North_AmericaArray[4]
  form5.lastElementChild.id = North_AmericaArray[4]
  form5.firstElementChild.innerText = questionString + 'Canada';
  form6.firstElementChild.nextElementSibling.id = North_AmericaArray[5]
  form6.lastElementChild.id = North_AmericaArray[5]
  form6.firstElementChild.innerText = questionString + 'Cuba';
  form7.firstElementChild.nextElementSibling.id = North_AmericaArray[6]
  form7.lastElementChild.id = North_AmericaArray[6]
  form7.firstElementChild.innerText = questionString + 'El Salvador';
}

function AfricaClick(e) {
  e.preventDefault();
  modal.className = 'Africa';
  form1.firstElementChild.nextElementSibling.id = AfricaArray[0]
  form1.lastElementChild.id = AfricaArray[0]
  form1.firstElementChild.innerText = questionString + 'Egypt';
  form2.firstElementChild.nextElementSibling.id = AfricaArray[1]
  form2.lastElementChild.id =  AfricaArray[1]
  form2.firstElementChild.innerText = questionString + 'Kenya';
  form3.firstElementChild.nextElementSibling.id = AfricaArray[2]
  form3.lastElementChild.id = AfricaArray[2]
  form3.firstElementChild.innerText = questionString + 'Ethiopia';
  form4.firstElementChild.nextElementSibling.id = AfricaArray[3]
  form4.lastElementChild.id = AfricaArray[3]
  form4.firstElementChild.innerText = questionString + 'Mozambique';
  form5.firstElementChild.nextElementSibling.id = AfricaArray[4]
  form5.lastElementChild.id = AfricaArray[4]
  form5.firstElementChild.innerText = questionString + 'Burkina Faso';
  form6.firstElementChild.nextElementSibling.id = AfricaArray[5]
  form6.lastElementChild.id = AfricaArray[5]
  form6.firstElementChild.innerText = questionString + 'Nigeria';
  form7.firstElementChild.nextElementSibling.id = AfricaArray[6]
  form7.lastElementChild.id = AfricaArray[6]
  form7.firstElementChild.innerText = questionString + 'Madagascar';
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

Europe.addEventListener('click', function(e) {
  e.preventDefault()
  if (isModalDisplayed()) {
    if(isRulesDisplayed()){
      EuropeClick(e);
        addEventListenersToInput(EuropeSubmit)
    }
  }
});

Asia_Middle_East.addEventListener('click', function(e) {
  e.preventDefault()
  if (isModalDisplayed()) {
    if(isRulesDisplayed()) {
      Asia_Middle_EastClick(e);
        addEventListenersToInput(Asia_Middle_EastSubmit)
    }
  }
});

South_America.addEventListener('click', function(e) {
  e.preventDefault()
  if (isModalDisplayed()) {
    if (isRulesDisplayed()) {
      South_AmericaClick(e);
        addEventListenersToInput(South_AmericaSubmit)
    }
  }
});

Oceania.addEventListener('click', function(e) {
  e.preventDefault()
  if (isModalDisplayed()) {
    if (isRulesDisplayed()) {
      OceaniaClick(e);
        addEventListenersToInput(OceaniaSubmit)
    }
  }
});

North_America.addEventListener('click', function(e) {
  e.preventDefault()
  if (isModalDisplayed()) {
    if (isRulesDisplayed()) {
      North_AmericaClick(e);
        addEventListenersToInput(North_AmericaSubmit)
    }
  }
});

Africa.addEventListener('click', function(e) {
  e.preventDefault()
    if (isModalDisplayed()) {
      if (isRulesDisplayed()) {
        AfricaClick(e);
          addEventListenersToInput(AfricaSubmit)
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
      cont. Remember each continent click event (i.e. AfricaClick) changes the
      modal className to a string of the respective continent that is clicked.
  3. assigns the modal element to the variable modal
  4. Changes the modal className to hide (to hide, from a continent name)
  5. for each userInput blank spaces that takes user input...
  6. change the value to a blank string. This makes it so that values entered
      into the input area don't remain in the boxes if the user clicks cancel
      button.
  7. Lastly, run the removeEventListenersFromInput function that uses the contFuncMap
      dictionary to extract one of the continent Submit functions (i.e. AfricaSubmit)
      and that removes the event listeners from the all of the submit buttons so that
      they don't pile up on each other and screw up the counter.
*/

var contFuncMap = {
  'Oceania': OceaniaSubmit,
  'North_America': North_AmericaSubmit,
  'South_America': South_AmericaSubmit,
  'Africa': AfricaSubmit,
  'Asia_Middle_East': Asia_Middle_EastSubmit,
  'Europe': EuropeSubmit,
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

$(function() {
  var ids = '';
  var $continents = $('.continentList');

  $continents.on('mouseover', function() {
    ids = this.id;
    $('span').remove();
    $(this).after(' <span>' + ids + '</span>');
  });

  $continents.on('mouseout', function() {
    $('span').remove();
  })
});
