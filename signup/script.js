var submit = document.getElementById('submit');
var submitOTP = document.getElementById('submit-otp');
var buttons = document.getElementById('buttons');

submit.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('e-mail').value;
    const password = document.getElementById('password').value;
    const addUser = new XMLHttpRequest();
    addUser.onload = function () {
        if (username !== '' && email !== '' && password !== '') {
            if (this.responseText == 'This username is already taken.') {
                document.getElementById('msg').innerText = this.responseText;
            } else if (this.responseText = 'true') {
                buttons.style.display = 'none';
                document.getElementById('already').classList.add("d-none");
                document.getElementById('msg').classList.add("d-none");
                document.getElementById('buttons').classList.add("d-none");
                document.getElementById('otp').classList.remove('d-none');
            }
        } else {
            document.getElementById('msg').innerText = 'Please fill all the fields.';
        }
    }
    addUser.open('post', `/signup/${username},${email},${password}`);
    addUser.send();
});

submitOTP.addEventListener('click', () => {
    const submittedOTP = document.getElementById('enter-otp').value;
    const OTP = new XMLHttpRequest();
    OTP.onload = function () {
        if (this.responseText == 'true') {
            document.getElementsByTagName('body')[0].innerHTML = '<h1 class="text-center">Account created successfully!</h1><p class="text-center"><a href="/log-in" >Log-In</a></p>'
        } else if (this.responseText == 'false') {
            document.getElementById('msg').classList.remove("d-none");
            document.getElementById('msg').innerText = 'Incorrect OTP';
        }
    }
    OTP.open('post', `/otp/${submittedOTP}`);
    OTP.send();
});


