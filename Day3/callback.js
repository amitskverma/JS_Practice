// callback function



function callback()
{
 console.log(' Calcualtion compeleted-resp from call back');
}


const add = function(a,b,callback){
 let sum =a+b;
  console.log("result: "+sum);
  callback();
}


add(2,3,callback);



add(2,3,()=>console.log('<---result'))


add(2,3,function(){console.log('----<---result')})