
function demo() {
  let department = "Engineering";
    console.log("Hello, World!");
}
let department = "Finance";
demo();
console.log(department);


function sayHello(name) {
console.log("Hello, " + "  " + name[1]);
}
sayHello(["John", "Mike", "Jane"]);

// Function Declaration

function multiply2(a, b) {
    //var c =5 ;
    return a * b;
}
//console.log(c);
console.log(multiply2(2,2));

//arrow function    
const multiply3 = (a, b) => a * b;
console.log(multiply3(2, 3));

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John"));

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 2));








