const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    if (username.value !== '' && password.value !== '') {
        const login = new XMLHttpRequest();
        login.onload = function () {
            if (this.responseText == 'false') {
                document.getElementById('msg').innerHTML = 'Incorrect username or password.';
            } else {
                document.getElementsByTagName('body')[0].innerHTML = `<h1 class="text-center">${this.responseText} Logged-In successfully.</h1><p class="text-center"><a href='http://localhost:8000/'>Go to homepage</a></p>`;
            }
        }
        login.open('post', `/log-in/${username.value}/${password.value}`);
        login.send();
    } else {
        document.getElementById('msg').innerHTML = 'Please fill all the fields.';
    }
})