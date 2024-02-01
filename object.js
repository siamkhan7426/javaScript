// const age = 21;
// const school = "k.c.clg"
// const isPassed = true;
// //Primitive
// // let isDeveloper
// const subjects = ["Bangla", "English", "Accouting" ]

// non Primitive --> value object
// // object
// const student = {
//     name: "Student",
//     roll : 49,
//     age : 25,
//     studentId : 1178,
//     group : "Business",
//     college : "K.C College" ,

// }

// console.log(student)

/**
 * const profile = {
    name : " Siam Ahmed",
    student : "hons-1year",
    subjects : "Accouting",
    studentId : 7426,
    classRoll : 1,
    institute : "K.C College",
    "favorite country" :["bandorbon", ["chottogram"]]

}
profile.classRoll = 2; // vitor value chang 
profile.student = "Hons-2nd year"
const idNumber = "studentId" // variable vitore man raka holo
profile["subjects"] = "Marketing" // value assingment kora
console.log(profile)
console.log(profile["favorite country"])
console.log(profile[idNumber]) // variable man print kora holo,
 */

// object key
/**
 * const profile = {
    name : " Siam Ahmed",
    student : "hons-1year",
    subjects : "Accouting",
    studentId : 7426,
    classRoll : 1,
    institute : "K.C College",
    "favorite country" :["bandorbon", ["chottogram"]]

}
const keys = Object.keys(profile);  // object vitor variable proparty
const values = Object.values(profile) // value gulo assignmet kora holo
console.log(keys)
console.log(name)
 */

// object nested
/**
 * const college = {
        name : "K.C",
        class: ["11", "12"],
        events: ["16 december", "21 feb"],
        uniqe: {
            color: "blue",
            result:{
                gp: "5",
                merit: "top"
            }

        }
    }
    console.log(college.uniqe.result.merit) // vitor value gulo assignment korchi akta akta dora dora 
    college.uniqe.result.merit = "top top top"  // value change 
    college.events[2] = "26 march" // value add
    delete college.uniqe.color; // value delete 
    console.log(college.events[0]) // array maddome value add

    console.log(college)

// video link --> https://web.programming-hero.com/web-9/video/web-9-19_7-keys-values-nested-objects-and-delete
 */


    /**
     * loop --> all object
     * / loop object 
const profile = {
    name : " Siam Ahmed",
    student : "hons-1year",
    subjects : "Accouting",
    studentId : 7426,
    classRoll : 1,
    institute : "K.C College",
    "favorite country": ["bandorbon", ["chottogram"]]

}

// for of : array
// for in : object

// for in
for(const prop in profile){
   // console.log(prop) // object key
   // console.log(profile[prop]) // object value
}
const keys = Object.keys(profile);
console.log(keys);
// const values =  Object.values(profile)
// console.log(values)

// for of --> loop
for(const key of keys){
    console.log(key, ":", profile[key]);
}
*/
