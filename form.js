// function Validate(e) {
//     e.preventDefault();
//     const userName = document.getElementById('uname').value;
//     const password = document.getElementById('pass').value;
//     if (userName != '' && password != '' && password.length >= 2 && password.length <= 5) {
//         alert('login success!');
//     } else if(password == '') {
//         document.getElementById('pass').classList.add('error');
//     } else if(userName == '') {
//         document.getElementById('uname').classList.add('error');
//     }
// }



// document.getElementById('frm').addEventListener('submit', Validate);

// console.log(document.getElementById('mydiv').classList.add('from-js'));
// console.log(document.getElementById('mydiv').classList);


// const jsSpan = document.createElement('span');
// const jsdiv = document.createElement('div');
// jsdiv.style.height = '10px';
// jsdiv.style.backgroundColor = 'blue';
// jsSpan.innerText = 'from jS';
// document.getElementById('bd').appendChild(jsSpan);
// document.getElementById('second').appendChild(jsSpan);
// document.getElementById('second').appendChild(jsdiv);

// jsdiv.appendChild(jsSpan);
// document.getElementById('second').appendChild(jsdiv);

// function addSpan() {
//     const txtbox = document.getElementById('txt');
//     const newSpan = document.createElement('span');
//     newSpan.innerText = txtbox.value;
//     document.getElementById('bd').appendChild(newSpan);
// }

// document.getElementById('btn').addEventListener('click', addSpan);

// const numbersarray = [10, 2, 3, 4, 56, 7];
// numbersarray.push(1);

// function attachNumber() {
//     const txtbox = document.getElementById('txt');

//     //step 1
//     const newListItem = document.createElement('li');

//     //step2
//     newListItem.innerText = txtbox.value;
//     newListItem.style.color = 'red';

//     //step3
//     document.getElementById('lst').appendChild(newListItem);
// }

// document.getElementById('btn').addEventListener('click', attachNumber);

// function fromarray(arr) {
//     arr.forEach(function (e) {

//         //step1
//         const newLi = document.createElement('li');

//         //step2
//         newLi.innerText = e;
//         newLi.style.color = 'red';

//         //step3
//         document.getElementById('lst').appendChild(newLi);
//     });
// }

// function RadioChange(e) {
//     console.log('changed-' + e);
//     filteredarray = reportinfo.filter(function (r) {
//         if (r.type == e) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

// function addNewLi() {
//     // step1 create Element
//     let newLi = document.createElement('li');

//     //step2 add attributes
//     newLi.innerText = document.getElementById('txt').value;
//     newLi.style.backgroundColor = 'purple';
//     newLi.style.color = 'white';

//     //step3 append to parent
//     document.getElementById('lst').appendChild(newLi);

//     document.getElementById('txt').value = '';
// }


// function addNewLiWithClick() {
//     // step1 create Element
//     let newLi = document.createElement('li');

//     //step2 add attributes
//     newLi.innerText = document.getElementById('txt').value;
//     newLi.style.backgroundColor = 'purple';
//     newLi.style.color = 'white';
//     newLi.onclick = function () {
//         alert(newli.innerText);
//     };


//     //step3 append to parent
//     document.getElementById('lst').appendChild(newLi);

//     document.getElementById('txt').value = '';
// }

// function appendChidren() {
//     //step1
//     const newLi1 = document.createElement('li');
//     const newLi2 = document.createElement('li');

//     //step2
//     newLi1.innerText = document.getElementById('txt').value;
//     newLi2.innerText = document.getElementById('txt').value;


//     // let newElements = ;

//     //step3
//     document.getElementById('lst').append(...[newLi1, newLi2]);
// }

// document.getElementById('btn').addEventListener('click', appendChidren);


// function addRow() {
//     //step1
//     const tableRow = document.createElement('tr');
//     const rowdiv1 = document.createElement('td');
//     const rowdiv2 = document.createElement('td');
//     const b = document.createElement('button');

//     //step2
//     rowdiv1.innerText = document.getElementById('txt').value;

//     b.innerText = 'delete';
//     b.onclick = function () {
//         const conf = confirm('are you sure you want to delete this row?');
//         if(conf == true) {
//             document.getElementById('tblbody').removeChild(tableRow);
//         }
//     };
//     rowdiv2.appendChild(b);
//     tableRow.appendChild(rowdiv1);
//     tableRow.appendChild(rowdiv2);


//     //step3
//     document.getElementById('tblbody').appendChild(tableRow);
// }

// document.getElementById('btn').addEventListener('click', addRow);

// cover call and apply

// function add(...numbers) {
//     // let normaladd = a + b;
//                h.Display.call(e);
//     // console.log([].reduce.call(arguments, function(x,y) {
//     //     return Number(x) + Number(y);
//     // },[]));

//     return numbers.reduce((a, b) => a + b);

//     // console.log(numbers);

//     // console.log(arguments);

// }

// 38ab - arr1
// arr2 - 1,2,3
// let arr1 = [1,2,3];
// let arr2 = [...arr1];

// arr1.push(10);
// arr1.push(20);

// console.log(arr1);
// console.log(arr2);


// class Employee {
//     constructor(n, age) {
//         this.Name = n;
//         this.age = age;
//     }
// }

// class Human {
//     constructor(n) {
//         this.Name = n;
//     }

//     Display(message) {
//         console.log(this);
//         console.log(message);
//     }
// }


// const h = new Human('Human Object');
// const e = new Employee('My Employee', 25);

// // h.Display();

// h.Display.apply(e);
// // console.log(e);
'use strict'

document.getElementById('btn').addEventListener('click', function () {
    try {
        //let num1 = Number(document.getElementById('n1').value);
        //let num2 = Number(document.getElementById('n2').value);
        //alert(num1 / num2);
        
        
        // first api = []
        //second api = []
        let num1 = Number(document.getElementById('n1').value);
        let num2 = Number(document.getElementById('n2').value);
        if(num1 > num2) {
            alert(num1 / num2);
        } else {
            throw 'num1 should be greater than num2';
        }

    } catch (error) {
        console.log(error);
        alert(error);
    } finally {
        // delete []
        // delete [] 
        console.log('inside FInally');
    }
});

