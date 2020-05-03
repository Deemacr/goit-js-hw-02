let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Enter a number");

    if (input === null) {
        break;
    }

    input = Number(input);
    const isNumber = Number.isNaN(input)

    if (isNumber) {
        alert('It is not a number, try again')
        continue
    }
    numbers.push(input)
}

for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i]
}
console.log(numbers)
alert(`Total sum is ${total}`);