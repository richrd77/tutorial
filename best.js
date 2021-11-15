// Declaring variables
// employee class 
var empObject = new Employee(); //more
var newEmployee = new Employee(); //more
// var - inside function - function scope
// let - inside block {} - block scope
// const - value is constant and never changes
// New Employee - newEmployee
// New Employee Name - newEmployeeName - camel casing - only for Objects or variables

// New Employee Name - NewEmployeeName - Pascel casing - only for functions classes
function DisplayEmployee(){}
let DisplayEmployee = function (){}


class EmployeeDepartment{}
class MathHelper{}

// DRY - DO NOT REaT YOURSELF
// Bad
document.getElementById('txtName').classList.add('cssClass');
document.getElementById('txtName').value = 'New Value';

// GOOD
const nameTextbox = document.getElementById('txtName');
nameTextbox.classList.add('cssClass');
nameTextbox.value = 'New Value';