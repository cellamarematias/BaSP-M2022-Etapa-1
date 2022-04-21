var email = document.getElementById('email');

document.getElementById("email").onblur = () => {
    console.log(email.value.indexOf("@"))
    if (email.value.includes("@") && email.value.includes(".") && email.value.length > 4 && email.value.indexOf("@") > 0) {
        email.style = "border-color: none";
    } else {
        email.style = "border: solid 2px red; border-radius: 5px";
        texto = 'Invalid email format'
        var capa = document.getElementById("emailalert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 10px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("email").onfocus = () => {
    const list = document.getElementById("emailalert");
    list.removeChild(list.firstElementChild);
};
//password validation
var pass = document.getElementById('password');

document.getElementById("password").onblur = () => {
    console.log(pass.value.indexOf("@"))
    if (pass.value.includes("1") && pass.value.includes("2") && pass.value.length > 4 && pass.value.indexOf("3") > 0) {
        pass.style = "border-color: none";
    } else {
        pass.style = "border: solid 2px red; border-radius: 5px";
        texto = 'Invalid password'
        var capa = document.getElementById("passalert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 10px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("password").onfocus = () => {
    const list = document.getElementById("passalert");
    list.removeChild(list.firstElementChild);
};
