// Part 1: JavaScript Basics

// 1. Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "traveling"];
let person = {
    name: "John",
    age: 25,
    isStudent: true
};

// Logging variables to console with their types
console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is student: " + isStudent + " (Type: " + typeof isStudent + ")");
console.log("Hobbies: " + hobbies + " (Type: " + typeof hobbies + ")");
console.log("Person Object: ", person, " (Type: " + typeof person + ")");

// 2. Operators (Simple Calculator Function)
document.getElementById('calculate').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('calc-result').textContent = "Please enter valid numbers.";
        return;
    }

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 === 0) {
            document.getElementById('calc-result').textContent = "Error: Division by zero!";
            return;
        }
        result = num1 / num2;
    }

    document.getElementById('calc-result').textContent = "Result: " + result;
});

// 3. Functions (greetUser function)
function greetUser(name) {
    return "Hello, " + name + "! Welcome to JavaScript!";
}

// Calling the function and displaying the greeting
let greetingMessage = greetUser("Alice");
document.body.innerHTML += "<p>" + greetingMessage + "</p>";

// Part 2: JavaScript Control Structures

// 4. If Statements (Check if user can vote)
document.getElementById('check-vote').addEventListener('click', function() {
    let ageForVoting = parseInt(document.getElementById('age').value);
    if (isNaN(ageForVoting)) {
        document.getElementById('voting-result').textContent = "Please enter a valid age.";
        return;
    }
    if (ageForVoting >= 18) {
        document.getElementById('voting-result').textContent = "You are eligible to vote!";
    } else {
        document.getElementById('voting-result').textContent = "You are not eligible to vote.";
    }
});

// 5. Loops (Display numbers from 1 to 10)
document.getElementById('show-numbers').addEventListener('click', function() {
    let ol = document.getElementById('number-list');
    ol.innerHTML = ''; // Clear previous list
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.textContent = i;
        ol.appendChild(li); // Add list items to the ordered list
    }
});

// Part 3: Introduction to the DOM

// 6. Modifying HTML Structure
document.querySelector("h1").textContent = "JavaScript in Action!"; // Change the text of the heading

// 7. Selecting and Modifying HTML Elements
let dynamicContent = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph); // Add new paragraph to the dynamic-content div
