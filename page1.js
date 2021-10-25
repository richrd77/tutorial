document.getElementById('btn').addEventListener('click', function () {
    const givenFirstName = document.getElementById('firstname').value;
    const givenLastName = document.getElementById('lastname').value;
    console.log(givenFirstName);
    console.log(givenLastName);

    // Query string
    // window.location.href = 'http://127.0.0.1:5500/page2.html?fname='+givenFirstName + '&lname=' + givenLastName;

    // cookie - will be deleted when it expires
    // const expireDate = new Date('2021-10-30T00:00:00.000Z');
    //     document.cookie = 'fname='+givenFirstName + ';Expires=' + expireDate;
    //     document.cookie = 'lname='+givenLastName+';Expires=' + expireDate;

    //session storage - will be deleted when the browser is closed or when the session is completed
    // to store/write the value we use "setItem" and pass key and value
    // window.sessionStorage.setItem('key','value');
    // to read/get value we use "getItem" and pass only key
    // window.sessionStorage.setItem('key','value');


// localstorage
window.localStorage.setItem('firstlocal','yes');
window.localStorage.getItem('firstlocal');
    window.location.href = 'http://127.0.0.1:5500/page2.html';
});