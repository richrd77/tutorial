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
// let apiResponse =
//     [
//         {
//             "userId": 1,
//             "id": 1,
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         },
//         {
//             "userId": 1,
//             "id": 2,
//             "title": "qui est esse",
//             "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//         }
//     ];
// console.log(apiResponse.filter(o => o.id == 1));
// // console.log(JSON.stringify(apiResponse));


// //json stringify & parse
// localStorage.setItem('res', JSON.stringify(apiResponse));
// let fromLocal = localStorage.getItem('res');
// let newarray = JSON.parse(fromLocal)
// console.log(newarray.filter(o => o.id == 1));

// localStorage.setItem('someString','My String Value');

// ajax - asyncronus javascript and XML
// HTTP request :- hyper Text Transfer protocol (plain Text)
// HTTPs request :- hyper Text Transfer protocol secured (encrypted text - SSL certificate)
// server -> client [get]
// server <- client [Post]
// server <- client [Put] with key (Id)
// server <- client [delete] with key (Id)


const request = new XMLHttpRequest();
request.onreadystatechange = function (e, r) {
    // console.log(r.responseText);
    if (this.readyState == 4) {
        // console.log(JSON.parse(request.responseText));
        const respnse = JSON.parse(request.responseText);
        respnse.forEach(function (o) {
            addRow(o);
        });
    }
    // console.log(e);
}
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
request.send();

function addRow(obj) {
    const newTr = document.createElement('tr');
    const newTdTitle = document.createElement('td');
    const newTdBody = document.createElement('td');
    const newTdUserId = document.createElement('td');
    newTdTitle.innerText = obj.title;
    newTdBody.innerText = obj.body;
    newTdUserId.innerText = obj.userId;
    newTr.appendChild(newTdTitle);
    newTr.appendChild(newTdBody);
    newTr.appendChild(newTdUserId);
    document.getElementById('tbl').appendChild(newTr);
}