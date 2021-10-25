document.getElementById('fname').innerText = document.cookie.split(';')[0].split('=')[1];
document.getElementById('lname').innerText = document.cookie.split(';')[1].split('=')[1];