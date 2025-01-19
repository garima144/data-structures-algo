const date = new Date();
console.log(date);
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log('today is' + " " + daylist[date.getDay()])
// console.log(date.getDay());
console.log(date.getHours());
if(date.getHours() >=12) {
    console.log('PM');
}else console.log('am'); 
let hour = (date.getHours() >=12)? date.getHours()-12 : date.getHours();
if(hour == 0 && date.getMinutes() ==0 && date.getSeconds ==0){
    console.log('noon');
}
console.log(new Date());

function findAreaTriangle(s1, s2, s3){
    if(!s1 || s2|| s3) console.log("provide sides");
    console.log(s1* s2 *s3);
}
findAreaTriangle(5, 6);

function rotateString(s){
    setInterval(()=> {
        let start = s.slice(0,1);
        let rest = s.slice(1);
        console.log(start, rest);
        let newString = rest.concat(start);
        console.log(newString); 
    }, 100)

}

rotateString("w3resource")

