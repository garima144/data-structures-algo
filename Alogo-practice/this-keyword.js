var globalVariable = "Global Variable";

const myObject = {
  property: "Object Property",

  // Using arrow function as an object method
  myMethod: () => {
    console.log(this.globalVariable); // 'this' refers to the 'this' of the surrounding scope (global object)
  }
};

myObject.myMethod(); // Output: "Global Variable"

const Arrow = () => {
    console.log(this);
}

Arrow();
function subjects(){
    const mySubjects ={
        subjects: ["Math"],
        listSubjects: () => {
            console.log(this, "this");
        }
    }
    mySubjects.listSubjects()
}
subjects()

console.log(this, "this in global");
const arrowFunction = () => {
  console.log(this); // In this case, this refers to the global object (e.g., window in a browser)
};

arrowFunction(); // Invoking the arrow function in the global scope
