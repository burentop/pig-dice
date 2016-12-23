function Player(name) {
  this.name = name;
  this.finalScore = 0;
  this.roundScore = 0;
}

Player.prototype.randomRoll = function() {
  var roll = Math.floor(Math.random() * 6) + 1;
  this.roundScore += roll;
  return roll;
}

$(document).ready(function() {
  $("form#new-game").submit(function(event) {
    event.preventDefault();
    var playerOneName = $("#player-one").val();
    var playerTwoName = $("#player-two").val();
    var playerOne = new Player(playerOneName);
    var playerTwo = new Player(playerTwoName);
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
      var playerOneRoll = playerOne.randomRoll();
      $("#player-one-roll-display").text(playerOneRoll);
      $("#player-one-round-score").text(playerOne.roundScore);
    });
  });
});
