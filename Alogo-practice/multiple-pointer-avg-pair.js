function averagePair(arr,avg){
  // add whatever parameters you deem necessary - good luck!
let addition = avg*2;
    let i=0;
    let j= arr.length-1
    while (i<j) {
        let sum = arr[i]+arr[j]
        if(sum == addition) return true
        else if(sum < addition) i++;
        else j--
    }
  
  return false
}

// averagePair([1,2,3],2.5)
// averagePair([1,3,3,5,6,7,10,12,19],8)
averagePair([-1,0,3,4,5,6], 4.1)