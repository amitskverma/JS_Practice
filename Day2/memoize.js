
function add(n){
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum += i;
    }
    return sum;
}

const memoize = (fn) => {
    let cache = {};
    return function(...args) {
       let n = args[0];
        if (n in cache) 
            {
            console.log('cache');
            return cache[n];    
        }    
        else {
           console.log('Calculating...');
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    };
}

const memoizedAdd = memoize(add);   

console.time('First call');
console.log(memoizedAdd(10)); // Calculating... 

console.timeEnd('First call');


console.time('2nd call');
console.log(memoizedAdd(10)); // Calculating... 

console.timeEnd('2nd call');