const sumAll = function(a,b) {
    let arr = [];

    if(a<0 || b<0 || isNaN(a) || isNaN(b) || !Number.isInteger(a)|| !Number.isInteger(b) ){
        return "ERROR";
    }


    if (a>b){
        [b, a] = [a, b];
    }

    for(i=a;i<=b;i++){
        arr.push(i);
    }

    let sum = arr.reduce((accumulator, item)=>{
        return accumulator+item;
    },0)
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
