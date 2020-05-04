let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Enter a number");

    if (input === null) {
        break;
    }

    input = Number(input);
    const isNumber = Number.isNaN(input);

    if (isNumber) {
        alert('It is not a number, try again');
        continue;
    }
    numbers.push(input);
}

if (numbers.length == 0) {
    alert('There is no numbers in array');
} else {
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    alert(`Total sum is ${total}`);
}
console.log(numbers);
