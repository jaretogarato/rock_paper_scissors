/*jslint browser: true*/
/*jslint white: true */
/*jslint plusplus: true */
/*global $, jQuery, document, console*/

var choices = ['Rock', 'Paper', 'Scissors'];
var tally = {'Played': 0, 'Wins': 0, 'Losses': 0, 'Ties':0};
var i;

var rockButton = document.getElementById('rock');
var paperButton = document.getElementById('paper');
var scissorsButton = document.getElementById('scissors');

// console.log(tally.Played);

function seeWhoWins (playerChoice) {
  "use strict";
  tally.Played += 1;
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  switch (computerChoice) {
    case "Rock":
      switch (playerChoice) {
        case "Rock":
          tally.Ties += 1;
          break;
        case "Paper":
          tally.Wins += 1;
          break;
        case "Scissors":
          tally.Losses += 1;
          break;
      }
      break;
    case "Paper":
      switch (playerChoice) {
        case "Rock":
          tally.Losses += 1;
          break;
        case "Paper":
          tally.Ties += 1;
          break;
        case "Scissors":
          tally.Wins += 1;
          break;
      }
      break;
    case "Scissors":
      switch (playerChoice) {
        case "Rock":
          tally.Wins += 1;
          break;
        case "Paper":
          tally.Losses += 1;
          break;
        case "Scissors":
          tally.Ties += 1;
          break;
      }
      break;
  }
  document.getElementById("yourPick").innerHTML = "You chose: " + playerChoice;
  document.getElementById("computerPick").innerHTML = "The computer chose: " + computerChoice;
  document.getElementById("played").innerHTML = tally.Played;
  document.getElementById("won").innerHTML = tally.Wins;
  document.getElementById("lost").innerHTML = tally.Losses;
  document.getElementById("tied").innerHTML = tally.Ties;
}

rockButton.addEventListener('click', function() {
  "use strict";
  seeWhoWins("Rock");
  // console.log(tally.Played);
});

paperButton.addEventListener('click', function() {
  "use strict";
  seeWhoWins("Paper");
});

scissorsButton.addEventListener('click', function() {
  "use strict";
  seeWhoWins("Scissors");
});

// var inputs = document.getElementsByClassName('input');
//
// for (i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener('keyup', function(e) {
//     "use strict";
//     var tag = e.target.dataset.tag;
//     document.getElementById(tag).innerText = e.target.value;
//   });
// }
