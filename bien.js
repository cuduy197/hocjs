// từ khóa khởi tạo biến là var , let, const
var myVar;
console.log(myVar);
// Các kiểu biến trong es
//String
var stringVar = " đang học js ";
myVar = "Duy" + stringVar; //es5
console.log(myVar);
console.log(typeof myVar);
myVar = `Duy 2 ${stringVar}`; //es6
console.log(myVar);
console.log(typeof myVar);

// Number
var myNumber = 0;

console.log(typeof myNumber);
myNumber = 0.1 + 0.2;
console.log(myNumber);

console.log(10 / 0);

myNumber = NaN; //Not a number
myNumber = Infinity;
console.log(typeof myNumber);

// Object
// {property: value}
var myObj = {
  name: "Duy",
  age: 20,
  learn: {
    js: "still learing",
    css: "still"
  },
  //Method
  sayHello: function hello() {
    console.log("HELLO");
  }
};
console.log(myObj.name);
console.log(myObj["name"]);
console.log(myObj.age);
console.log(`${myObj.name} ${myObj.learn.js}`);

console.log(typeof myObj);

//Function
//es5
function myFunc(x) {
  console.log(typeof x);
  return "hello";
}

myFunc(myObj);
console.log(myFunc());

// call method in object
console.log(myObj.sayHello(3));

//Boolean
var myBol = true; // false
console.log(typeof myBol);

// string, number, object, boolean, function

// var es5
// let const es6

// Mảng Array [value,value]

var myArr = [
  "1",
  0,
  {},
  function hello() {
    return "hello";
  }
];

// index , Array[index]

console.log(myArr.length);

console.log(myArr);

console.log(typeof myArr);

console.log(Math.floor(Math.random() * 10));
