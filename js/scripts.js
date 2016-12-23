function Player(name) {
  this.name = name;
  this.score = 0;
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
    $("#player-one-round-score").text(0);
    $("#player-two-round-score").text(0);
    $("#player-one-total-score").text(playerOne.score);
    $("#player-two-total-score").text(playerTwo.score);
    $(".during-play").show();
  });
});
