function longestUniqueSubString(str){
    let max = 0;
    let start = 0;
    let charMap = {} //save the index of character

    for(let i=0; i<str.length; i++){
        let s = str[i];
        if(charMap[s] !== undefined && charMap[s] >= start){
            start = charMap[s] + 1;
        }
        charMap[s] = i;

        max = Math.max(max, i - start + 1);
    }
}
// abccbae
// start = 0, max = 0, s = a, => if(false); charMap{a:0}; max = (0, 0-0+1): 1
// start = 0, max = 1, s = b, => if(false); charMap{a:0, b:1}; max=(1, 1-0+1): 2
// start = 0, max = 2, s = c, => if(false); charMap{a:0, b:1, c:2}; max=(2, 2-0+1): 3
// start = 0, max = 3, s = c, => if(true) => start: 2+1: 3 ; charMap{a:0, b:1, c:3}; max=(3, 3-3+1): 3
// start = 3, max = 3, s = b, => if(true) => start: 1+1: 2; charMap{a:0, b:4, c:3}; max=(3, 4-2+1): 3
// start = 2, max = 3, s = a, => if(true) => start: 0+1: 1; charMap{a:5, b:4, c:3}; max=(3, 5-1+1):


// [0,1,0,0,1,1,0,1] 3