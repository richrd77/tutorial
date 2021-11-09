// document.getElementById('btn').addEventListener('click', function () {
//     const givenFirstName = document.getElementById('firstname').value;
//     const givenLastName = document.getElementById('lastname').value;
//     console.log(givenFirstName);
//     console.log(givenLastName);

//     // Query string
//     // window.location.href = 'http://127.0.0.1:5500/page2.html?fname='+givenFirstName + '&lname=' + givenLastName;

//     // cookie - will be deleted when it expires
//     // const expireDate = new Date('2021-10-30T00:00:00.000Z');
//     //     document.cookie = 'fname='+givenFirstName + ';Expires=' + expireDate;
//     //     document.cookie = 'lname='+givenLastName+';Expires=' + expireDate;

//     //session storage - will be deleted when the browser is closed or when the session is completed
//     // to store/write the value we use "setItem" and pass key and value
//     // window.sessionStorage.setItem('key','value');
//     // to read/get value we use "getItem" and pass only key
//     // window.sessionStorage.setItem('key','value');


// // localstorage
// window.localStorage.setItem('firstlocal','yes');
// window.localStorage.getItem('firstlocal');
//     window.location.href = 'http://127.0.0.1:5500/page2.html';
// });

//nested loop - loop inside loop
//nested function - function inside function - closure
//nested class - class inside class - not possible in jS but can be achived via functions

// let firstarray = [1, 2, 3];
// let secondarray = [4, 5, 6];
// let thirdarray = [7, 8, 9];

// let myNumbers = [firstarray, secondarray, thirdarray];
// // // console.log(myNumbers); // two dimensional array
// let totalSum = 0;
// // myNumbers.forEach(function (v) {
// //     v.forEach(function (n) {
// //         totalSum = totalSum + n;
// //     })
// //     // console.log(v);
// // });

// // [1,2,3] - 0 || 0 -> 1; 1 -> 2; 2 -> 3; 3 -> end
// // [4,5,6] - 1 || 0 -> 4; 1 -> 5; 2 -> 6; 3 -> end
// // Matrix 

// for (let outerIndex = 0; outerIndex < myNumbers.length; outerIndex++) {
//     // let temparray = myNumbers[outerIndex];
//     for (let innerIndex = 0; innerIndex < myNumbers[outerIndex].length; innerIndex++) {
//         totalSum = totalSum + myNumbers[outerIndex][innerIndex];
//     }
// }

// // for(let outindex=0; outindex)


// for(let index = 0; index < Array.length;index ++) {

// }

// console.log(totalSum);


// let muliplyBy2 = function () {
//     return {
//         multiply: function (num) {
//             return num * 2;
//         }, square: function (num) {
//             return num * num;
//         }
//     }
// }
// same as above
// class Mathe {
//     constructor(){}

//     multiply (num) {
//         return num * 2;
//     }
//     square (num) {
//         return num * num;
//     }
// }

// let mathematics = muliplyBy2();

// console.log(mathematics.multiply(3));
// console.log(mathematics.square(3));


function MyFunc(e = 10) {
    return e + 1;
};
 console.log(MyFunc());