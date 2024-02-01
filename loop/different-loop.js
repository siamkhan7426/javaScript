// odd number
/**
 * for(let i = 0; i <= 10; i++){
    if(i % 2 === 1){
        //console.log(i)
    }
    
}

// odd number 

for (let i = 0; i <= 10; i++){
    if(i%2 !== 0){
       // console.log(i)
    }
}
// odd number
for (let i = 1; i <= 10; i+= 2){
    
 // console.log(i)
    
}
// give me the list number between 1 to 30 divisible by 5
for(i = 1; i <=30; i++){
    if(i%5 === 0){
       // console.log(i)
    }

}
// done 
for(i = 1; i <=30; i++){
    if(i % 3 === 0 || i % 5 === 0){
       // console.log(i)
    }


}

for(i = 1; i <=200; i++){
    if(i % 3 === 0 && i % 5 === 0){
      //  console.log(i)
    }


}

 */


// give me thr sum of number form 1 to 20 that are divisible by 3

let total = 0;
for(i = 1; i <= 20; i++){
    if(i % 3 === 0 ){
        console.log(i)
       total = total + i;
        console.log("total =", total)
    }
}
console.log("total of the number =", total)
