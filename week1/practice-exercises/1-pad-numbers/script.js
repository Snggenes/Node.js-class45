import padLeft from './padLeft.js'


let numbers = [ "12", "846", "2", "1236" ];

numbers.forEach(num=>{
  console.log(padLeft(num,5,'_'));
})
