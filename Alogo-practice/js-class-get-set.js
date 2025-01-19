const obj = {
  age: 20,
  name: "Garima",
  get myage(){
    console.log(this.age)
  },
  set myage(a){
      this.age = a
  }
}

obj.myage = 23

class Person{
  _age = 20;
  constructor(name){
    this.name = name
  }
  
  getage(){
    return this._age
  }
  setage (a){
    this._age = a
  }
}
let person1 = new Person("garima");
console.log(person1);
console.log(obj.myage)