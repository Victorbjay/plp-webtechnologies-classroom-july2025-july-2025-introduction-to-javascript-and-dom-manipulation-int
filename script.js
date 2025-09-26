/*****************************************************
 * Week 5 Assignment: Mastering JavaScript Fundamentals
 *****************************************************/

/* =====================================================
   Part 1 – Variables & Conditionals
   ===================================================== */
let userName = prompt("Enter your name:") || "Guest";  // variable declaration
let userAge = parseInt(prompt("Enter your age:"), 10); // another variable

// Simple conditional
if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

/* =====================================================
   Part 2 – Custom Functions
   ===================================================== */
// Function 1: Personalized greeting
function greetUser(name) {
  return `Hello, ${name}! Welcome to Week 5.`;
}

// Function 2: Generate an array of numbers up to a limit
function generateNumbers(limit) {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }
  return numbers;
}

/* =====================================================
   Part 3 – Loops
   ===================================================== */
// Loop Example 1: For loop counting down
for (let i = 5; i > 0; i--) {
  console.log(`Countdown: ${i}`);
}

// Loop Example 2: While loop doubling a number until it passes 100
let num = 1;
while (num <= 100) {
  num *= 2;
  console.log(`While loop value: ${num}`);
}

/* =====================================================
   Part 4 – DOM Interactions
   (At least 3 interactions)
   ===================================================== */
const welcomeText = document.getElementById("welcome-text");
const greetBtn = document.getElementById("greet-btn");
const colorBtn = document.getElementById("color-btn");
const listBtn = document.getElementById("list-btn");
const numberList = document.getElementById("number-list");

// 1️⃣ Change text when clicking "Greet Me"
greetBtn.addEventListener("click", () => {
  welcomeText.textContent = greetUser(userName);
});

// 2️⃣ Toggle background color each click
colorBtn.addEventListener("click", () => {
  document.body.classList.toggle("alt-background");
});

// 3️⃣ Dynamically generate a list of numbers on click
listBtn.addEventListener("click", () => {
  numberList.innerHTML = ""; // clear previous
  const nums = generateNumbers(10);
  nums.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    numberList.appendChild(li);
  });
});

// Optional: define the alt-background style on the fly
const style = document.createElement("style");
style.textContent = `
  .alt-background { background: #e0ffe0; }
`;
document.head.appendChild(style);
