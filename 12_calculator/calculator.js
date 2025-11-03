const add = function(a,b,...args) {
  let num = a+b;
  for (let n of args){
    num = num + n;
  }
  return num;
	
};

const subtract = function(a,b,...args) {
  let num = a-b;
  for (let n of args){
    num = num - n;
  }
  return num;
	
};

const sum = function(array) {
  return array.reduce((addition,item,index,array)=>{
    addition += item;
    return addition;
  },0)
};

const multiply = function(array) {
  return array.reduce((prod, item, array, index)=>{
    prod *= item;;
    return prod;
  },1)

};

const power = function(a,b,...args) {
  let num = a**b;
  for (let n of args){
    num = num**n;
  }
  return num;
	
};

const factorial = function(a) {
  if(a==0){
    return 1;
  }
  a = a*factorial(a-1);
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
