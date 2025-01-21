// normal function
// a,b ---> parameter
function fun(a,b)
{
    var sum =a+b;
    return sum;
    //console.log("sum",sum);
}
console.log("sum ----- ",fun(4,8))
//fun(4,8)  4,8 arrument passsed


// anonymous function

let fun2 = function(a,b){
    var sum =a+b;
    return sum;
    //console.log("sum",sum);
}
console.log("sum ----- ",fun2(4,8))


// immediate inwoke function
let fun3 = function(a,b){
    var sum =a+b;
    return sum;
    //console.log("sum",sum);
}(4,8)
console.log("sum ----- ",fun3)


// Arrow function 

let fun4=(a,b)=>{
    var sum=a+b;
    return sum
}
console.log("sum ----- ",fun4(4,8))



// 
// 
// function funt()
// {
//     function f(a,b){
//         const sum=a+b
//         return sum
//     }
//  return f
// }
// var numsum = funt()
// console.log( numsum(2,4))


function funt()
{
   return function(a,b){
        const sum=a+b
        return sum
    }
 
}
var numsum = funt() // numsum call f function in directly
console.log( numsum(2,4))

function funt2()
{
    var a=10;
    return function(b){
        const sum=a+b
        return sum
    }
}
var numsum = funt2()

console.log(numsum(4))