/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// const age = prompt("Enter your Age");
const age = 40;
const ticketPrice = 800;
if(age< 10){
    console.log("Children ticket free")
} else if(age>=12 && age <=30){
    // 50% discount 
        const discount = ticketPrice * 50 / 100;
        const totalAmount = ticketPrice - discount;
        console.log("Student get a 50% discount" + " " + totalAmount)
    } else if(age >= 60){
        // 15% discount 
        const discount = ticketPrice * 15 / 100;
        const totalAmount = ticketPrice - discount;
        console.log("Senior citizens get a 15% discount" + " " + totalAmount)
    }else{
        console.log("Regular ticket fare", + ticketPrice)
    }

