// decoration - yes - promise1

// food - yes - promise2

// photo - yes - promise3

// greeting guest - decoration, food, photo - UI

// for(let i = 0 ; i < 999999999999999999999999999999; i++){

// }

const decorationPromise = new Promise((success, fail) => {
    console.log('decorating');
    setTimeout(function () {
        console.log('inside for loop');
        // for (let i = 0; i < 999999999999999999999999999999; i++) {

        // }
        success("flowers did not appear");
    }, 5000);
});


// const foodPromise = new Promise((success, fail) => {
//     console.log('preparing food');
//     setTimeout(function () {
//         success("invite friends for lunch");
//     }, 7000);
// });

// //correct syntax
// // decorationPromise.then(function() {
// //     console.log('verifying decoration');
// // }).catch(function(){
// //     console.log('promise failed - handling this case');
// // });

// //wrong syntax - because if promise is failed then both catch and then block will be executed
// // decorationPromise.catch(function(){
// //     console.log('promise failed - handling this case');
// // }).then(function() {
// //     console.log('verifying decoration');
// // });

// decorationPromise.then(function (e) {
//     console.log(e);
//     console.log('verifying decoration');
// }).catch(function (e) {
//     console.log(e);
//     console.log('promise failed - handling this case');
// });


// foodPromise.then(function (e) {
//     console.log(e);
//     console.log('inviting friends for lunch');
// }).catch(function (e) {
//     console.log('food not prepared yet because');
//     console.log(e);
// });

// //without promise
// console.log('decorating');
// setTimeout(function () {
//     console.log("flowers did not appear");
// }, 5000);
// console.log('verifying decoration');


// console.log('preparing food');
// setTimeout(function () {
//     console.log("invite friends for lunch");
// }, 7000);
// console.log('inviting friends for lunch');

// async function MyFunction() {
//     try {
//         const promiseValue = await decorationPromise;
//         console.log(promiseValue);
//     } catch(e) {
//         console.log(e);
//     }
// }

// MyFunction();

// decorationPromise.then(function (e) {
//     console.log('my verification done');
//     console.log('mom verify');
// }).then(function () {
//     console.log('mom verifying');
//     console.log('verification done');
//     console.log('my friend verifying');
// }).then(function () {
//     console.log('mon friend verifying');
//     console.log('verification done');
// }).catch(function (d) {

// });

async function MyFunction() {
    try {
        const promiseValue = await decorationPromise;
        console.log('my verification done');
        console.log('mom verification done');
        console.log('mom friend verification done');
    } catch(e) {
        console.log(e);
    }
}

MyFunction();