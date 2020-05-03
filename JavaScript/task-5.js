const checkForSpam = function (message) {
    message = message.toLowerCase();
    message = message.replace(/[^a-zA-Z ]/g, "")
    arrayedMessage = message.split(" ")
    if (arrayedMessage.includes("spam") || arrayedMessage.includes("sale")) {
        return true
    } else {
        return false
    }

};




console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
