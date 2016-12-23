function Account(name, deposit) {
  this.name = name;
  this.balance = deposit;
}

Account.prototype.alterBalance = function(deposit, withdrawel) {
  if (deposit) {
    this.balance += deposit;
  }
  if (withdrawel) {
    this.balance -= withdrawel;
  }
  return this.balance;
}

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var submittedName = $("#new-name").val();
    var submittedInitialDeposit = parseInt($("#initial-deposit").val());

    var newAccount = new Account(submittedName, submittedInitialDeposit);
    $("#balance").text("$" + newAccount.balance.toFixed(2));

    $("#new-name").val("");
    $("#initial-deposit").val("");
    $(".alter-submit").show();

    $("form#alter-balance").submit(function(event) {
      event.preventDefault();
      var submittedDeposit = parseInt($("#new-deposit").val());
      var submittedWithdrawel = parseInt($("#new-withdrawel").val());

      newAccount.alterBalance(submittedDeposit, submittedWithdrawel);

      $("#balance").text("");
      $("#balance").text("$" + newAccount.balance.toFixed(2));
      $("#new-deposit").val("");
      $("#new-withdrawel").val("");
    });
  });


});
