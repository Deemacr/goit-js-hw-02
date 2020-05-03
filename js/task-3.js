const findLongestWord = function (string) {
    let stringArray = string.split(" ")
    let word = "";
    for (let i = 0; i < stringArray.length; i += 1) {
        if (word.length < stringArray[i].length) {
            word = stringArray[i];
        }
    }
    return word
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you')); 