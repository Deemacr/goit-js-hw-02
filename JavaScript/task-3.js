const findLongestWord = function (string) {
    let stringArray = string.split(" ")
    let count = 0
    let word
    for (let i = 0; i < stringArray.length; i++) {
        if (count < stringArray[i].length) {
            count = stringArray[i].length;
            word = stringArray[i];
        }
    }
    return word
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you')); 