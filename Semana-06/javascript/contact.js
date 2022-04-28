var icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 
    1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
    </svg>`;
var alertText = '- Check this field -'
document.getElementById("name").onblur = () => {
    var alertName = '[ERROR]'
    var name = document.getElementById('name');
    var number = false;
    for (var i = 0; i < name.value.length; i++) {
        if (isNaN(name.value[i]) == false) {
            number = true;
        };
    };
    if (name.value.length < 1) {
        name.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("nameAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        nameValidation = false;
        name.value += alertText;
    } else {
        if (name.value.length > 3 && number == false) {
            name.style = "border-color: none";
            validation++;
        } else {
            name.style = "border: solid 2px red; border-radius: 5px";
            name.classList.add("shake");
            texto = `*Invalid name format. <br> Don't use numbers.`;
            var capa = document.getElementById("nameAlert");
            var p = document.createElement("p");
            p.innerHTML = icon + '  Invalid name.';
            p.classList.add("alert");
            capa.appendChild(p);
            name.value += alertText;
        };
    };
};
document.getElementById("name").onfocus = () => {
    var name = document.getElementById('name');
    name.classList.remove("shake");
    name.style = "border-color: none";
    var list = document.getElementById("nameAlert");
    list.removeChild(list.firstElementChild);
    name.value = name.value.replace(alertText,'');
};
document.getElementById("email").onblur = () => {
    if (email.value.length < 1) {
        email.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("emailAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        emailValidation = false;
        email.value += alertText;
    } else {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
            email.style = "border-color: none";
            emailValidation = true;
        } else {
            email.style = "border: solid 2px red; border-radius: 5px";
            email.classList.add("shake");
            texto = ' Invalid email format'
            var capa = document.getElementById("emailAlert");
            var p = document.createElement("p");
            p.innerHTML = icon + texto;
            p.classList.add("alert");
            capa.appendChild(p);
            emailValidation = false;
            email.value += alertText;
        };
    };
};
document.getElementById("email").onfocus = () => {
    var email = document.getElementById('email');
    email.classList.remove("shake");
    email.style = "border-color: none";
    const list = document.getElementById("emailAlert");
    list.removeChild(list.firstElementChild);
    email.value = email.value.replace(alertText,'');
};
document.getElementById("msg").onblur = () => {
    if (msg.value.length < 1) {
        msg.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("msgAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        msgValidation = false;
        msg.value += alertText;
    } else {
        if (msg.value.length >= 3) {
            msg.style = "border-color: none";
            validation++;
        } else {
            msg.style = "border: solid 2px red; border-radius: 5px";
            msg.classList.add("shake");
            texto = icon + ' Message too short';
            var capa = document.getElementById("msgAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");
            capa.appendChild(p);
            msg.value += alertText;
        };
    };
};
document.getElementById("msg").onfocus = () => {
    var msg = document.getElementById('msg');
    msg.classList.remove("shake");
    msg.style = "border-color: none";
    var list = document.getElementById("msgAlert");
    list.removeChild(list.firstElementChild);
    msg.value = msg.value.replace(alertText,'');
};
var formBtnMsg = document.getElementById('formBtnMsg');
formBtnMsg.addEventListener('click', function(e) {
    e.preventDefault(e);
    var name = document.getElementById('name');
    var lastName = document.getElementById('email');
    var items = document.getElementById('items');
    var msg = document.getElementById('msg');
    var modal = document.getElementById("myModal");
    var body = document.getElementsByTagName("body")[0]; 
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden"; 
    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        };
    };
    texto = `First Name: `+ name.value + `<br> <br>` + `Email: `+ email.value + `<br> <br>` + `Item selected: `+ items.value + `<br> <br>` +`Message: `
    + msg.value;
    var info = document.getElementById("info");
    info.innerHTML = texto;
});