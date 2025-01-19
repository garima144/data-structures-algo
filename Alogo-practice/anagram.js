function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
      return false;
    }
    let obj1 = {}
    let obj2 = {}
    for(let i=0; i<str1.length; i++){
     if(obj1[str1[i]]) {
         obj1[str1[i]] = obj1[str1[i]] + 1 
     }
      else{
          obj1[str1[i]] = 1
      }
    }
     for(let i=0; i<str2.length; i++){
     if(obj2[str2[i]]) {
         obj2[str2[i]] = obj2[str2[i]] + 1 
     }
      else{
          obj2[str2[i]] = 1
      }
    }
  
      let len = str1.length > str2.length ? str1.length : str2.length;
      console.log(len)
      
    for(let i=0; i<len; i++){
        console.log(obj1[str1[i]], obj2[str1[i]])
        if(obj1[str1[i]] !==obj2[str1[i]]){
            return false
        }
    }
    console.log(obj1, obj2)
    return true
  }
  
  validAnagram("abc", "cba")