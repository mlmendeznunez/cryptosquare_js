// Encrypter
var encrypt = function(phrase) {
  var strippedPhrase = punctuationLess(phrase);
  var phraseLength = strippedPhrase.length;
  var width = Math.ceil(Math.sqrt(phraseLength));
  var encryptedString = "";

  for (var i = 0; i < width; i++) {
    for (var j = i; j < phraseLength; j += width) {
      encryptedString += strippedPhrase[j];
    }
  }
  return insertSpaces(5, encryptedString);
};

// Strip all whitespace and punctuation, and make everything lowercase
var punctuationLess = function(phrase) {
  var strippedPhrase = phrase.replace(/[^A-Za-z0-9-]/g,"").toLowerCase();
  return strippedPhrase;
};

// Insert a space every n characters
var insertSpaces = function(n, phrase) {
  var finalPhrase = "";
  for (var i = 0; i < phrase.length; i++) {
    finalPhrase += phrase[i];
    if ((i + 1) % n == 0) {
      finalPhrase += " ";
    }
  }
  return finalPhrase;
}

$(document).ready(function() {
  $("form#cryptosquare").submit(function(event) {
    var initialPhrase = $("input#initialPhrase").val();
    var encryptedPhrase = encrypt(initialPhrase);

    // Populate data into number and factorialResult span field respectively
    $(".initialPhrase").text(initialPhrase);
    $(".encryptedPhrase").text(encryptedPhrase);

    $("#result").show();
    event.preventDefault();
  });
});
