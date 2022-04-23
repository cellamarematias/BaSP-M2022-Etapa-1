var password = document.getElementById('password');
var passwordConfirm = document.getElementById('passwordConfirm');
// NAME validation
document.getElementById("name").onblur = () => {
    var name = document.getElementById('name');
    if (name.value.length > 3) {
        name.style = "border-color: none";
    } else {
        name.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Invalid name format'
        var capa = document.getElementById("nameAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("name").onfocus = () => {
    var name = document.getElementById('name');
    name.style = "border-color: none";
    const list = document.getElementById("nameAlert");
    list.removeChild(list.firstElementChild);
};
// EMAIL validation
document.getElementById("email").onblur = () => {
    var email = document.getElementById('email');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style = "border-color: none";
    } else {
        email.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Invalid email format'
        var capa = document.getElementById("emailAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("email").onfocus = () => {
    var email = document.getElementById('email');
    email.style = "border-color: none";
    const list = document.getElementById("emailAlert");
    list.removeChild(list.firstElementChild);
};
// EMAIL validation
document.getElementById("password").onblur = () => {
    var password = document.getElementById('password');
    if (password.value.length > 3) {
        password.style = "border-color: none";
    } else {
        password.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Invalid password format'
        var capa = document.getElementById("passwordAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("password").onfocus = () => {
    var password = document.getElementById('password');
    password.style = "border-color: none";
    const list = document.getElementById("passwordAlert");
    list.removeChild(list.firstElementChild);
};

// Confirm Password Validation
document.getElementById("passwordConfirm").onblur = () => {
    var passwordConfirm = document.getElementById('passwordConfirm');
    if (passwordConfirm.value.length > 3) {
        passwordConfirm.style = "border-color: none";
    } else {
        passwordConfirm.style = "border: solid 2px red; border-radius: 5px";
        texto = '*The confirm password does not match';
        var capa = document.getElementById("passwordConfirmAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("passwordConfirm").onfocus = () => {
    var passwordConfirm = document.getElementById('passwordConfirm');
    passwordConfirm.style = "border-color: none";
    const list = document.getElementById("passwordConfirmAlert");
    list.removeChild(list.firstElementChild);
};