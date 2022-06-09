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
