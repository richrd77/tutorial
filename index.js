var someVar;

//after api call - somevar
//if any while calling api
//in this case if error while calling api we can assign null
// console.log(someVar);


let someLet;
someLet = 'newLet';
// console.log(someLet);


//Hold Constant value - cannot be changed later
const someCont = 'SomeConst';
// console.log(someCont);


//difference between var & let

// console.log(varObject);

var varObject = 'outside'

// function MyFunction(){
//     var varObject = 'created using var';
//     let letObject = 'created using Let'
//     console.log(varObject);
//     console.log(window.varObject);
//     console.log(letObject);
// }

// function MyFunction(m) {
//     if (true) {
//         var realanswer = 'not null';
//     }

//     {
//         let letans = 'let answer';
//     }
//     console.log(letans);
//     console.log(realanswer);
//     // return realanser;
// }

// console.log(MyFunction());

// MyFunction();



var sum = 'F' + '5';
// console.log(sum);

//if type is string and if we add (a+b) = ab
//if type is number and if we add 1+2=3

//2021-10-08T20:49:00Z
var d = new Date();
// console.log(d);

//print d like dd-mm-yyyy
// 09 Oct 2021
// console.log(d.getDate());
// console.log(d.getMonth());
// console.log(d.getFullYear());

// console.log(`${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`);
// console.log(d.getDate().toString() + '-' + d.getMonth().toString() + '-' + d.getFullYear().toString());

// console.log(d.getDay());
// console.log(d.toISOString())
let nDate = new Date('2021-10-08T15:41:10.360Z')
// console.log(nDate.toLocaleTimeString('EN-US'));

// console.log(nDate);


// console.log(new Date().toLocaleTimeString());
// console.log(new Date());

let pencil1;
// console.log(pencil);

pencil1 = {}
// console.log(pencil)

pencil1 = { color: 'RED', Manufacturer: 'Natraja' }
// console.log(pencil.color);
pencil1.color = 'Black';
pencil1.price = 10;
// console.log(pencil);

let pencil2;
pencil2 = {}
pencil2 = { color: 'BLUE', Manufacturer: 'Natraja1234' }
pencil2.price = 100;


let multiplePencil = [];
multiplePencil = [
    { color: 'RED', Manufacturer: 'Natraja', price: 10 },
    { color: 'BLUE', Manufacturer: 'Natraja1234', price: 100 },
    { color: 'White', Manufacturer: 'Natraja6789', price: 1000 },
]

multiplePencil.push({ color: 'Yellow', Manufacturer: 'BERE Manu', price: 500 });
multiplePencil.push({ color: 'green', Manufacturer: 'BERE Manu1234', price: 5000 });
multiplePencil.push({ color: 'grey', Manufacturer: 'BERE 1234', price: 5 });

// console.log(multiplePencil.length);
// console.log(multiplePencil.pop())
//length = 4;
// console.log(multiplePencil[0]) //first element in array - starts with 0
// console.log(multiplePencil[2]) // third element
// console.log(multiplePencil[5]); //sixth position

//before ES6
// for (let index = 0; index < multiplePencil.length; index++) {
//     console.log(multiplePencil[index]);
// }

//after ES6
// multiplePencil.forEach(function(e) {
//  console.log(e);   
// })

// multiplePencil.forEach(function (e) {
//     console.log(e.color + e.Manufacturer + e.price);
// })

// console.log(multiplePencil.filter(function (e) {
//     return e.price > 100;
// }).map(function (e) {
//     return e.color + e.Manufacturer + e.price;
// }));

// console.log(multiplePencil.find(function (e) {
//     return e.price == 10000;
// }));

function Display(parameter1, parameter2, parameter3) {
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3);
}

// Display(['M'], ['N', 'O'], 1000);
// let functionValue = Display();
// console.log(functionValue);

SumarrowFunction = (num1, num2) => num1 + num2;

function Sum(num1, num2, displayFunction) {
    displayFunction(num1);
    displayFunction(num2);
    displayFunction(num1 + num2);
    return num1 + num2;
}

function ConsoleDisplay(message) {
    console.log(message);
}

// Sum(3, 6, ConsoleDisplay);
// Sum(4, 6, (message123) => {
//     alert(message123);
// });
// alert(twoNumbersSum)

// (parameters) => {
//     //some logic
// }


// console.log('second line');
// console.log(SumarrowFunction(1,2));


custInfo = [
    { userId: 1, userName: 'User1' },
    { userId: 2, userName: 'User2' },
    { userId: 3, userName: 'User3' },
    { userId: 4, userName: 'User4' },
]

ReportInfo = [
    { userId: 1, report: 'User1 Report' },
    { userId: 2, report: 'User2 Report' },
    { userId: 3, report: 'User3 Report' },
    { userId: 4, report: 'User4 Report' },
    { userId: 5, report: 'User5 Report' },
    { userId: 6, report: 'User6 Report' },
    { userId: 6, report: 'User6 Report' },
]

// your project work
// console.log(
//     ReportInfo.map(function (e) {
//         let foundUser = custInfo.find(function (c) {
//             return c.userId == e.userId;
//         });

//         if (foundUser) {
//             e.userName = foundUser.userName;
//         } else {
//             e.userName = '';
//         }
//         return e;
//     })
// )

myMap = new Map();
// console.log(myMap);
myMap.set(1, { userId: 1, report: 'User1 Report' })
// console.log(myMap);
myMap.set(2, { userId: 2, report: 'User2 Report' });
myMap.set(2, { userId: 2, report: 'User2 Report-new' });
// console.log(myMap.get(2));
// console.log(myMap.delete(2));
// { userId: 3, report: 'User3 Report' },
// { userId: 4, report: 'User4 Report' },
// { userId: 5, report: 'User5 Report' },
// { userId: 6, report: 'User6 Report' },
// { userId: 6, report: 'User6 Report' },

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
div = 3 / 2.3;
// console.log(div);
// console.log(Math.round(div));
// console.log(Math.floor(div));
// console.log(Math.ceil(div));
//TODO: fetch only number before decimal point

// console.log(div.toString().split('.')[0]);
// console.log(div);


let str = 'First-Second-third-fourth';
// console.log(str.split('-'));
// console.log(str.substr(0,10));

// str.length

// function ReplaceHypen(inputString) {
//     let hypenIndex = inputString.indexOf('-',0);
//     if(hypenIndex != -1) {
//         console.log(inputString.substr(0, hypenIndex) 
//         + inputString.substr(hypenIndex + 1, inputString.length));
//     }
// }

// console.log(str.replaceAll('-','1'));
// console.log(ReplaceHypen(str));
n = 64;
s = '101';
// console.log(n);
// console.log(n.toString());
console.log(n + Number(s));
// console.log(Math.sin(90))
// console.log(Math.cos(90))

//Pad Start - pad End

userId = 101; //000100
// console.log(userId.toString().padStart(6,'X'))
// console.log(userId.toString().padEnd(6,'X'))

// usersarry = [
//     { userId: 10, name: 'User10' },
//     { userId: 1000, name: 'User1000' },
//     { userId: 100, name: 'User100' },
// ];

// console.log(usersarry.sort(function (a, b) {
//     if (a.userId == b.userId) {
//         return 0;
//     } else if (a.userId > b.userId) {
//         return 1;
//     } else {
//         return -1;
//     }
// }));

// arr1 = [1,2,3];
// arr2 = [8,9,0];

// console.log(arr1.concat(arr2).sort());

num1 = 100; num2 = 6;
// console.log(num1 === num2);
// console.log(num1 !== 6)
// console.log(num1 >= 6);
// // console.log(num1 <= 6);
// console.log((num1 % 2) == 0);

// 100 <= num1 <= 1000
// console.log((100 <= num1 || num1 <= 1000) ? 'Yes' : 'No');
// console.log((100 == num1 || num1 == 1000) ? 'Yes' : 'No');
// console.log(((num1 % 2) == 0) && !(100 == num1 || num1 == 1000) ? 'Yes' : 'No');
// if ((num1 % 2) == 0) {
//     console.log('Even');
// } else {
//     console.log('Odd');
// }
// console.log((num1 % 2) == 0 ? 'Even' : 'Odd')
operation = 'div';

// switch (operation) {
//     case 'add':
//         console.log(num1 + num2);
//         break;
//     case 'sub':
//         console.log(num1 - num2);
//         break;
//     case 'mul':
//         console.log(num1 * num2);
//         break;
//     default:
//         console.log('un defined Opertation');
//         break;
// }

//Loops
// for (let ind = 1; ind < multiplePencil.length; ind = ind + 1) {
//     console.log(multiplePencil[ind]);
// }

//callbackfn: (
//value: { color: string; Manufacturer: string; price: number; }, 
//index: number,
//array: { color: string; Manufacturer: string; price: number; }[]) => void,
//thisArg?: any
let o = [1, 2, 3];
// o.forEach(function (p1, p2, p3) {
//     if ((p2 % 2) != 0) {
//         console.log(p1);
//     }
// });
// come back after logic operation
// p2 = 0;
// while (p2 == 0 || (p2 % 2) == 0) {
//     console.log('ind='+p2);
//     console.log(o[p2]);
//     p2 = p2 + 1;
// }
// console.log(o);
// myObj = function () {
//     return { k: 'k' };
// }

// myObj.prototype.display = function () {
//     console.log(this);
// }
// console.log(myObj.display());


//THIS
// console.log(this);
// function MyFunction() {
//     console.log(this);
// }

// function SecondFunction() {
//     MyFunction();
//     // console.log(func);
// }
// SecondFunction();