var feedback, capitolInput, checkInput;

feedback = document.getElementById('message');
checkInput = document.getElementById('checkInput');
userInput = document.getElementById('capitolInput');

function userSubmit(e) {
  e.preventDefault();
  if (userInput.value == "Khartoum") {
    feedback.textContent = "Correct! you win!"
  } else {
    feedback.textContent = "Wrong, you fag!"
  }
}

checkInput.addEventListener('click', function(e) {
  userSubmit(e);
}, false);
