class Person {
    static age =20;
    name ="garima"
}

class Ga extends Person{
    gender = "female";
    myage = super.age
}

let me = new Ga();

console.log(me.myage)