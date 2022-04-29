var email = document.getElementById('email');
var emailValidation = false;
var passwordValidation = false;
var alertText = '- Check this field -'
var icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 
    1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
    </svg>`;
document.getElementById("email").onblur = () => {
    if (email.value.length < 1) {
        email.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("emailalert");
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
            email.classList.add("shake");
            texto = 'Invalid email format'
            var capa = document.getElementById("emailalert");
            var p = document.createElement("p");
            p.innerHTML = icon + texto;
            p.classList.add("alert");
            capa.appendChild(p);
            emailValidation = false;
            email.value += alertText;
        };
    }

};
document.getElementById("email").onfocus = () => {
    var email = document.getElementById('email');
    email.classList.remove("shake");
    email.style = "border-color: none";
    const list = document.getElementById("emailalert");
    list.removeChild(list.firstElementChild);
    email.value = email.value.replace(alertText,'');
    emailValidation = true;
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
    if (pass.value.length < 1) {
        pass.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("passalert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        passwordValidation = false;
        pass.value += alertText;
    } else {
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
            pass.value += alertText;
        };
    };
};
document.getElementById("password").onfocus = () => {
    var password = document.getElementById('password');
    password.classList.remove("shake");
    password.style = "border-color: none";
    const list = document.getElementById("passalert");
    list.removeChild(list.firstElementChild);
    password.value = password.value.replace(alertText,'');
    passwordValidation = true;
};

function openModal() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];  
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
};

document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(emailValidation)
    console.log(passwordValidation)
    if (emailValidation == true && passwordValidation == true) {
        var email = document.getElementById('email');
        var pass = document.getElementById('password');
        console.log(email + pass)
        var url =
            "https://basp-m2022-api-rest-server.herokuapp.com/login?" +
            new URLSearchParams({
            email: email.value,
            password: pass.value,
            }).toString();

        fetch(url)
            .then(function (res) {
            return res.json();
            })
            .then(function (jsonResponse) {
            // lógica +
            console.log(jsonResponse);
            //console.log(jsonResponse.errors)

            if (jsonResponse.success == true) {
                console.log(jsonResponse.msg);
                openModal();
                texto = 'Success! ' + jsonResponse.msg;
                var info = document.getElementById("info");
                info.innerHTML = texto;
            } else {
                console.log(jsonResponse["msg"] == undefined);
                if (jsonResponse["msg"] == undefined) {
                for (x of jsonResponse.errors) {
                    console.log(x.msg);
                };
                openModal();
                texto = x.msg;
                var info = document.getElementById("info");
                info.innerHTML = texto;
                } else {
                    openModal();
                    texto = jsonResponse.msg;
                    console.log(jsonResponse.msg);
                    var info = document.getElementById("info");
                    info.innerHTML = texto;
                }
            }
            })
            .catch(function (error) {
            // lógica -
            console.log(error);
            });
    } else {
        openModal();
        texto = 'Log In validation Failed';
        var info = document.getElementById("info");
        info.innerHTML = texto;
    }
});