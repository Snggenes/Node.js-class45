const leftPad = require('left-pad')

let numbers = [ "12", "846", "2", "1236" ];

numbers.forEach(num=>{
  console.log(leftPad(num,8,'_'));
})
