const reverseString = function(words) {

    const lettersArray = words.split("")
    const lettersArrayReversed = lettersArray.reverse()
    return lettersArrayReversed.join("")

};

// Do not edit below this line
module.exports = reverseString;
