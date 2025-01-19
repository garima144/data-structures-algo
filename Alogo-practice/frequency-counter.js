function sameFrequency(m,n){
  // good luck. Add any arguments you deem necessary.
 let obj = {}
 let n1 = {}
    m= m.toString();
    n= n.toString();
 for(let i=0; i<m.length; i++){
     console.log(m[i])
     if(obj[m[i]]){
       obj[m[i]] =  ++obj[m[i]]
     }else {
        obj[m[i]] =  1
     }
 }
    console.log(obj)
 for(let i=0; i<n.length; i++){
     console.log(obj,"obj")
     if(obj[n[i]]>0){
         obj[n[i]]--
     }else {
       return false
     }
 }
 return true
}
// sameFrequency(182,281)
// sameFrequency(34,14)
sameFrequency(3589578, 5879385)
sameFrequency(22,222) 