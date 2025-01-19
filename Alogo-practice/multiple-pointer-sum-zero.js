function  multiplePointer(params) {
    for(let i=0, j=params.length-1; i<params.length/2; i++){
        if(params[i] + params[j] !== 0) return false;
        else j--
    }
    return true
}

multiplePointer([-4,-3,-2,-1,1,2,3,4])