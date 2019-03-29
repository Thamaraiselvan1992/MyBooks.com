
var email = document.getElementById('userEmail');
var phone = document.getElementById('mobileNumber');
var pw = document.getElementById('userPassword');

var userName = document.getElementById('userName');

// storing input from register-form
function store() {

    if (userName.value == '' || phone.value == "") {
        alert("fill the column");
        return false;
    }
    if (phone.value.length == 9 || pw.value.length == 9) {
        alert('minimum 10 letters');
        return false;
    }
    if (email.value == '' || email.value.indexOf("@") == -1) {
        alert("fill the valid email");
        return false;
    }
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('userEmail', email.value);
    localStorage.setItem('phoneNumber', phone.value);
    localStorage.setItem('userPassword', pw.value);
    alert('Register Sucessfully')
    return true;
}

    // stored data from the register-form
    var storedName = localStorage.getItem('userName');
    var storedPw = localStorage.getItem('userPassword');


    // entered data from the login-form
    var username = document.getElementById('logName');
    var userPw = document.getElementById('logPass');

// check if stored data from register-form is equal to entered data in the   login-form
function check() {


    if (username.value == '' || userPw.value == "") {
        alert("fill the column");
        return false;
    }
    // check if stored data from register-form is equal to data from login form
    if (username.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
        return true;
    } else {
        alert('ERROR.');
        return false;
    }
}
// Check browser support
var storedName = localStorage.getItem('userName');
var storedPhone = localStorage.getItem('phoneNumber');
if (storedName!== "undefined") {
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem('userName');
    document.getElementById("result2").innerHTML = storedPhone;
  } 