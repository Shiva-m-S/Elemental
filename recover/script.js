const submit = document.getElementById('submit');
const submitOTP = document.getElementById('submit-otp');
var msg = document.getElementById('msg');
var username;
submit.addEventListener('click', () => {
    username = document.getElementById('username').value;
    if (username) {
        const recover = new XMLHttpRequest();
        recover.onload = function () {
            if (this.responseText == 'true') {
                document.getElementById('links').classList.add("d-none");
                document.getElementById('buttons').classList.add('d-none');
                document.getElementById('otp').classList.remove('d-none');
                msg.innerHTML = '&nbsp';
            } else if (this.responseText == 'false') {
                msg.innerHTML = 'Incorrect username.';
            }
        }
        recover.open('get', `/recoveryOTP/${username}`)
        recover.send();
    } else {
        document.getElementById('msg').innerText = 'Please enter username.';
    }
})

submitOTP.addEventListener('click', () => {
    const otp = document.getElementById('enter-otp').value;
    if (otp !== '') {
        msg.innerHTML = '&nbsp';
        const OTP = new XMLHttpRequest();
        OTP.onload = function () {
            if (this.responseText == 'true') {
                msg.innerHTML = '<p class="text-success">Correct OTP.</p><br><a href="/changePassword">Create new password;</a><br><a href="http://localhost:8000">Go to homepage</a>';
            } else if (this.responseText == 'false') {
                msg.innerHTML = 'Incorrect OTP';
            }
        }
        OTP.open('post', `/recovery-otp/${username}/${otp}`)
        OTP.send();
    } else {
        document.getElementById('msg').innerText = 'Please enter otp.';
    }

})
