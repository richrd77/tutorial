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

function PopulateList() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function (e, r) {
        // console.log(r.responseText);
        if (this.readyState == 4) {
            // const res = request.responseText;
            {
                // document.getElementById('tbl').innerHTML = '';
                const respnse = JSON.parse(request.responseText);
                respnse.forEach(function (o) {
                    addRow(o);
                });
            }
        }
        // console.log(e);
    }
    request.open('GET', 'http://localhost:4000/shoppingList');
    request.send();
}


function addRow(obj) {
    const newTr = document.createElement('tr');

    newTr.addEventListener('click', function () {
        EditRow(newTr);
    });

    const newTdTitle = document.createElement('td');
    const newTdBody = document.createElement('td');
    const newTdUserId = document.createElement('td');
    newTdTitle.innerText = obj.name;
    newTdTitle.classList.add('first-col');
    newTdBody.innerText = obj.quantity;
    newTdUserId.innerText = obj.remarks;


    const newDeleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    // deleteBtn.onclick = DeleteRow(newTr);
    deleteBtn.onclick = function () {
        DeleteRow(newTr);
    };
    newDeleteTd.appendChild(deleteBtn);


    newTr.appendChild(newTdTitle);
    newTr.appendChild(newTdBody);
    newTr.appendChild(newTdUserId);
    newTr.appendChild(newDeleteTd);
    document.getElementById('tbl').appendChild(newTr);
}

PopulateList();

function PostForm() {
    const n = document.getElementById('name').value;
    const q = document.getElementById('quantity').value;
    const r = document.getElementById('remarks').value;
    let newRow = { name: n, quantity: q, remarks: r };

    const foundItem = [...document.querySelectorAll('.first-col')].map(e => e.innerText).find(function (elm) {
        return elm == n;
    });

    console.log(foundItem);

    if (foundItem) {
        //PUT
        let putRequest = new XMLHttpRequest();
        putRequest.onreadystatechange = function () {
            if (this.readyState == 4) {
                PopulateList();
            }
        };
        putRequest.open('PUT', 'http://localhost:4000/shoppingList/' + n);
        putRequest.setRequestHeader('content-Type', 'application/json');
        putRequest.send(JSON.stringify(newRow));
    } else {
        //POST
        let postRequest = new XMLHttpRequest();
        postRequest.onreadystatechange = function () {
            if (this.readyState == 4) {
                PopulateList();
            }
        };
        postRequest.open('POST', 'http://localhost:4000/shoppingList');
        postRequest.setRequestHeader('content-Type', 'application/json');
        postRequest.send(JSON.stringify(newRow));
    }


}

document.getElementById('frm').addEventListener('submit', function (e) {
    e.preventDefault();
    PostForm();
});


function EditRow(currentRow) {
    const children = currentRow.childNodes;
    document.getElementById('name').value = children[0].innerText;
    document.getElementById('quantity').value = children[1].innerText;
    document.getElementById('remarks').value = children[2].innerText;
    document.getElementById('name').setAttribute('disabled', 'disabled');
}


function DeleteRow(currentRow) {
    // console.log(currentRow);
    // console.log('inside DeleteRow');
    const confirmation = confirm('are u sure to delete this row?');

    if (confirmation) {
        //make delete request
        const children = currentRow.childNodes;
        let name, quant, remarks;

        for (let index = 0; index < (children.length - 1); index++) {
            if (index == 0) {
                name = children[index].innerText;
            } else if (index == 1) {
                quant = children[index].innerText;
            } else if (index == 2) {
                remarks = children[index].innerText;
            }
        }
        let newRow = { name: name, quantity: quant, remarks: remarks };
        let deleteRequest = new XMLHttpRequest();
        deleteRequest.onreadystatechange = function () {
            if (this.readyState == 4) {
                PopulateList();
            }
        };
        deleteRequest.open('DELETE', 'http://localhost:4000/shoppingList/' + name);
        deleteRequest.setRequestHeader('content-Type', 'application/json');
        deleteRequest.send(JSON.stringify(newRow));
    }
}

// function Toggle(index) {
//     document.querySelector('.nip0').style.display='';
//     document.querySelector('.qip0').style.display='';
//     document.querySelector('.rip0').style.display='';
//     document.querySelector('.nl0').style.display='none';
//     document.querySelector('.ql0').style.display='none';
//     document.querySelector('.rl0').style.display='none';
// }