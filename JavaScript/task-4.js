const formatString = function (string) {
    let quote
    if (string.length <= 40) {
        return quote = string
    } else {
        string = string.split("")
        string.splice(40 - 1, string.length, '...')
        string = string.join('')
        return quote = string
    }
    console.log(quote)
};


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
