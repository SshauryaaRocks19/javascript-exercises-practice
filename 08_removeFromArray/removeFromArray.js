const removeFromArray = function(arr,...nums) {
    const newArray = [];
    arr.forEach((item)=>{
        if(!nums.includes(item)){
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
