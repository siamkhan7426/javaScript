let myFullName = "Siam Ahmed";
let myAge = 25;
// console.log(typeof myFullName)
// console.log(typeof myAge)


// let mangoPrice = 20;
// let applePrice = 45;
// let totalPrice = mangoPrice + applePrice;
// console.log(mangoPrice + applePrice)
// console.log(totalPrice);


// let mangoPrice = 20;
// let applePrice = "45";
// console.log(mangoPrice + applePrice) // output - 2045   string and number যোগফল হয় না 

// // কোনো স্টিং ভেলু নাম্বার কনর্ভাট করতে চাইলে ->  (parseInt)  value use korte hoba
// let price = parseFloat (20.5) // দশমিক নাম্বার ভেলু
// let mangoPrice = 20;
// let applePrice = parseInt ("Siam Ahmed"); // just number value string thakle number convert hoba
// console.log(price + mangoPrice) 

let first = 0.1;
let second = 0.2;
let total = first + second;
console.log(total.toFixed(5)) // decimal number word 3, 5, 4 example // output 0.30000

//short hand

let dimPrice = 20 ;
//dimPrice = dimPrice + 10;
dimPrice += 10;
console.log(dimPrice)