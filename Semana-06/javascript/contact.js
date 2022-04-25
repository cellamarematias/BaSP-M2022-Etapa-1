var icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 
    1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
    </svg>`;
document.getElementById("name").onblur = () => {
    var alertName = '[ERROR]'
    var name = document.getElementById('name');
    var number = false;
    for (var i = 0; i < name.value.length; i++) {
        if (isNaN(name.value[i]) == false) {
            number = true;
        };
    };
    if (name.value.length > 3 && number == false) {
        name.style = "border-color: none";
        validation++;
    } else {
        name.style = "border: solid 2px red; border-radius: 5px";
        texto = `*Invalid name format. <br> Don't use numbers.`
        var capa = document.getElementById("nameAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + '*Invalid name.';
        p.style = "color: red; font-size: 12px; margin: 5px; display: flex; justify-content: space-evenly"
        capa.appendChild(p);
        name.value += ' [error]';
    };
};
document.getElementById("name").onfocus = () => {
    var name = document.getElementById('name');
    name.style = "border-color: none";
    var list = document.getElementById("nameAlert");
    list.removeChild(list.firstElementChild);
    name.value = name.value.replace(' [error]','');
};
document.getElementById("email").onblur = () => {
    console.log(email.value.indexOf("@"))
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style = "border-color: none";
        emailValidation = true;
    } else {
        email.style = "border: solid 2px red; border-radius: 5px";
        texto = 'Invalid email format'
        var capa = document.getElementById("emailAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.style = "color: red; font-size: 12px; margin: 3px; display: flex; justify-content: space-evenly"
        capa.appendChild(p);
        emailValidation = false;
        email.value += ' [error]';
    };
};
document.getElementById("email").onfocus = () => {
    var email = document.getElementById('email');
    email.style = "border-color: none";
    const list = document.getElementById("emailAlert");
    list.removeChild(list.firstElementChild);
    email.value = email.value.replace(' [error]','');
};
document.getElementById("msg").onblur = () => {
    if (msg.value.length >= 3) {
        msg.style = "border-color: none";
        validation++;
    } else {
        msg.style = "border: solid 2px red; border-radius: 5px";
        texto = icon + '*Message too short';
        var capa = document.getElementById("msgAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px; margin: 5px; display: flex; justify-content: space-evenly"
        capa.appendChild(p);
        msg.value += ' [error]';
    };
};
document.getElementById("msg").onfocus = () => {
    var msg = document.getElementById('msg');
    msg.style = "border-color: none";
    var list = document.getElementById("msgAlert");
    list.removeChild(list.firstElementChild);
    msg.value = msg.value.replace(' [error]','');
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