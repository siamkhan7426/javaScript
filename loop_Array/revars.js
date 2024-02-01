
// revers --> ulta  hob a ; sohoj ata
/**
 * const number = [10, 20, 30, 40];
console.log(number)
const revarsed = number.reverse();// revars man ultaye jaba // output--> 40, 30, 20, 10
number.reverse()
console.log(number)
 console.log(revarsed)

 */

// loop dey revarsed -->
/**
 * const number = [10, 20, 30, 40];
const rev_numbers = [];
for(const num of number){
    console.log(num);
   // rev_numbers.push(num); // Array moto kora output asba
        rev_numbers.unshift(num) // revarsed ulta hoye jaba


}
 * 
 */

// console.log(rev_numbers) // 40, 30, 20, 10
// problem ta support nibo
// unshift-revars
/**
 * const number = [10, 20, 30, 40];

    const revars_number = []
    for(let i = 0; i<number.length; i++){
   const num = number[i];
    revars_number.unshift(number)
    console.log(number) //10, 20, 30, 40 --> 4 bar output dis a 
}
 */
  
 


// rivars side

    const number = [1, 2, 3, 4, 5, 6, 7, 8];
    const rev_numbers = []
    for ( let i =number.length -1; i>=0; i-- ){
         const num = number[i]; // serial vaba output asba (top.bottom)
       // console.log(num); // 40 30 20 10
         rev_numbers.push(num);
         // console.log(rev_numbers); vinno output asca
     }
      console.log(rev_numbers); // array stayle output asb