// Creating an Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

// Array Methods
fruits.push("Orange");
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.shift();
console.log("After shift:", fruits);

fruits.unshift("Strawberry");
console.log("After unshift:", fruits);



// array basics

let a= new Array(1,2,3,4);
console.log(a);
let a2=[1,2,3,4,5,6,7];
console.log(a2);
a2.push(4,6,7,8);
console.log(a2);

a2.push({name:"a",class:"1st"}); // push object in array

console.log(a2);


for(let i=0;i<a2.length;i++){
    console.log("element",i+1 ,"---",a2[i]);
}



// var num =[2,3,4,5,6,7]
// var num2 = num.map(func)

// function func(n)

// {
// return n+1
// }
// console.log(num2)


var num =[2,3,4,5,6,7]
var num2 = num.map((n)=>{return n+1})
console.log(num2)


{var num =[2,3,4,5,6,7]
var num2 = num.map((n,i)=>{return n+i})
console.log(num2)}