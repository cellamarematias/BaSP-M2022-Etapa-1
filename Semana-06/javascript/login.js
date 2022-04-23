var email = document.getElementById('email');
var emailValidation = false;
var passwordValidation = false;
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
        p.innerHTML = texto;
        p.style = "color: red; font-size: 10px"
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
    if (number == true && letter == true) {
        pass.style = "border-color: none";
        passwordValidation = true;
    } else {
        pass.style = "border: solid 2px red; border-radius: 5px";
        texto = 'Invalid password'
        var capa = document.getElementById("passalert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 10px"
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
