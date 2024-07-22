const submit = document.getElementById('submit');
let password;
submit.addEventListener('click', () => {
    password = document.getElementById('password').value;
    confirmpassword = document.getElementById('confirmpassword').value;
    let newPassword;
    if (password != '' || confirmpassword != '') {
        if (password == confirmpassword) {
            newPassword = password;
            const changePassword = new XMLHttpRequest()
            changePassword.onload = function () {
                if (this.responseText == 'true') {
                    console.log(this.responseText.length)
                    document.getElementsByTagName('body')[0].innerHTML = '<h1 class="text-center">Password changed successfully!</h1><p class="text-center"><a href="http://localhost:8000/log-in">Log-in</a></p>';
                } else {
                    document.getElementById('msg').innerHTML = 'Error: Please try after some time.';
                }
            }
            changePassword.open('get', `/changeMyPassword/${newPassword}`);
            changePassword.send();
        } else {
            document.getElementById('msg').innerHTML = 'Both fields does not match.';
        }
    } else {
        document.getElementById('msg').innerHTML = 'Please fill all the fields.';

    }
});
