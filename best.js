// Declaring variables
// employee class 
// var empObject = new Employee(); //more
// var newEmployee = new Employee(); //more
// // var - inside function - function scope
// // let - inside block {} - block scope
// // const - value is constant and never changes
// // New Employee - newEmployee
// // New Employee Name - newEmployeeName - camel casing - only for Objects or variables

// // New Employee Name - NewEmployeeName - Pascel casing - only for functions classes
// function DisplayEmployee(){}
// let DisplayEmployee = function (){}


// class EmployeeDepartment{}
// class MathHelper{}

// // DRY - DO NOT REaT YOURSELF
// // Bad
// document.getElementById('txtName').classList.add('cssClass');
// document.getElementById('txtName').value = 'New Value';

// // GOOD
// const nameTextbox = document.getElementById('txtName');
// nameTextbox.classList.add('cssClass');
// nameTextbox.value = 'New Value';


// cover how i came with function Name
// function IsOdd(num) {
//     // return true if num odd 3/2 [1]
//     // return false
//     let remainder = num % 2;
//     if (remainder != 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// it is good to use === instead of ==
// it is good to use !== instead of !=
function IsOdd(num) {
    // return true if num odd 3/2 [1]
    // return false

    // Declaration
    let remainder = num % 2;
    var isOdd = false;
    let tempVariable = 0;

    // Main Logic
    if (remainder !== 0) {
        isOdd = true;
        tempVariable = -1;
    }

    //return
    return isOdd;
}

// function IsOdd(num) {
//     // return true if num odd 3/2 [1]
//     // return false
//  // some expression which will return either true or false ? will execute only if result is true : will execute only if result is false 
//     return (num % 2) !== 0 ? true : false;
// }

// function IsOdd(num) {
//     // return true if num odd 3/2 [1]
//     // return false
//     // some expression which will return either true or false ? will execute only if result is true : will execute only if result is false 
//     return (num % 2) !== 0;
// }

let booleanValue = false;

// Bad
// if (booleanValue === true) {
//     console.log('it is true');
// } else {
//     console.log('it is false');
// }

// Good
// if (booleanValue) {
//     console.log('it is true');
// } else {
//     console.log('it is false');
// }

// if (!IsOdd(5)) {
//     console.log('even');
// } else {
//     console.log('odd');
// }

// console.log(IsOdd(2));

// 'use strict'
let myObj = { name: '', dept123: 'IT' };
// let myObj = {};


// Bad
// function IsDeveloper(emp) {
//     console.log(emp.dept);
//     emp.dept === 'IT' ? console.log(`Yes ${emp.name} is a developer`) : console.log(`No ${emp.name} is not a developer`);
//     // emp.dept === 'IT' ? console.log('Yes' + emp.name + 'is a developer') : console.log(`No ${emp.name} is not a developer`);
//     return emp.dept === 'IT';
// }

// function IsDeveloper(emp) {
//     if (emp !== null && emp !== undefined && emp !== '') {
//         console.log(emp.dept);
//         emp.dept === 'IT' ? console.log(`Yes ${emp.name} is a developer`) : console.log(`No ${emp.name} is not a developer`);
//         // emp.dept === 'IT' ? console.log('Yes' + emp.name + 'is a developer') : console.log(`No ${emp.name} is not a developer`);
//         return emp.dept === 'IT';
//     } else {
//         console.log('object is null');
//     }
//     return false;
// }

// Good
// function IsDeveloper(emp) {
//     if (emp && emp.name) {
//         console.log(emp.dept);
//         emp.dept === 'IT' ? console.log(`Yes ${emp.name} is a developer`) : console.log(`No ${emp.name} is not a developer`);
//         // emp.dept === 'IT' ? console.log('Yes' + emp.name + 'is a developer') : console.log(`No ${emp.name} is not a developer`);
//         return emp.dept === 'IT';
//     } else {
//         console.log('object is null');
//     }
//     return false;
// }

// IsDeveloper(myObj);

// console.log(IsOdd(3));

// Immideately Invoked Functions
// Immideately - completing action right begining
// Invoked - calling
// Functions - function() {} function MyFunction(){}

// (function () {
//     console.log('inside MyFunction');
// })();

// const MyOtherFunction = function () {
//     console.log('inside other function');
// }

function NewFunc(p) {
    console.log('inside NewFunc parameter=' + p);
};

// NewFunc('this is p');



// (function (p) {
//     console.log('inside IIF parameter=' + p);
// })('this is p');

const someEmp = { name: 'john', dept: 'IT' };
const someOtherEmp = { name: 'Sue', dept: 'accounts' };

// (function (emp, secondP) {
//     console.log(`Employee ${emp.name} is from ${emp.dept} Department`);
//     console.log(secondP);
// })(someOtherEmp, 'this is second param');

// (function () {
//     console.log('new IIF');
// })();

// (function (e) {
//     console.log(e);
// })(someEmp);



class Employee {
    constructor(name, dept) {
        this.Name = name;
        this.Dept = dept;
    }

    DisplayName() {
        console.log(this.Name);
    }

    DisplayDepartment() {
        console.log(this.Dept);
    }
}


const myEmp = new Employee('john', 'IT');
myEmp.DisplayName();
myEmp.DisplayDepartment();
(function(e) {
    console.log(`Employee ${e.Name} is from ${e.Dept} Dept`);
})(myEmp)