var id = "";
var emailValidation = false;
var passwordValidation = false;
var alertText = '- Check this field -'
var icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 
    1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
    </svg>`;

function validationError(id, index, msg) {
    var div = document.getElementById(id);
    div.classList.add("shake");
    var alert = document.getElementsByClassName('alert');
    alert[index].classList.add('alert');
    texto = msg;
    alert[index].innerHTML = icon + texto;
};

function removerError(id, index) {
    var div = document.getElementById(id);
    div.classList.remove("shake");
    var alert = document.getElementsByClassName('alert');
    alert[index].innerHTML = '';
};
document.getElementById("email").addEventListener("blur", emailBlur);
document.getElementById("email").addEventListener("focus", emailFocus);

document.getElementById("password").addEventListener("blur", passwordBlur);
document.getElementById("password").addEventListener("focus", passwordFocus);

function emailBlur() {
    var email = document.getElementById('email').value;
    if (email.length < 1) {
        validationError('email', 0, 'Email is required.');
    } else {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
            removerError('email', 0)
            emailValidation = true;
        } else {
            validationError('email', 0, 'Wrong email format.');
            emailValidation = false;
        };
    };
};

function emailFocus() {
    removerError('email', 0)
    emailValidation = true;
};

function passwordBlur() {
    var pass = document.getElementById('password');
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
            special = true;
        };
    };
    if (pass.value.length < 1) {
        validationError('password', 1, 'Password is required.');
    } else {
        if (number == true && letter == true && special == false) {
            removerError('password', 1);
            passwordValidation = true;
        } else {;
            validationError('password', 1, 'Must have letters and numbers.')
            passwordValidation = false;
        };
    };
};

function passwordFocus() {
    removerError('password', 1);
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
    if (emailValidation == true && passwordValidation == true) {
        var email = document.getElementById('email');
        var pass = document.getElementById('password');
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

            if (jsonResponse.success == true) {
                openModal();
                texto = 'Success! ' + jsonResponse.msg;
                var info = document.getElementById("info");
                info.innerHTML = texto;
            } else {
                if (jsonResponse["msg"] == undefined) {
                for (x of jsonResponse.errors) {
                };
                openModal();
                texto = x.msg;
                var info = document.getElementById("info");
                info.innerHTML = texto;
                } else {
                    openModal();
                    texto = jsonResponse.msg;
                    var info = document.getElementById("info");
                    info.innerHTML = texto;
                }
            }
            })
            .catch(function (error) {
                openModal();
                texto = jsonResponse.msg;
                var info = document.getElementById("info");
                info.innerHTML = texto;
            });
    } else {
        openModal();
        texto = 'Log In validation Failed';
        var info = document.getElementById("info");
        info.innerHTML = texto;
    }
});