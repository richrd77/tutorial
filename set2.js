// console.log(emp);
// "use strict";

// function MyFunction() {
//     let emp = { name:'Something' };
//     console.log(emp);
// }

// MyFunction();
// // console.log(emp);
// // emp =  { dep:'CS' }

// function anotherFunction() {
//     newEmp = { j:'EEE' };
// }

// anotherFunction();
// console.log(newEmp);



// THIS - conecpt
// class Employee {
//     constructor() {
//         this.FirstName='';
//         this.LastName='';
//     }

//     DisplayFullName() {
//         // console.log(emp.FirstName + ' ' + emp.LastName);
//         console.log(this.FirstName + ' ' + this.LastName)//john Doe
//     }
// }

// class Parents {
//     constructor() {
//         this.FirstName='';
//         this.LastName='';
//     }
// }


// function GlobalFunction() {
//     console.log(this);
// }

// let myEmp = new Employee();
// myEmp.FirstName = 'john';
// myEmp.LastName = 'Doe';


// let secondEmp = new Employee();
// secondEmp.FirstName = 'Mr'
// secondEmp.LastName = 'crow';

// // myEmp.DisplayFullName(myEmp);
// // secondEmp.DisplayFullName(secondEmp);
// // window.GlobalFunction();

// let myParent = new Parents();
// myParent.FirstName = 'RIC';
// myParent.LastName = 'Something';

// secondEmp.DisplayFullName();
// secondEmp.DisplayFullName.call(myParent);



// DOM - Document Object Model
// console.log(window)

// function ButtonClickEvent() {
//     console.log(document.getElementById('txt').value);
//     console.log(document.getElementById('dd').value);
//     console.log(document.getElementById('txta').value);
// }


// let secondPElement = document.getElementById('h2');
// console.log(secondPElement.innerText);

// console.log(document.getElementById('div').innerText)


// event - any event [load, click, mouseover, mousein, mouseout, hover, unload]

// function H1LoadEventHandler() {
//     console.log('inside function');
//     document.getElementById('h1').style.color = 'red';
// }

// function MouseINEventHandler() {
//     console.log('mouse');
//     document.getElementById('img').clientHeight = '1000px';
// }


// function FormSubmitEventHandler(a) {
//     a.preventDefault();
//     console.log(a);
//     console.log('form Submitted');
//     return false;
// }

// document.getElementById('myForm').addEventListener('submit', FormSubmitEventHandler);

// document.getElementById('p').addEventListener('click', function ParentClickEvent() {
//     console.log('Parent Click');
// },);

// document.getElementById('c').addEventListener('click', function () {
//     console.log('Child Click')
// });

// document.getElementById('c2').addEventListener('click', function () {
//     console.log('Child2 Click')
// });

// document.getElementById('gf').addEventListener('click', function () {
//     console.log('Grand Father Click')
// });


// console.log('i')

// let myFunction = function () {}

// H1LoadEventHandler;

// listeners

// document.getElementById('myForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log(document.getElementById('name').value);
//     console.log(document.getElementById('password').value);
// });


// function BtnClickEvent() {
//     console.log(document.getElementById('u2').value);
//     console.log(document.getElementById('p2').value);
// }

// document.getElementById('btn').addEventListener('click', function () {
//     const dropDownValue = document.getElementById('dd1').value;
//     const txt = document.getElementById('txt');
//     const sp = document.getElementById('s');
//     if(dropDownValue == 'b') {
//         sp.style.backgroundColor = txt.value;
//     } else if(dropDownValue == 'c') {
//         sp.style.color = txt.value;
//     } else if(dropDownValue == 'v') {
//         sp.innerText = txt.value;
//     }
//     txt.value = '';
// });


// document.getElementById('gp').addEventListener('click', function (e) {
//     console.log('Grand Parent Click Event');
//      //stops event bubling and event capturing
//     e.stopPropagation();
// }, true);

// document.getElementById('p').addEventListener('click', function (e) {
//     console.log('Parent Click Event');
//     //stops Event Bubling
// }, true);

// document.getElementById('c').addEventListener('click', function (e) {
//     console.log('Child Click Event');
//     e.stopPropagation();
// }, true);