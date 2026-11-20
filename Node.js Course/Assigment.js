const prompt = require("prompt-sync")();
//  pushing assigments to git hub:
// git add .
// git commit -m "Update Assignment 1"
// git push

// Q1:  console.log(Number("123") + 7);
// --------------------------------
// Q2: let input = prompt('Enter a value: ')

// if (input == "" || input == 0){
//     console.log("invalid");

// }
// else console.log("valid");
// -------------------------------
// Q3: for (i = 1 ; i < 10; i++){
//     if((i % 2) == 0 ){
//     continue;
//     }
//     console.log(i);

// }
// ---------------------------------

// Q4: const array = [1,2,3,4,5]
// const res = array.filter(checkEven);

// function checkEven(array) {
//     return array % 2 == 0;
// }

// console.log(res);
// ----------------------------------

// Q5: const arr1 = [1,2,3]
// const arr2 = [4,5,6]
//"Before joining" console.log(arr1 , arr2);

// const arr3 = [...arr1, ...arr2]

//"After joining" console.log(arr3);
// ------------------------------------

// Q6: let input =Number (prompt('Enter a number: '))

// switch (input) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;

//     case 3:
//         console.log("Tuesday");
//         break;

//     case 4:
//         console.log("wednsday");
//         break;

//     case 5:
//         console.log("Thursday");
//         break;

//      case 6:
//         console.log("Friday");
//         break;

//     case 7:
//         console.log("Saturday");
//         break;

//         default:
//             console.log("invalid number");

// }
// --------------------------------------------

// Q7: const array = ["a", "ab", "abc", "abcde"]

// const sLength = array.map(char => char.length)

// console.log(sLength);

// -----------------------------------------------

// Q8: let input = Number(prompt('Enter a number: '))

// function div() {
//     if(input % 3 == 0 || input % 15 == 0){
//         console.log("divisble by both");
//     }
//     else console.log("not divisbile by both");
// }

// div();

// Q9: const sqr = () =>{
//     let input = Number(prompt('Enter a number: '))
//     let res = input * input;
//     return (res);
// }

// console.log(sqr());

// ---------------------------------------------------
// Q10 : function Person () {

//     const person = {
//         name: "John",
//         age : "25"
//     };

//     console.log(person.name + " is " + person.age +" Years "+ "old");
// }

// Person();
// ------------------------------------------------------

// Q11: function Sum(a,b,c,d,e) {
//     let res = a+b+c+d+e;
//     console.log(res);
// }
// Sum(1,2,3,4,5);
// ------------------------------------------------------

// Q12: const Success = new Promise((resolve,reject) => {
//     const success = true;

//     setTimeout(() => {
//         if(success){
//             resolve("Success")
//         }
//         else {
//             reject("failed")
//         }
//     }, 3000);
// });

// async function getData() {
//     try{
//         const data = await Success;
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);

//     }
// }

// getData();
// ------------------------------------------
// Q13: function findLargest() {
//     let arr = [1,3,7,2,4]
//     let largest = arr[0]
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }

//     }
//     console.log(largest);

// }

// findLargest();

// ----------------------------------------------
// Q14: const info  = () =>{
//     const person = {
//         name : "waseem",
//         age : 30
//     }
//     console.log(Object.keys(person));

// }

// info();
// ------------------------------------------
// Q15: const sentence = () =>{
//     let text = "The quick brown fox"
//     const arr = text.split(" ")

//     console.log(arr);

// }

// sentence();
