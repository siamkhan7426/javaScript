// sort --> javaScript sort acha thik moto kaj kora na
// const parson = ['riya', 'nusu', 'mim', 'happy', 'hasi']
// const sortParson = parson.sort();
// console.log(sortParson);

// sort
// const numbers = [7, 8, 2, 9 , 3 , 6, ]
/**
 * Ascending --> smaller to larger: [2, 3, 6, 7,8,9]
 * Descending --> larger to small:[9,8,7,6,3,2]
 * 
 */
// suport section join hota hoba
const numbers = [7, 8, 12, 9 , 53 , 6, 1]
// const number_asc = numbers.sort() // not working kaj korsa but sting vaba
 const number_asc = [...numbers].sort(function (a, b) {return a - b })
 const number_dsc = [...numbers].sort(function (a, b) {return b - a })

console.log(number_asc)
console.log(number_dsc)