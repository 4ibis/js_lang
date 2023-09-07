// Prepare example
var A = () => (console.log("calc", "a"), "a");
var B = () => (console.log("calc", "b"), "b");
var True = true;
var False = false;

// Conditional execution of code with _if/else_
console.log("Expect `a`");
if (True) {
  A();
} else {
  B();
}

console.log("Expect `b`");
if (False) {
  A();
} else {
  B();
}

// Conditional (ternary) operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#conditional_ternary_operator

console.log("Ternary operator:");
console.log("Expect `a`", True  ? A() : B());
console.log("Expect `b`", False ? A() : B());

// Simulate ternary with logical `Logical AND` + `Logical OR`

console.log("Simulate ternary with logical `Logical AND` + `Logical OR`");
console.log("Expect `a`", True  && A() || B());
console.log("Expect `b`", False && A() || B());
