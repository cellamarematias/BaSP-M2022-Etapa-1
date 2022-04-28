var validation = 0;
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
            validation++;
        } else {
            name.classList.add("shake");
            texto = `*Invalid name format. <br> Don't use numbers.`
            var capa = document.getElementById("nameAlert");
            var p = document.createElement("p");
            p.innerHTML = icon + '*Invalid name.';
            p.classList.add("alert");
            capa.appendChild(p);
            name.value += alertText;
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
        lastNameValidation = false;
        lastName.value += alertText;
    } else {
        if (lastName.value.length > 3 && number == false) {
            lastName.style = "border-color: none";
            validation++;
        } else {
            lastName.classList.add("shake");
            texto = icon + `*Invalid last name format. <br> Don't use numbers.`;
            var capa = document.getElementById("lastNameAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");
            capa.appendChild(p);
            lastName.value += alertText;
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
        dniValidation = false;
        dni.value += alertText;
    } else {
        if (dni.value.length > 7 && isNaN(dni.value) == false) {
            dni.style = "border-color: none";
            validation++;
        } else {
            dni.classList.add("shake");
            texto = icon + '*Invalid dni format. <br> Only numbers.';
            var capa = document.getElementById("dniAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            dni.value += alertText;
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
};
document.getElementById("dateOfBirth").onblur = () => {
    var dateOfBirth = document.getElementById('dateOfBirth');
    var day = dateOfBirth.value.substr(0,2);
    var month = dateOfBirth.value.substr(2,2);
    var year = dateOfBirth.value.substr(4,6);
    var date = dateOfBirth.value.replace(/[/]/g, '');
    var slash = 0;
    for (var i = 0; i < dateOfBirth.value.length; i++) {
        if (dateOfBirth.value[i] == '/') {
            slash++;
        };
    };
    if (dateOfBirth.value.length < 1) {
        dateOfBirth.classList.add("shake");
        texto = 'This field is required.'
        var capa = document.getElementById("dateOfBirthAlert");
        var p = document.createElement("p");
        p.innerHTML = icon + texto;
        p.classList.add("alert");
        capa.appendChild(p);
        dateOfBirthValidation = false;
        dateOfBirth.value += alertText;
    } else {
        if (slash == 2 && isNaN(date) == false) {
            dateOfBirth.style = "border-color: none";
            validation++;
        } else {
            dateOfBirth.classList.add("shake");
            texto = icon + '*Invalid format. <br> Please use this: dd/mm/yy';
            var capa = document.getElementById("dateOfBirthAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            dateOfBirth.value += alertText;
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
        phoneValidation = false;
        phone.value += alertText;
    } else {
        if (phone.value.length == 10 && isNaN(phone.value) == false) {
            phone.style = "border-color: none";
            validation++;
        } else {
            phone.classList.add("shake");
            texto = icon + '*Invalid phone. <br> Must containt 10 digits.';
            var capa = document.getElementById("phoneAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            phone.value += alertText;
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
        addressValidation = false;
        address.value += alertText;
    } else {
        if (address.value.length > 5 && number == true && letter == true && address.value.indexOf(' ') > 0 
            && address.value.indexOf(' ') < address.value.length-1 && address.value.length > address.value.lastIndexOf(' ')) {
            address.style = "border-color: none";
            validation++;
        } else {
            address.classList.add("shake");
            texto = icon + '*Invalid address format <br> Please use this: Street 123.';
            var capa = document.getElementById("addressAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");
            capa.appendChild(p);
            address.value += alertText;
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
        cityValidation = false;
        city.value += alertText;
    } else {
        if (city.value.length > 3) {
            city.style = "border-color: none";
            validation++;
        } else {
            city.classList.add("shake");
            texto = icon + '*Invalid city format';
            var capa = document.getElementById("cityAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");
            capa.appendChild(p);
            city.value += alertText;
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
        zipCodeValidation = false;
        zipCode.value += alertText;
    } else {
        if (zipCode.value.length >= 4 && zipCode.value.length <= 5 && isNaN(zipCode.value) == false) {
            zipCode.style = "border-color: none";
            validation++;
        } else {
            zipCode.classList.add("shake");
            texto = '*Invalid Zip Code format <br> Use only number(4 to 5)'
            var capa = document.getElementById("zipCodeAlert");
            var p = document.createElement("p");
            p.innerHTML = icon + texto;
            p.classList.add("alert");
            capa.appendChild(p);
            zipCode.value += alertText;
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
        emailValidation = false;
        email.value += alertText;
    } else {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
            email.style = "border-color: none";
            validation++;
        } else {
            email.classList.add("shake");
            texto = icon + '*Invalid email format';
            var capa = document.getElementById("emailAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            email.value += alertText;
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
        passwordValidation = false;
        password.value += alertText;
    } else {
        if (password.value.length > 8 && number == true && letter == true && special == false) {
            password.style = "border-color: none";
            validation++;
        } else {
            password.classList.add("shake");
            texto = icon + '*Use at least 8 charaters. <br> Use numbers and letters.';
            var capa = document.getElementById("passwordAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            password.value += alertText;
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
        passwordConfirmValidation = false;
        passwordConfirm.value += alertText;
    } else {
        if (password.value == passwordConfirm.value) {
            passwordConfirm.style = "border-color: none";
            validation++;
        } else {
            passwordConfirm.classList.add("shake");
            texto = icon + '*Password does not match';
            var capa = document.getElementById("passwordConfirmAlert");
            var p = document.createElement("p");
            p.innerHTML = texto;
            p.classList.add("alert");;
            capa.appendChild(p);
            passwordConfirm.value += alertText;
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
    openModal();
    var name = document.getElementById('name');
    var lastName = document.getElementById('lastName');
    var dni = document.getElementById('dni');
    var dateOfBirth = document.getElementById('dateOfBirth');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var city = document.getElementById('city');
    var zipCode = document.getElementById('zipCode');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('passwordConfirm');

    texto = `First Name: `+ name.value + `<br> <br>` + `Last Name: `+ lastName.value + `<br> <br>` + `DNI: `+ dni.value + `<br> <br>` +`Date of birth: `
    + dateOfBirth.value + `<br> <br>` +`Phone: `+ phone.value + `<br> <br>` +`Adress: `+ address.value + `<br> <br>` +`City: ` + city.value + `<br> <br>`
    + `Zip Code: ` + zipCode.value + `<br> <br>` +`Email: ` + email.value + `<br> <br>` + `Password: ` + password.value + `<br> <br>` + 
    `Password confirmation: ` + passwordConfirm.value;
    var info = document.getElementById("info");
    info.innerHTML = texto;
});