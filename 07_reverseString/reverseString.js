const reverseString = function(string) {
    let inparray = string.split('');
    let outarray = inparray.reverse();
    let reversed = outarray.join('');
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
