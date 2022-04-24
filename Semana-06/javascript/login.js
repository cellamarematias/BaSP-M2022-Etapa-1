var email = document.getElementById('email');
var emailValidation = false;
var passwordValidation = false;
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
        email.style = "border: solid 2px red; border-radius: 5px";
        texto = 'Invalid email format'
        var capa = document.getElementById("emailalert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.style = "color: red; font-size: 12px; margin: 3px; display: flex; justify-content: space-evenly"
        capa.appendChild(p);
        emailValidation = false;
    };
};
// this is to remove the alert div
document.getElementById("email").onfocus = () => {
    var email = document.getElementById('email');
    email.style = "border-color: none";
    const list = document.getElementById("emailalert");
    list.removeChild(list.firstElementChild);
};
//password validation
var pass = document.getElementById('password');
document.getElementById("password").onblur = () => {
    var specialChart = ["[", "?", "!", ",", "'", "(", ")", "$", "&", ".", "!", "@", "-", "_", "]", "{", "}"];
    var number = false;
    for (var i = 0; i < password.value.length; i++) {
        if (isNaN(password.value[i]) == false) {
            number = true;
        };
    };
    // check for letters
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
        pass.style = "border: solid 2px red; border-radius: 5px";
        texto = 'Invalid password'
        var capa = document.getElementById("passalert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.style = "color: red; font-size: 12px; margin: 3px; display: flex; justify-content: space-evenly"
        capa.appendChild(p);
        passwordValidation = false;
    };
};
// this is to remove the alert div
document.getElementById("password").onfocus = () => {
    var password = document.getElementById('password');
    password.style = "border-color: none";
    const list = document.getElementById("passalert");
    list.removeChild(list.firstElementChild);
};
// button event
var buttonLogIn = document.getElementsByClassName('btn');
buttonLogIn[0].addEventListener('click', function(e) {
    if (emailValidation == true && passwordValidation == true) {
        layer();
        e.preventDefault() // sacar desp
    } else {
        e.preventDefault()
        console.log('faltan validar campos');
    }
});
function layer() {
    const divAlert = document.createElement("div");
    divAlert.className = 'inputInfo';
    const pEmail = document.createElement("p");
    const pPassword = document.createElement("p");
    var form = document.getElementsByTagName('form')
    console.log(form[3])
    form[3].appendChild(divAlert);
    divAlert.appendChild(pEmail);
    divAlert.appendChild(pPassword);
    pEmail.innerHTML = 'User email: ' + '<br> ' + email.value;
    pPassword.innerHTML = 'User password: ' + '<br> ' + pass.value;
};
