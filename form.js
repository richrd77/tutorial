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

function attachNumber() {
    const txtbox = document.getElementById('txt');

    //step 1
    const newListItem = document.createElement('li');

    //step2
    newListItem.innerText = txtbox.value;
    newListItem.style.color = 'red';

    //step3
    document.getElementById('lst').appendChild(newListItem);
}

document.getElementById('btn').addEventListener('click', attachNumber);

function fromarray(arr) {
    arr.forEach(function (e) {

        //step1
        const newLi = document.createElement('li');

        //step2
        newLi.innerText = e;
        newLi.style.color = 'red';

        //step3
        document.getElementById('lst').appendChild(newLi);
    });
}

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