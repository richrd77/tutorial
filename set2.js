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



//THIS
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

function ButtonClickEvent() {
    console.log(document.getElementById('txt').value);
    console.log(document.getElementById('dd').value);
    console.log(document.getElementById('txta').value);
}


let secondPElement = document.getElementById('h2');
console.log(secondPElement.innerText);

console.log(document.getElementById('div').innerText)