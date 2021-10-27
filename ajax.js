// class Technology {
//     constructor(techName, exp) {
//         this.Technology = techName;
//         this.Experience = exp;
//     }
// }

// class Employee {
//     constructor(fName, sal, dept) {
//         this.Name = fName;
//         this.Salary = sal;
//         this.Department = dept;
//         this.Technologies = [];
//     }

//     addTechnology(techName, exp) {
//         this.Technologies.push(new Technology(techName, exp));
//     }

//     GetTechnologies() {
//         console.log(this.Technologies);
//     }
// }


// const newEmployee = new Employee('Some Employee', 40000, 'IT');
// const newEmployee2 = new Employee('Some Other Employee', 50000, 'HR');


// const newEmployee1 = { Name:'Some Employee', Salary:40000, Department:'IT' };
// const newEmployee2 = { Name:'Some Other Employee', Department:'IT' };

//sample api response
let apiResponse =
    [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    ];
console.log(apiResponse.filter(o => o.id == 1));
// console.log(JSON.stringify(apiResponse));


//json stringify & parse
localStorage.setItem('res', JSON.stringify(apiResponse));
let fromLocal = localStorage.getItem('res');
let newarray = JSON.parse(fromLocal)
console.log(newarray.filter(o => o.id == 1));

    // localStorage.setItem('someString','My String Value');