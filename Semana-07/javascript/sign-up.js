var nameValidation = false;
var lastNameValidation = false;
var dniValidation = false;
var dateOfBirthValidation = false;
var phoneValidation = false;
var addressValidation = false;
var cityValidation = false;
var zipCodeValidation = false;
var emailValidation = false;
var passwordValidation = false;
var passwordConfirmValidation = false;
var alertText = '- Check this field -';
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
            nameValidation = true;
        } else {
            name.classList.add("shake");
            texto = `*Invalid name format. <br> Don't use numbers.`
            var capa = document.getElementById("nameAlert");
            var p = document.createElement("p");
            p.innerHTML = icon + '*Invalid name.';
            p.classList.add("alert");
            capa.appendChild(p);
            name.value += alertText;
            nameValidation = false;
        };
    }
};
document.getElementById("name").onfocus = () => {
    var name = document.getElementById('name');
    name.classList.remove("shake");
    name.style = "border-color: none";
    var list = document.getElementById("nameAlert");
    list.removeChild(list.firstElementChild);
    name.value = name.value.replace(alertText,'');
    nameValidation = true;
};
document.getElementById("lastName").onblur = () => {
    var lastName = document.getElementById('lastName');
    var number = false;
    for (var i = 0; i < lastName.value.length; i++) {
        if (isNaN(lastName.value[i]) == false) {
            number = true;
        };
    };
    if (lastName.value.length < 1) {
        lastName.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("lastNameAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        lastName.value += alertText;
        lastNameValidation = false;
    } else {
        if (lastName.value.length > 3 && number == false) {
            lastName.style = "border-color: none";
            lastNameValidation = true;
        } else {
            lastName.classList.add("shake");
            texto = icon + `*Invalid last name format. <br> Don't use numbers.`;
            var capa = document.getElementById("lastNameAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");
            capa.appendChild(p);
            lastName.value += alertText;
            lastNameValidation = false;
        };
    };
};
document.getElementById("lastName").onfocus = () => {
    var lastName = document.getElementById('lastName');
    lastName.classList.remove("shake");
    lastName.style = "border-color: none";
    var list = document.getElementById("lastNameAlert");
    list.removeChild(list.firstElementChild);
    lastName.value = lastName.value.replace(alertText,'');
    lastNameValidation = true;
};
document.getElementById("dni").onblur = () => {
    var dni = document.getElementById('dni');
    if (dni.value.length < 1) {
        dni.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("dniAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        dni.value += alertText;
        dniValidation = false;
    } else {
        if (dni.value.length > 7 && isNaN(dni.value) == false) {
            dni.style = "border-color: none";
            dniValidation = true;
        } else {
            dni.classList.add("shake");
            texto = icon + '*Invalid dni format. <br> Only numbers.';
            var capa = document.getElementById("dniAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            dni.value += alertText;
            dniValidation = false;
        };
    };
};
document.getElementById("dni").onfocus = () => {
    var dni = document.getElementById('dni');
    dni.classList.remove("shake");
    dni.style = "border-color: none";
    var list = document.getElementById("dniAlert");
    list.removeChild(list.firstElementChild);
    dni.value = dni.value.replace(alertText,'');
    dniValidation = true;
};
document.getElementById("dateOfBirth").onblur = () => {
    var dateOfBirth = document.getElementById('dateOfBirth');
    var date = dateOfBirth.value.replace(/[/]/g, '');
    var day = date.substr(2,2);
    var month = date.substr(0,2);
    var year = date.substr(4,4);

    var slash = 0;
    for (var i = 0; i < dateOfBirth.value.length; i++) {
        if (dateOfBirth.value[i] == '/') {
            slash++;
        };
    };
    console.log(day)
    console.log(month)
    console.log(year)


    if (dateOfBirth.value.length < 1) {
        dateOfBirth.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("dateOfBirthAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        dateOfBirth.value += alertText;
        dateOfBirthValidation = false;
    } else {
        if (slash == 2 && isNaN(date) == false && day <= 31 && month <= 12 && year > 1900 && year <= 2004) {
            dateOfBirth.style = "border-color: none";
            dateOfBirthValidation = true;
        } else {
            dateOfBirth.classList.add("shake");
            texto = icon + '*Invalid format. <br> Please use this: mm/dd/yyyy';
            var capa = document.getElementById("dateOfBirthAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            dateOfBirth.value += alertText;
            dateOfBirthValidation = false;
        };
    };

};
document.getElementById("dateOfBirth").onfocus = () => {
    var dateOfBirth = document.getElementById('dateOfBirth');
    dateOfBirth.classList.remove("shake");
    dateOfBirth.style = "border-color: none";
    var list = document.getElementById("dateOfBirthAlert");
    list.removeChild(list.firstElementChild);
    dateOfBirth.value = dateOfBirth.value.replace(alertText,'');
};
document.getElementById("dateOfBirth").onfocus = () => {
    var dateOfBirth = document.getElementById('dateOfBirth');
    dateOfBirth.classList.remove("shake");
    dateOfBirth.style = "border-color: none";
    var list = document.getElementById("dateOfBirthAlert");
    list.removeChild(list.firstElementChild);
    dateOfBirth.value = dateOfBirth.value.replace(alertText,'');
    dateOfBirthValidation = true;
};
document.getElementById("phone").onblur = () => {
    var phone = document.getElementById('phone');
    if (phone.value.length < 1) {
        phone.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("phoneAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        phone.value += alertText;
        phoneValidation = false;
    } else {
        if (phone.value.length == 10 && isNaN(phone.value) == false) {
            phone.style = "border-color: none";
            phoneValidation = true;
        } else {
            phone.classList.add("shake");
            texto = icon + '*Invalid phone. <br> Must containt 10 digits.';
            var capa = document.getElementById("phoneAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            phone.value += alertText;
            phoneValidation = false;
        };
    };
};
document.getElementById("phone").onfocus = () => {
    var phone = document.getElementById('phone');
    phone.classList.remove("shake");
    phone.style = "border-color: none";
    var list = document.getElementById("phoneAlert");
    list.removeChild(list.firstElementChild);
    phone.value = phone.value.replace(alertText,'');
    phoneValidation = true;
};
document.getElementById("address").onblur = () => {
    var address = document.getElementById('address');
    var addressSpaces = address.value.replaceAll(' ','');
    var number = false;
    for (var i = 0; i < addressSpaces.length; i++) {
        if (isNaN(addressSpaces[i]) == false) {
            number = true;
        };
    };
    var letter = false;
    for (var i = 0; i < addressSpaces.length; i++) {
        if (isNaN(addressSpaces[i]) == true) {
            letter = true;
        };
    };
    if (address.value.length < 1) {
        address.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("addressAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        address.value += alertText;
        addressValidation = false;
    } else {
        if (address.value.length > 5 && number == true && letter == true && address.value.indexOf(' ') > 0 
            && address.value.indexOf(' ') < address.value.length-1 && address.value.length > address.value.lastIndexOf(' ')) {
            address.style = "border-color: none";
            addressValidation = true;
        } else {
            address.classList.add("shake");
            texto = icon + '*Invalid address format <br> Please use this: Street 123.';
            var capa = document.getElementById("addressAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");
            capa.appendChild(p);
            address.value += alertText;
            addressValidation = false;
        };
    };
    };
document.getElementById("address").onfocus = () => {
    var address = document.getElementById('address');
    address.classList.remove("shake");
    address.style = "border-color: none";
    var list = document.getElementById("addressAlert");
    list.removeChild(list.firstElementChild);
    address.value = address.value.replace(alertText,'');
    addressValidation = true;
};
document.getElementById("city").onblur = () => {
    if (city.value.length < 1) {
        city.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("cityAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        city.value += alertText;
        cityValidation = false;
    } else {
        if (city.value.length > 3) {
            city.style = "border-color: none";
            cityValidation = true;
        } else {
            city.classList.add("shake");
            texto = icon + '*Invalid city format';
            var capa = document.getElementById("cityAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");
            capa.appendChild(p);
            city.value += alertText;
            cityValidation = false;
        };
    };
};
document.getElementById("city").onfocus = () => {
    var city = document.getElementById('city');
    city.classList.remove("shake");
    city.style = "border-color: none";
    var list = document.getElementById("cityAlert");
    list.removeChild(list.firstElementChild);
    city.value = city.value.replace(alertText,'');
    cityValidation = true;
};
document.getElementById("zipCode").onblur = () => {
    var zipCode = document.getElementById('zipCode');
    if (zipCode.value.length < 1) {
        zipCode.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("zipCodeAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        zipCode.value += alertText;
        zipCodeValidation = false;
    } else {
        if (zipCode.value.length >= 4 && zipCode.value.length <= 5 && isNaN(zipCode.value) == false) {
            zipCode.style = "border-color: none";
            zipCodeValidation = true;
        } else {
            zipCode.classList.add("shake");
            texto = '*Invalid Zip Code format <br> Use only number(4 to 5)'
            var capa = document.getElementById("zipCodeAlert");
            var p = document.createElement("p");
            p.innerHTML = icon + texto;
            p.classList.add("alert");
            capa.appendChild(p);
            zipCode.value += alertText;
            zipCodeValidation = false;
        };
    };
};
document.getElementById("zipCode").onfocus = () => {
    var zipCode = document.getElementById('zipCode');
    zipCode.classList.remove("shake");
    zipCode.style = "border-color: none";
    var list = document.getElementById("zipCodeAlert");
    list.removeChild(list.firstElementChild);
    zipCode.value = zipCode.value.replace(alertText,'');
    zipCodeValidation = true;
};
document.getElementById("email").onblur = () => {
    var email = document.getElementById('email');
    if (email.value.length < 1) {
        email.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("emailAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        email.value += alertText;
        emailValidation = false;
    } else {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
            email.style = "border-color: none";
            emailValidation = true;
        } else {
            email.classList.add("shake");
            texto = icon + '*Invalid email format';
            var capa = document.getElementById("emailAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            email.value += alertText;
            emailValidation = false;
        };
    };
};
document.getElementById("email").onfocus = () => {
    var email = document.getElementById('email');
    email.classList.remove("shake");
    email.style = "border-color: none";
    var list = document.getElementById("emailAlert");
    list.removeChild(list.firstElementChild);
    email.value = email.value.replace(alertText,'');
    emailValidation = true;
};
document.getElementById("password").onblur = () => {
    var password = document.getElementById('password');
    var specialChart = ["[", "?", "!", ",", "'", "(", ")", "$", "&", ".", "!", "@", "-", "_", "]", "{", "}"];
    var passwordConfirm = document.getElementById('passwordConfirm');
    var number = false;
    for (var i = 0; i < password.value.length; i++) {
        if (isNaN(password.value[i]) == false) {
            number = true;
        };
    };
    console.log(number)
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
    if (password.value.length < 1) {
        password.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("passwordAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        password.value += alertText;
        passwordValidation = false;
    } else {
        if (password.value.length > 8 && number == true && letter == true && special == false) {
            password.style = "border-color: none";
            passwordValidation = true;
        } else {
            password.classList.add("shake");
            texto = icon + '*Use at least 8 charaters. <br> Use numbers and letters.';
            var capa = document.getElementById("passwordAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            password.value += alertText;
            passwordValidation = false;
        };
    };
};
document.getElementById("password").onfocus = () => {
    var password = document.getElementById('password');
    password.classList.remove("shake");
    password.style = "border-color: none";
    var list = document.getElementById("passwordAlert");
    list.removeChild(list.firstElementChild);
    password.value = password.value.replace(alertText,'');
    passwordValidation = true;
};
document.getElementById("passwordConfirm").onblur = () => {
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('passwordConfirm');
    if (passwordConfirm.value.length < 1) {
        passwordConfirm.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("passwordConfirmAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        passwordConfirm.value += alertText;
        passwordConfirmValidation = false;
    } else {
        if (password.value == passwordConfirm.value) {
            passwordConfirm.style = "border-color: none";
            passwordConfirmValidation = true;
        } else {
            passwordConfirm.classList.add("shake");
            texto = icon + '*Password does not match';
            var capa = document.getElementById("passwordConfirmAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            passwordConfirm.value += alertText;
            passwordConfirmValidation = false;
        };
    };
};
document.getElementById("passwordConfirm").onfocus = () => {
    var passwordConfirm = document.getElementById('passwordConfirm');
    passwordConfirm.classList.remove("shake");
    passwordConfirm.style = "border-color: none";
    var list = document.getElementById("passwordConfirmAlert");
    list.removeChild(list.firstElementChild);
    passwordConfirm.value = passwordConfirm.value.replace(alertText,'');
    passwordConfirmValidation = true;
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
var btnSignUp = document.getElementsByClassName('btn-l');
btnSignUp[0].addEventListener('click', function(e) {
    e.preventDefault(e);
    console.log(nameValidation, lastNameValidation, dniValidation, dateOfBirthValidation, phoneValidation, addressValidation, 
        cityValidation, zipCodeValidation, emailValidation, passwordValidation, passwordConfirmValidation)
    if (nameValidation == true && lastNameValidation == true && dniValidation == true 
        && dateOfBirthValidation == true && phoneValidation == true && addressValidation == true
        && cityValidation == true && zipCodeValidation == true && emailValidation == true 
        && passwordValidation == true && passwordConfirmValidation == true) {
            var name = document.getElementById('name');
            var lastName = document.getElementById('lastName');
            var dni = document.getElementById('dni');
            var dateOfBirth = document.getElementById('dateOfBirth');
            var phone = document.getElementById('phone');
            var address = document.getElementById('address');
            var city = document.getElementById('city');
            var zip = document.getElementById('zipCode');
            var email = document.getElementById('email');
            var password = document.getElementById('password');
            var passwordConfirm = document.getElementById('passwordConfirm');

            var url ="https://basp-m2022-api-rest-server.herokuapp.com/signup?" +
            new URLSearchParams({
            name: name.value,
            lastName: lastName.value,
            dni: dni.value,
            dob: dateOfBirth.value,
            phone: phone.value,
            address: address.value,
            city: city.value,
            zip: zip.value,
            email: email.value,
            password: password.value,
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
                let valores = Object.values(jsonResponse.data); // valores = ["Scott", "Negro", true, 5];
                for (var key in jsonResponse.data) {
                    if (jsonResponse.data.hasOwnProperty(key)) {
                        texto += key + ": " + jsonResponse.data[key] + '<br>';
                    }
                }
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
