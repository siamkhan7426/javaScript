/**
 * Ternary --> short hand  if ele
 */
// simple ternary --> akta const  thekla short hand 
// const myAge = 2;
// myAge >= 18 ? console.log("hasina khala daksa voter mathe") : console.log("hasina khala tomar vote dey disa");


// two const thakla short hand
/**
 * let price = 500;
const isLeader = false

if(isLeader === true){
    price = 0;
}else {
    price = price + 100;
}
price = isLeader === true ? 0 : price + 100 ;
 // console.log(price)
 
 */

// Nested If-Else Condition

let money = 100;

if(money > 300){
    console.log("tui borolok");

}
else{
    if(money >= 100){
        console.log("tui borolok oh na gorib oh na")
    }
    else{
        if( money > 0){
            console.log("kola kha" )
        }
        else{
            console.log("tui amar bundu na")
        }

    }
        
    }
    

//  advanced ternary


 let price = 1500;
const isLeader = false;

if(isLeader === true){
    if(price > 1000){
        price = price / 2; // first let price cheya besi hoi and true hoi taholy price / 2 vag kora price output diba
        

    }else{
        price = 0; // jodi true hoi and 1000 tk kom hoi taholy price 0 hoba ?
        
    }
}
else {
    price = price + 1000;  // first if jodi false hoi taholy sa last else sata all amount tk + kora output diba
}
console.log(price)
 
 price = isLeader === true ? price > 1000 ? price/2 : 0 : price + 1000;
 console.log(price)



//  random number prompt use kora
const age = prompt("your age ?") //  customer  random number text generator?
const price = 500;
if (age <= 12){
    console.log("you can eat for free");
} 
else if(age >= 60){
    // 50% discount 
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log("your 50% discount to total prices " + " " + payAmount )

}
else if(age >= 50){
    // 25% discount
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log("your 25% discount for total price " + " " + payAmount )
}
else if(age >= 40){
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log("your 10% discount for total price " + " " + payAmount)
}
else{
    console.log("your age no discount pay for total price " + " " + price )
}
 