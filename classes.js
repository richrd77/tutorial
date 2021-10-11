let user1 = { userId: 1, name: 'User1' };
// console.log(user1);
let user2 = { userId: 2, name: 'User2', dep: 'CS' }
// console.log(user2);

users = [
    user1, user2
];

// users.forEach(element => {
//     console.log(element.dep);
// });


//class defination
// class UserClass {
//     constructor() {
//         this.userName = null;
//         this.userId = null;
//         this.dep = null;
//     }
// }

//object creation of UserClass
// newUser1 = new UserClass();
// newUser1.userName = 'User1';
// newUser1.userId = 1;

// newUser2 = new UserClass();
// newUser2.userName = 'User2';
// newUser2.userId = 2;
// newUser2.dep = 'CS';
// console.log(newUser1);
// console.log(newUser2);


// class Human {
//     constructor() {
//         this.height = null;
//         this.weight = null;
//         this.speed = null;
//     }

//     IsHealthy() {
//         //return true if h/w = 1-2; h/w > 2 not healthy
//         let answer = this.height / this.weight;
//         if (answer >= 1 && answer <= 2) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     DummyFunction() {

//     }
// } 

// firsHuman = new Human();
// firsHuman.height = 170;
// firsHuman.weight = 60;


// IsHealthy(firsHuman);

// console.log(newUser1);

// secondHuman = new Human();
// secondHuman.height = 170;
// secondHuman.weight = 170;

// console.log(secondHuman.IsHealthy());

//Inheritence
//parent class
// class Human {
//     constructor() {
//         this.height = null;
//         this.weight = null;
//         this.speed = null;
//         this.color = 'red';
//     }

//     IsHealthy() {
//         //return true if h/w = 1-2; h/w > 2 not healthy
//         let answer = this.height / this.weight;
//         if (answer >= 1 && answer <= 2) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     DummyFunction() {

//     }
// } 
// //child class
// class UserClass extends Human {
//     constructor() {
//         super();
//         this.userName = null;
//         this.userId = null;
//         this.dep = null;
//     }
// }

// humanUser = new UserClass();
// humanUser.height = 60;
// humanUser.weight = 60;
// console.log(humanUser);


//Getter Setters
// class User {
//     constructor() {
//         this.country12 = 'IN';
//         this.placeOrder = null;
//     }

//     set Country(c) {
//         console.log('inside setter');
//         this.country12 = 'IN';
//     }
    
//     get Country() {
//         console.log('inside getter');
//         return this.country12;
//     }

//     PlaceOrder() {
//         // if(this.country = 'IN') {
//         this.placeOrder = true;
//         // }
//     }
// }

// indianUser = new User();
// indianUser.PlaceOrder();
// // console.log(indianUser);

// americanUser = new User();
// console.log(americanUser.Country);
// americanUser.Country = 'US';
// americanUser.PlaceOrder();
// americanUser.Country = 'UK'
// console.log(americanUser.Country);

class Employee {
    constructor() {
        this.name = '';
        this.id = '';
    }

    print(obj) {
        console.log(obj);
    }
}

// interface IDisplay {
//     print();
// }