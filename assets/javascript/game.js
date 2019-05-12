var words = [
    "bones",
    "walks",
    "treats",
    "cheese"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Press any letter key on your keyboard to guess!");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}


alert(answerArray.join(" "));
alert("Whoof Whoof, Great Job! The answer was " + word + "!");