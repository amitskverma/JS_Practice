// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);
console.log("Increment:", ++a);
console.log("Decrement:", --b);

// Comparison Operators
console.log("Equal:", a == b);
console.log("Not Equal:", a != b);
console.log("Strict Equal:", a === b);
console.log("Strict Not Equal:", a !== b);
console.log("Greater Than:", a > b);
console.log("Less Than:", a < b);
console.log("Greater Than or Equal:", a >= b);
console.log("Less Than or Equal:", a <= b);

// Logical Operators
let x = true;
let y = false;
console.log("AND:", x && y);
console.log("OR:", x || y);
console.log("NOT:", !x);

// Assignment Operators
let c = 10;
c += 5;
console.log("Addition Assignment:", c);
c -= 3;
console.log("Subtraction Assignment:", c);
c *= 2;
console.log("Multiplication Assignment:", c);
c /= 4;
console.log("Division Assignment:", c);
c %= 3;
console.log("Modulus Assignment:", c);

// Bitwise Operators
let d = 5;  // 0101 in binary
let e = 3;  // 0011 in binary
console.log("Bitwise AND:", d & e);  // 0001
console.log("Bitwise OR:", d | e);   // 0111
console.log("Bitwise XOR:", d ^ e);  // 0110
console.log("Bitwise NOT:", ~d);     // 1010
console.log("Left Shift:", d << 1);  // 1010
console.log("Right Shift:", d >> 1); // 0010