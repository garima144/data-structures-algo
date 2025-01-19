function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
    // console.log(str.length === 1)
  if(str.length === 1) return true;
  if(str[0]=== str[str.length-1]){
      // console.log(str.slice(1,str.length-1))
     return isPalindrome(str.slice(1,str.length-1))
  }else return false
}

isPalindrome('tacocat')
// isPalindrome('amanaplanacanalpandemonium') // false