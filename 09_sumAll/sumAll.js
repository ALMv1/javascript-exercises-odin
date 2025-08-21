


const sumAll = function(start, end) {

    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if(start < 0 || end < 0) return "ERROR";


    if(start > end){
        const change = start;
        start = end;
        end = change;
    }





    let finalSum = 0
    for(let i = start; i <= end; i++){
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
