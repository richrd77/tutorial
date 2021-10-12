// Q - this is javascript class
//first small assignment
// get only last 10 chars

// Create Class for Employee
// class should have properties [EmployeeId, Name, Department]
// property Department :- should allow only [CS/IS] - default is CS
// create 10 Employess and store in array
// write 1 function outside the class to Sort by Department
// write 1 function to display "EmployeeId - Name - Department" 



class Employee {
    constructor() {
        this.name = '';
        this.dep = ''; //CS IS
    }

    get Department() {
        return this.dep;
    }

    set Department(v) {
        if (v == 'CS' || v == 'IS') {
            this.dep = v;
        } else {
            this.dep = 'CS';
        }
    }
}

newEmp = new Employee();
newEmp.name = 'First Emp';
newEmp.Department = 'IS';
console.log(newEmp.Department);


// create class Coder
// with properties name, age, designation
// name can be anything
// age can be any valid Number
// designation based on age 1-20 => newbie; 20-30 => junior; 
// 30-40 => Senior; 40 < => Expert
// designation value cannot be set
// sort by age
// display function "Name - designation"