function findSubstring(str, substring){
    if(str.length < substring.length) return false;
    let found = false;
    for(let i=0; i< str.length - substring.length +1; i++){
       if(str[i] === substring[0]){
        	for(let j=0; j< substring.length; j++){
                if(substring[j] === str[i++]){
        			found = true;
        		}else {
                    found = false;
                    break;
                }
         	}
       }
    }  
    if(found) return true
    else return false;
}

findSubstring("Lorem ipsum dolor sit amet.", "ame.");
