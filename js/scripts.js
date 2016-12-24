function Player(name) {
  this.name = name;
  this.finalScore = 0;
  this.roundScore = 0;
}

Player.prototype.randomRoll = function(numDice) {
  if (numDice === 1) {
    var roll = Math.floor(Math.random() * 6) + 1;
    if (roll > 1) {
      this.roundScore += roll;
    } else {
      this.roundScore = 0;
      return 1;
    }
  } else {
    var roll1 = Math.floor(Math.random() * 6) + 1;
    var roll2 = Math.floor(Math.random() * 6) + 1;
    if (roll1 > 1 && roll2 > 1) {
      this.roundScore += (roll1 + roll2);
    } else {
      this.roundScore = 0;
      return 1;
    }
  }
  return roll1 + roll2;
}

Player.prototype.addRoundToFinal = function() {
  this.finalScore += this.roundScore;
  this.roundScore = 0;
}

var checkScores = function(player1, player2) {
  if (player1.finalScore >= 100) {
    $(".during-play").toggle();
    $("#winner").text(player1.name);
    $(".after-play").show();
  } else if (player2.finalScore >= 100) {
    $(".during-play").toggle();
    $("#winner").text(player2.name);
    $(".after-play").show();
  }
}

var toggleButtons = function() {
  $(".player-one-buttons").toggle();
  $(".player-two-buttons").toggle();
}

$(document).ready(function() {
  $("form#new-game").submit(function(event) {
    event.preventDefault();
    var playerOneName = $("#player-one").val();
    var playerTwoName = $("#player-two").val();
    var playerOne = new Player(playerOneName);
    var playerTwo = new Player(playerTwoName);
    var numberOfDice = parseInt($("input:radio[name=dice]:checked").val());
    $(".player-names").toggle();

    $("#player-one-heading").text(playerOne.name);
    $("#player-two-heading").text(playerTwo.name);
    $("#player-one-round-score").text(playerOne.roundScore);
    $("#player-two-round-score").text(playerOne.roundScore);
    $("#player-one-total-score").text(playerOne.finalScore);
    $("#player-two-total-score").text(playerTwo.finalScore);
    $(".during-play").show();

    $("form#player-one-roll").submit(function(event) {
      event.preventDefault();
      var playerOneRoll = playerOne.randomRoll(numberOfDice);
      $("#player-one-roll-display").text(playerOneRoll);
      if (playerOneRoll === 1) {
        $("#player-one-round-score").text(0);
        toggleButtons();
        checkScores(playerOne, playerTwo);
      } else {
        $("#player-one-round-score").text(playerOne.roundScore);
      }
    });
    $("form#player-two-roll").submit(function(event) {
      event.preventDefault();
      var playerTwoRoll = playerTwo.randomRoll(numberOfDice);
      $("#player-two-roll-display").text(playerTwoRoll);
      if (playerTwoRoll === 1) {
        $("#player-two-round-score").text(0);
        toggleButtons();
        checkScores(playerOne, playerTwo);
      } else {
        $("#player-two-round-score").text(playerTwo.roundScore);
      }
    });
    $("form#player-one-hold").submit(function(event) {
      event.preventDefault();
      playerOne.addRoundToFinal();
      $("#player-one-round-score").text(playerOne.roundScore);
      $("#player-one-total-score").text(playerOne.finalScore);
      toggleButtons();
      checkScores(playerOne, playerTwo);
    });
    $("form#player-two-hold").submit(function(event) {
      event.preventDefault();
      playerTwo.addRoundToFinal();
      $("#player-two-round-score").text(playerTwo.roundScore);
      $("#player-two-total-score").text(playerTwo.finalScore);
      toggleButtons();
      checkScores(playerOne, playerTwo);
    });
  });
});
