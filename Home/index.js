var iframe = document.getElementById('iframe');
var elementsList = document.getElementsByClassName('ele');
var user;

for(let i = 0;i<elementsList.length;i++){
    elementsList[i].addEventListener('click',desaperate)
    elementsList[i].setAttribute('onclick','change(this.firstElementChild.innerText),this.classList.toggle("highlighted")');
}

function change(name){    
    iframe.style.height = '350px';
    const json = new XMLHttpRequest();
    json.onload = function() {
        const json = this.responseText;
        const obj = JSON.parse(json);
        document.getElementById("details").innerHTML = `Here are the details about : "${obj[name]}" `;
        iframe.setAttribute('src',`https://www.wikipedia.org/wiki/${obj[name]}`);
    }
    json.open("get","/elements.json");
    json.send();
};
function details(name,className){
    iframe.style.height = '350px';
    document.getElementById("details").innerHTML = `Here are the details about:"${name}"`;
    iframe.setAttribute('src',`https://www.wikipedia.org/wiki/${name}`);
    saperate(className);
}
function unknown(name){
    document.getElementById("details").innerHTML = `<h3>Sorry, No details are available about: <h3>"${name}"`;
    iframe.setAttribute('src','');
    iframe.style.height = '0';
    const elements = document.querySelectorAll('.highlighted');
    for(let i = 0;i<elements.length; i++){
        elements[i].classList.remove('highlighted');
    }
    saperate(name)
}
function saperate(className){
    const element = document.querySelectorAll('.'+className);
    for(i in element){
        element[i].classList.add('highlighted');
    }
};
function desaperate(name,className){
    const elements = document.querySelectorAll('.highlighted');
    for(let i = 0;i<elements.length; i++){
        elements[i].classList.remove('highlighted');
    }
    details(name,className)
}
if(user == undefined){
    const logged_user = new XMLHttpRequest();
    logged_user.onload = function(){
        user = this.responseText;
        if(user !== 'false'){
            document.getElementById('log-in').innerHTML = '<a href="/log-out" class="dropdown-item">Log-out</a>';
            document.getElementById('home').innerHTML = this.responseText;
        }
    }
    logged_user.open('get','/loggeduser');
    logged_user.send();
}
