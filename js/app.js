var Name = document.getElementById('name');
var Pass = document.getElementById('pass');
var Confirm_Pass = document.getElementById('confirm-pass');
var Email = document.getElementById('email');
var Location = document.getElementById('location');
var message = document.getElementById('message');

var NameMsg = document.getElementById('message1');
var PassMsg = document.getElementById('message2');
var ConfirmPassMsg = document.getElementById('message3');
var EmailMsg = document.getElementById('message4');
var LocationMsg = document.getElementById('message5');

function checkName() {
    var userName = Name.value;
    if (userName.length < 5 && userName.length > 0) {
        NameMsg.className = 'warning';
        Name.className = "border-warning name warning";
        NameMsg.textContent = 'Name must have at least 5 characters!';
    } else if (Name.value === '') {
        NameMsg.className = '';
        Name.className = 'name';
        NameMsg.textContent = '';
    } else {
        NameMsg.textContent = '';
        NameMsg.className = 'correct';
        Name.className = 'border-correct name correct'
    }
}

function validateEmail() {
    var valid_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (valid_email.test(Email.value) == true) {
        EmailMsg.className = 'correct';
        EmailMsg.textContent = '';
        Email.className = 'correct email border-correct';
    } else if (Email.value === "") {
        EmailMsg.textContent = '';
        Email.className = 'email';
    } else if (valid_email.test(Email.value) == false) {
        EmailMsg.className = 'warning';
        Email.className = 'warning email border-warning';
        EmailMsg.textContent = 'Email address is incorrect! Try again!';
    }
}


Email.addEventListener('blur', validateEmail, false);
Name.addEventListener('blur', checkName, false);


/*
 function location_validation() {
 var valid_location = ["poland" , "usa" , "italy" , "spain"];
 if (valid_location.test(Location.onclick().value) == true) {
 LocationMsg.textContent="correct";
 Location.className="correct location border-correct"
 } else if (Location.value === "") {
 Location.className = "location";
 LocationMsg.textContent = "";
 LocationMsg.className = "";
 }
 }
 */
document.getElementsByName('location')[0].onchange = function () {
    if (this.value == 'your location') {
        LocationMsg.textContent = "warning";
        Location.className = "warning location border-warning"
    } else {
        LocationMsg.textContent = "correct";
        Location.className = "correct location border-correct"
    }
};


/*
 document.addEventListener("DOMContentLoaded", function() {
 document.getElementById('location').addEventListener('click', function(){
 var n = (document.getElementById('odp').value);
 var text = "";
 document.getElementById('wynik').value=text;
 });
 });
 Location.addEventListener('blur', location_validation, false);
 Location.addEventListener('click')
 */







/*
 Name.addEventListener('focus', tipUserName, false);

 function tipUserName() {
 var userName = Name.value;
 if (userName.length < 5) {
 NameMsg.className = 'tip';
 NameMsg.innerHTML = 'Name must be at least 5 characters';
 }
 }


 function checkMessage() {
 var mess = message.value;
 if (mess.length < 20) {
 messageMsg.textContent = 'Your message is too short!';
 messageMsg.ClassName = 'warning';
 } else {
 messageMsg.textContent = '';
 }
 }

 function tipMessage() {
 messageMsg.className = 'tip';
 messageMsg.innerHTML = 'Your message should have at least 20 letters';
 }

 message.addEventListener('focus', tipMessage, false);
 message.addEventListener('blur', checkMessage, false);

 */
/*

 function checkUsername() {                        // Declare function
 var username = el.value;                        // Store username in variable
 if (username.length < 5)  {                      // If username < 5 characters
 elMsg.className = 'warning';                  // Change class on message
 elMsg.textContent = 'Not long enough, yet...';// Update message
 } else {                                        // Otherwise
 elMsg.textContent = '';                       // Clear the message
 }
 }

 function tipUsername() {                          // Declare function
 elMsg.className = 'tip';                        // Change class for message
 elMsg.innerHTML = 'Username must be at least 5 characters'; // Add message
 }

 var el = document.getElementById('name');     // Username input
 var elMsg = document.getElementById('f1');  // Element to hold message

 // When the username input gains / loses focus call functions above:
 el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
 el.addEventListener('blur', checkUsername, false);// blur call checkUsername()

 /* LONGER VERSION WITH IE8 (and lower) compatibility

 if (el.addEventListener) {
 el.addEventListener('focus', tipUsername, false);
 el.addEventListener('blur', checkUsername, false);
 } else {
 el.attachEvent('onfocus', tipUsername);
 el.attachEvent('onblur', checkUsername);
 }

 */
