function reverse(str){
  // add whatever parameters you deem necessary - good luck!
    console.log(str)
  if(str.length ===1) return str;
  return str[str.length-1]+ reverse(str.slice(0,str.length-1,1))
}
reverse('awesome') // 'emosewa'