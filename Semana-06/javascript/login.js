var email = document.getElementById('email');
var emailValidation = false;
var passwordValidation = false;
var alertText = '[ERROR]'
var icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 
    1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
    </svg>`;
document.getElementById("email").onblur = () => {
    console.log(email.value.indexOf("@"))
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style = "border-color: none";
        emailValidation = true;
    } else {
        email.classList.add("shake");
        texto = 'Invalid email format'
        var capa = document.getElementById("emailalert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        emailValidation = false;
        email.value += ' [error]';
    };
};
document.getElementById("email").onfocus = () => {
    var email = document.getElementById('email');
    email.classList.remove("shake");
    email.style = "border-color: none";
    const list = document.getElementById("emailalert");
    list.removeChild(list.firstElementChild);
    email.value = email.value.replace(' [error]','');
};
var pass = document.getElementById('password');
document.getElementById("password").onblur = () => {
    var specialChart = ["[", "?", "!", ",", "'", "(", ")", "$", "&", ".", "!", "@", "-", "_", "]", "{", "}"];
    var number = false;
    for (var i = 0; i < password.value.length; i++) {
        if (isNaN(password.value[i]) == false) {
            number = true;
        };
    };
    var letter = false;
    for (var i = 0; i < password.value.length; i++) {
        if (isNaN(password.value[i]) == true) {
            letter = true;
        };
    };
    var special = false;
    for (var i = 0; i < password.value.length; i++) {
        if (specialChart.indexOf(password.value[i]) > 0) {
            console.log(specialChart.indexOf(password.value[i]))
            special = true;
        };
    };
    if (number == true && letter == true && special == false) {
        pass.style = "border-color: none";
        passwordValidation = true;
    } else {
        pass.classList.add("shake");
        texto = 'Invalid password'
        var capa = document.getElementById("passalert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        passwordValidation = false;
        pass.value += ' [error]';
    };
};
document.getElementById("password").onfocus = () => {
    var password = document.getElementById('password');
    password.classList.remove("shake");
    password.style = "border-color: none";
    const list = document.getElementById("passalert");
    list.removeChild(list.firstElementChild);
    password.value = password.value.replace(' [error]','');
};
var formBtnMsg = document.getElementById('btn');
formBtnMsg.addEventListener('click', function(e) {
    e.preventDefault(e);
    var name = document.getElementById('email');
    var lastName = document.getElementById('password');
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
    texto = `Email: `+ email.value + `<br> <br>` + `Password: `+ password.value;
    var info = document.getElementById("info");
    info.innerHTML = texto;
});