let add = 1 + 80;
let subtract = 20 - 5;
let multiply = 5 * 9;
let divide = 60 / 2;

add = function (a, b) {
    let add = a + b;
    return add;
}

subtract = function (a, b) {
    let subtract = a - b;
    return subtract;
}

multiply = function (a, b) {
    let multiply = a * b;
    return multiply;
}

divide = function (a, b) {
    let divide = a / b;
    return divide;
}


function increment(n){
    n++;
    return n;
}

console.log(increment);

function decrement(n){
    n--;
    return n;
}

console.log(decrement);

function makeInt(n) {
    let parse = parseInt(n, 10);
    return parse;
}

console.log(makeInt);

function preserveDecimal(n) {
    let parse = parseFloat(n, 10);
    return parse;
}

console.log(preserveDecimal);