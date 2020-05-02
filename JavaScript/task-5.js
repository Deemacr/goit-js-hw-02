const checkForSpam = function (message) {
    arrayedMessage = message.toLowerCase();
    arrayedMessage = arrayedMessage.split(" ")
    return arrayedMessage.includes("sale" || "spam");

};


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true