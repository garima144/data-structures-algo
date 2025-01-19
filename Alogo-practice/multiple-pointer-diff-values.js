function differentvalues(params) {
    let count =1
    for(let i=0; i<params.length-1; i++){
        if(params[i] !== params[i+1] ) count++;
    }
    return count;
}

differentvalues([2,1,1,3]) //3
// differentvalues([2,1,1,3,4,5]) //5
// differentvalues([2,1,1,3,4,4]) //4