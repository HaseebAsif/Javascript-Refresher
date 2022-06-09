// let name = "John";
// console.log(name);

// document.getElementById("demo").innerHTML = 31 + 8;

// let city = "London";
// // alert(city);

// let a = 4;
// let b = 10;
// console.log(a + b);

// let x = (100 + 70) * 9;
// console.log(x);

// let item1 = 5;
// let item2 = 2;
// let z = item1 % item2;
// console.log(z);

// let x = 5;
// x++;
// let z = x;
// console.log(z);

// function sum() {
//   let a = 4;
//   let b = 10;
//   console.log(a + b);
// }

// sum();

// let text = "abcdefghijklmnopqrstuvwxyz";
// let length = text.length;

// console.log(length);

// let string = "Apple Banana Orange";
// let part = string.replace(Banana, Mango);
// console.log(part);

// let text = "Please visit Microsoft and Microsoft";
// let newtext = text.replace(/Microsoft/g, "Apple");
// console.log(newtext);

// let name = "Haseeb";
// let text2 = name.toLowerCase();
// console.log(text2);

// let text3 = "Hello";
// let text4 = "World";
// let text5 = text3.concat(" ", text4);
// console.log(text5);

// let text7 = "PLease locate any locate";
// let index = text7.lastIndexOf("locate");
// console.log(index);

const time = new Date().getHours();
let greeting;

// if (time < 10) {
//   greeting = "Good Morning";
// } else if (time < 20) {
//   greeting = "Good Day";
// } else {
//   greeting = "Good Evening";
// }

// console.log(greeting);

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 0:
    day = "Sunday";
    break;

  default:
    break;
}

console.log("Today is " + day);

let text = "";
for (let i = 0; i < 5; i++) {
  text += "The number is" + i;
}
console.log(text);

// let arr1 = [
//   { id: 1, product: "mouse", countInStock: 2 },
//   { id: 2, product: "keyboard", countInStock: 0 },
//   { id: 3, product: "monitor", countInStock: 0 },
//   { id: 1, product: "watch", countInStock: 4 },
// ];

// let arr2 = arr1.filter((el, index) => el.countInStock > 0);
// // output:[
// //  {id:1,product:'mouse',countInStock:2},
// //  {id:1,product:'watch',countInStock:4}
// // ]
// console.log(arr2);

// let arr1 = [
//   { id: 1, product: "mouse", countInStock: 2 },
//   { id: 2, product: "keyboard", countInStock: 1 },
//   { id: 3, product: "monitor", countInStock: 4 },
//   { id: 4, product: "watch", countInStock: 4 },
// ];

// let element = arr1.find((item, index) => item.countInStock > 3);
// console.log(element);
// // output:{id:3,product:'monitor',countInStock:4}

// let arr1 = ["MONEY", "laptop", "rug"];
// let test = arr1.includes("MONEY"); //
// console.log(test);

// order list
// let arr1 = [
//   { id: 1, product: "mouse", quantity: 2, price: 40 },
//   { id: 2, product: "keyboard", quantity: 0, price: 150 },
//   { id: 3, product: "monitor", quantity: 4, price: 500 },
//   { id: 1, product: "watch", quantity: 4, price: 1000 },
// ];

// let arr2 = arr1.map(({ product, quantity, price }) => ({
//   product,
//   total: quantity * price,
// }));
// console.log(arr2);
//  // output:[
//  // {product:'mouse',total:80 },
//  //  {product:'keyboard',total:300},
//  //  {product:'monitor',total:2000},
//  //  {product:'watch',total:4000}
//  // ]

// let arr1 = ["MONEY", "monitor", "laptop", "mouse", "laptop", "book", "laptop"];
// let el = arr1.pop(); // output:laptop
// console.log(el);
// console.log(arr1);
// // arr1=['MONEY', 'monitor', 'laptop', 'mouse', 'laptop', 'book']

// let arr1 = ["MONEY", "monitor", "laptop", "mouse", "laptop", "book", "laptop"];
// let el = arr1.shift(); // output:MONEY
// console.log(arr1);
// // arr1=['MONEY', 'monitor', 'laptop', 'mouse', 'laptop', 'book']

// let arr1 = ["MONEY", "monitor", "laptop", "mouse", "laptop", "book", "laptop"];
// let el = arr1.push("flask", "chair"); // output: 9
// console.log(arr1);
// mouse', 'laptop', 'monitor', 'MONEY']// // arr1=['MONEY', 'monitor', 'laptop', 'mouse', 'laptop', 'book','flask','chair']

// let arr1 = ["MONEY", "monitor", "laptop", "mouse", "laptop", "book", "laptop"];
// let el = arr1.reverse(); // output: ['laptop', 'book', 'laptop', '
// console.log(arr1);
//  el === arr1 -> true

// let arr1 = ["MONEY", "monitor", "laptop", "mouse", "laptop", "book", "laptop"];
// let arr2 = arr1.slice(); // output:['MONEY', 'monitor', 'laptop', 'mouse', 'laptop', 'book', 'laptop']
// let arr3 = arr1.slice(1, 4);
// console.log(arr3);

// let arr1 = ["MONEY", "monitor", "laptop", "mouse", "laptop", "book", "laptop"];
// let test = arr1.unshift("chair", "desk", "CPU"); // output:9
// // arr1=['chair','desk','MONEY', 'monitor', 'laptop', 'mouse', 'laptop', 'book', 'laptop']
// console.log(arr1);
