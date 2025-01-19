function largestSumOfN(params,num) {
    let tempSum = 0;
    let maxSum =0;

    for(let i=0; i<num; i++){
        tempSum = tempSum + params[i];
    }
    maxSum = tempSum

    for(let j=num; j<params.length; j++ ){
        tempSum = tempSum - params[j-num] + params[j];
        maxSum = Math.max(tempSum,maxSum)
    }
    console.log(maxSum)
}

largestSumOfN([1,2,3,4,5,8,11,20],3)