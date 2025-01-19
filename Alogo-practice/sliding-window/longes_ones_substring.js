/* 
Problem Statement: Given an array A of 0s and 1s, and an integer K, 
return the length of the longest (contiguous) subarray that contains only 1s, 
and which can be obtained by flipping at most K 0s to 1s.
*/
function longestOnesString(str, k){
    let max = 0;
    let left = 0;
    let zero_count = 0

    for(let i=0; i<arr.length; i++){
        let char = arr[i];
        if(char === 0){
            zero_count++;
        }
        if(zero_count > k){
            if(arr[left] === 0){
                zero_count = 0;
            }
            left++;
        }
        max = Math.max(max, i - left + 1)
    }
    return max;
}