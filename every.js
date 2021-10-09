//* Using the every() method 

// With a for()
let numbers = [1, 3, 5];

let forLoop = num => {
    let result = true;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 0) {
            result = false;
            break;
        }
    }
    return result;
}
console.log(result(numbers));
