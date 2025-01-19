function Person(name) {
    this.myname = 'nemo'
}

Person.prototype.getName = function name(params) {
 console.log(this.myname);   
}

const person1 = new Person("garima");
console.log(person1);

const person2 = Object.create(Person.prototype);
person2.myname ='My name is garima';

console.log(person2);
// console.log(person2.myname);
console.log(person2.getName());

console.log(person1.__proto__== person2.__proto__);
const obj = Object.assign({}, person2);
console.log(obj.getName());
