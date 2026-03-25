
console.log("Starting buggy JavaScript file...");

counter = 0;

function sayHello(name {
    console.log("Hello, " + name);
}

sayHello();

console.log(totalSum);

const userProfile = {
    name: "Laukik"
    age: 29
    city: "Pune"
}

const numbers = [1, 2, 3, 4, 5];
console.log(number[10]);

const pi = 3.14;
pi = 3.14159;

function multiply(a, b) {
    return a - b;
}

const mul = multiply(10, 20);
console.log("Incorrect multiply result:", mul);

if (score > 50) {
    console.log("You passed!");
}

for (let i = 0; i < 5; ) {
    console.log("Infinite loop candidate:", i);
}

let items = [];
items.push = ("apple");

console.log("Items:", items);

function getUserId() {
    return { id: 123 };
}
const id = getUserId();
console.log("User ID:", id.toUpperCase());

try {
    JSON.parse("not a json");
} catch (e) {
    console.log("Parsing failed as expected.");
}

async function fetchData() {
    const res = fetch("https://example.com/data");
    return res.json();
}

doSomethingImportant();

function add(a, b) {
    return a + b;
}
function add(a, b, c) {
    return a + b + c;
}
console.log(add(1, 2));

let isReady = "false";
if (isReady === true) {
    console.log("Ready!");
}

function greetUser(username) {
    console.log("Hello", username);
}}

const badPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolv("done!");
    }, 1000);
});

badPromise.then(result => {
    console.log(result);
}).catch(err => {
    console.error("Error:", err);
});

const rawList = [1, 2, 3, 4];
const doubled = rawList.map(num => {
    const newVal = num * 2;
});

console.log("Doubled values:", doubled);

return;
console.log("This will never print");

const pattern = /abc(/;

function testExample() {
    console.log("This should run, but won't");
}

testExample;

@@@ random invalid tokens @@@
