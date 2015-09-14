// Strip all whitespace and punctuation, and make everything lowercase
var punctuationLess = function(phrase) {
  var strippedPhrase = phrase.replace(/[^A-Za-z0-9-]/g,"").toLowerCase();
  return strippedPhrase;
};

// Encrypter
var encrypt = function(phrase) {
  var strippedPhrase = punctuationLess(phrase);
  var phraseLength = strippedPhrase.length;
  var width = Math.ceil(Math.sqrt(phraseLength));
  var encryptedString = "";

  for (var i = 0; i < width; i++) {
    for (var j = i; j < phraseLength; j += 4) {
      encryptedString += strippedPhrase[j];
    }
  }
  return encryptedString;
};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = rFactorial(number);

    // Populate data into number and factorialResult span field respectively
    $(".number").text(number);
    $(".factorialResult").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
