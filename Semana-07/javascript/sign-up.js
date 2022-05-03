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

document.getElementById("firstName").addEventListener("blur", nameBlur);
document.getElementById("firstName").addEventListener("focus", nameFocus);

document.getElementById("lastName").addEventListener("blur", lastNameBlur);
document.getElementById("lastName").addEventListener("focus", lastNameFocus);

document.getElementById("dni").addEventListener("blur", dniBlur);
document.getElementById("dni").addEventListener("focus", dniFocus);

document.getElementById("dateOfBirth").addEventListener("blur", dobBlur);
document.getElementById("dateOfBirth").addEventListener("focus",dobFocus);

document.getElementById("phone").addEventListener("blur", phoneBlur);
document.getElementById("phone").addEventListener("focus", phoneFocus);

document.getElementById("address").addEventListener("blur", addressBlur);
document.getElementById("address").addEventListener("focus", addressFocus);

document.getElementById("city").addEventListener("blur", cityBlur);
document.getElementById("city").addEventListener("focus", cityFocus);

document.getElementById("zipCode").addEventListener("blur", zipBlur);
document.getElementById("zipCode").addEventListener("focus", zipFocus);

document.getElementById("email").addEventListener("blur", emailBlur);
document.getElementById("email").addEventListener("focus", emailFocus);

document.getElementById("password").addEventListener("blur", passwordBlur);
document.getElementById("password").addEventListener("focus", passwordFocus);

document.getElementById("passwordConfirm").addEventListener("blur", passwordConfirmBLur);
document.getElementById("passwordConfirm").addEventListener("focus", passwordConfirmFocus);


function nameBlur() {
    var firstName = document.getElementById('firstName').value;
    var specialChart = ["[", "?", "!", ",", "'", "(",")", "$", "&", ".", "!", "@", "-", "_", "]", "{", "}"];
    
    var number = false;
    for (var i = 0; i < firstName.length; i++) {
        if (isNaN(firstName[i]) == false) {
            number = true;
        };
    };

    var special = false;
    for (var i = 0; i < firstName.length; i++) {
        if (specialChart.indexOf(firstName[i]) > 0) {
            special = true;
        };
    };
    if (firstName.length < 1) {
        validationError('firstName', 0, 'Name is required');
        nameValidation = false;
    } else {
        if (firstName.length > 3 && number == false && special == false) {
            removerError('firstName', 0);
            nameValidation = true;
        } else {
            validationError('firstName', 0, 'Invalid Name. Use only letters.')
            nameValidation = false;
        };
    };
};

function nameFocus() {
    removerError('firstName', 0);
    nameValidation = true;
};

function lastNameBlur() {
    var lastName = document.getElementById('lastName').value;
    var number = false;
    for (var i = 0; i < lastName.length; i++) {
        if (isNaN(lastName[i]) == false) {
            number = true;
        };
    };
    if (lastName.length < 1) {
        validationError('lastName', 1, 'Last Name is required.');
        lastNameValidation = false;
    } else {
        if (lastName.length > 3 && number == false) {
            removerError('lastName', 1);
            lastNameValidation = true;
        } else {
            validationError('lastName', 1, 'Invalid Last name. Use only letters.');
            lastNameValidation = false;
        };
    };
};

function lastNameFocus() {
    removerError('lastName', 1)
    lastNameValidation = true;
};

function dniBlur() {
    var dni = document.getElementById('dni').value;
    if (dni.length < 1) {
        validationError('dni', 2, 'DNI is required.');
        dniValidation = false;
    } else {
        if (dni.length > 7 && dni.length <= 8 && isNaN(dni) == false) {
            removerError('dni', 2);
            dniValidation = true;
        } else {
            validationError('dni', 2, 'Invalid DNI. 6 to 8 numbers.');
            dniValidation = false;
        };
    };
};

function dniFocus() {
    removerError('dni', 2);
    dniValidation = true;
};

function dobBlur() {
    var dateOfBirth = document.getElementById('dateOfBirth').value;
    var date = dateOfBirth.replace(/[/]/g, '');
    var day = date.substr(2,2);
    var month = date.substr(0,2);
    var year = date.substr(4,4);
    var dateFormat = false;
    var slash = 0;

    for (var i = 0; i < dateOfBirth.length; i++) {
        if (dateOfBirth[i] == '/') {
            slash++;
        };
    };

    if (slash == 2 && isNaN(date) == false && day <= 31 && month <= 12 && year < 2022) {
        dateFormat = true;
    };

    if (dateOfBirth.length < 1) {
        validationError('dateOfBirth', 3, 'Date is required.');
        dateOfBirthValidation = false;
    } else {
        if (dateFormat == false) {
            validationError('dateOfBirth', 3, 'Invalid date. Use MM/DD/YYYY');
            dateOfBirthValidation = false;
        } else {
            if (year > 1900 && year <= 2004) {
                removerError('dateOfBirth',3);
                dateOfBirthValidation = true;
            } else {
                validationError('dateOfBirth', 3, 'Must be over 18 years old.');
                dateOfBirthValidation = false;
            };
        };
    };
};

function dobFocus() {
    removerError('dateOfBirth', 3)
    dateOfBirthValidation = true;
};

function phoneBlur() {
    var phone = document.getElementById('phone').value;
    if (phone.length < 1) {
        validationError('phone', 4, 'Phone is required.');
        phoneValidation = false;
    } else {
        if (phone.length == 10 && isNaN(phone) == false) {
            removerError('phone',4);
            phoneValidation = true;
        } else {
            validationError('phone', 4, 'Invalid Phone. Must be 10 digits.');
            phoneValidation = false;
        };
    };
};

function phoneFocus() {
    removerError('phone', 4);
    phoneValidation = true;
};

function addressBlur() {
    var address = document.getElementById('address').value;
    var addressSpaces = address.replaceAll(' ','');
    var number = false;
    var spaces = false;
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
    if (address.indexOf(' ') > 0 && address.indexOf(' ') < address.length-1 && address.lastIndexOf(' ')+1 < address.length){
    spaces = true;
    }
    if (address.length < 1) {
        validationError('address', 5, 'Address is required.');
        addressValidation = false;
    } else {
        if (spaces == false) {
            validationError('address', 5, 'No spaces at the beggining or end.');
            addressValidation = false;
        } else {
            if (address.length > 5 && number == true && letter == true) {
                removerError('address', 5);    
                addressValidation = true;
            } else {
                validationError('address', 5, 'Invalid format. Use: Street 1234.');
                addressValidation = false;
            };
        };
    };
};

function addressFocus() {
    removerError('address', 5);
    addressValidation = true;
};

function cityBlur() {
    var city = document.getElementById('city').value;
    if (city.length < 1) {
        validationError('city', 6, 'City is required.');
        cityValidation = false;
    } else {
        if (city.length > 3) {
            removerError('city', 6);
            cityValidation = true;
        } else {
            validationError('city', 6, 'Must be at least 3 letters.');
            cityValidation = false;
        };
    };
};

function cityFocus() {
    removerError('city', 6);
    cityValidation = true;
};

function zipBlur() {
    var zipCode = document.getElementById('zipCode').value;
    if (zipCode.length < 1) {
        validationError('zipCode', 7, 'Zip code is required.');
        zipCodeValidation = false;
    } else {
        if (zipCode.length >= 4 && zipCode.length <= 5 && isNaN(zipCode) == false) {
            removerError('zipCode',7);
            zipCodeValidation = true;
        } else {
            validationError('zipCode',7, 'Must have 4 or 5 digits.');
            zipCodeValidation = false;
        };
    };
};

function zipFocus() {
    removerError('zipCode', 7);
    zipCodeValidation = true;
};

function emailBlur() {
    var email = document.getElementById('email').value;
    if (email.length < 1) {
        validationError('email', 8, 'Email is required.');
        emailValidation = false;
    } else {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
            removerError('email', 8);
            emailValidation = true;
        } else {
            validationError('email', 8, 'Wrong email format.');
            emailValidation = false;
        };
    };
};

function emailFocus() {
    removerError('email', 8);
    emailValidation = true;
};

function passwordBlur() {
    var password = document.getElementById('password').value;
    var specialChart = ["[", "?", "!", ",", "'", "(", ")", "$", "&", ".", "!", "@", "-", "_", "]", "{", "}"];
    var passwordConfirm = document.getElementById('passwordConfirm').value;
    var number = false;

    for (var i = 0; i < password.length; i++) {
        if (isNaN(password[i]) == false) {
            number = true;
        };
    };

    var letter = false;
    for (var i = 0; i < password.length; i++) {
        if (isNaN(password[i]) == true) {
            letter = true;
        };
    };

    var special = false;
    for (var i = 0; i < password.length; i++) {
        if (specialChart.indexOf(password[i]) > 0) {
            special = true;
        };
    };

    if (password.length < 1) {
        validationError('password', 9, 'Password is required');
        passwordValidation = false;
    } else {
        if (password.length > 8 && number == true && letter == true && special == false) {
            removerError('password', 9);
            passwordValidation = true;
        } else {
            validationError('password', 9, 'At least 8 numbers and letters.');
            passwordValidation = false;
        };
    };
};

function passwordFocus() {
    removerError('password', 9);
    passwordValidation = true;
};

function passwordConfirmBLur() {
    var passwordConfirm = document.getElementById('passwordConfirm').value;
    var password = document.getElementById('password').value;

    if (passwordConfirm.length < 1) {
        validationError('passwordConfirm', 10, 'Confirmation is required.');
        passwordConfirmValidation = false;
    } else {
        if (password == passwordConfirm) {
            removerError('passwordConfirm', 10);
            passwordConfirmValidation = true;
        } else {
            validationError('passwordConfirm', 10, 'Passwords does not match.');
            passwordConfirmValidation = false;
        };
    };
};

function passwordConfirmFocus() {
    removerError('passwordConfirm', 10);
    passwordConfirmValidation = true;
};

function createElement() {
    var div = document.createElement('div');
    div.setAttribute("id", 'info');
    document.getElementById("modalContentRemove").appendChild(div);
};

function cleanModal() {
    var modalContent = document.getElementById('modalContentRemove');  
    if (modalContent.hasChildNodes() === true){
        while (modalContent.firstChild) {
            modalContent.removeChild(modalContent.firstChild);
        };
    };
};

function openModal() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];  

    modal.style.display = "block";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden"; 
    span.onclick = function() {
        cleanModal();
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
            var texto = '';
        };
    };
};
var btnSignUp = document.getElementsByClassName('btn-l');
btnSignUp[0].addEventListener('click', function(e) {
    e.preventDefault(e);
    nameBlur();
    lastNameBlur();
    dniBlur();
    dobBlur();
    phoneBlur();
    addressBlur();
    cityBlur();
    zipBlur();
    emailBlur();
    passwordBlur();
    passwordConfirmBLur();
    if (nameValidation == true && lastNameValidation == true && dniValidation == true 
        && dateOfBirthValidation == true && phoneValidation == true && addressValidation == true
        && cityValidation == true && zipCodeValidation == true && emailValidation == true 
        && passwordValidation == true && passwordConfirmValidation == true) {
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var dni = document.getElementById('dni').value;
            var dateOfBirth = document.getElementById('dateOfBirth').value;
            var phone = document.getElementById('phone').value;
            var address = document.getElementById('address').value;
            var city = document.getElementById('city').value;
            var zip = document.getElementById('zipCode').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            var url ="https://basp-m2022-api-rest-server.herokuapp.com/signup?" +
            new URLSearchParams({
            name: firstName,
            lastName: lastName,
            dni: dni,
            dob: dateOfBirth,
            phone: phone,
            address: address,
            city: city,
            zip: zip,
            email: email,
            password: password,
            }).toString();

        fetch(url)
            .then(function (res) {
            return res.json();
            })
            .then(function (jsonResponse) {
            // lógica +
            if (jsonResponse.success == true) {
                openModal();
                var texto = '';
                var info = document.getElementById("alertInfo");
                info.innerHTML = '';
                var tittle = document.createElement("h4");
                tittle.setAttribute("id", 'tittle');
                tittle.innerText = jsonResponse.msg;
                document.getElementById("modalContentRemove").appendChild(tittle);
                //creamos el div info
                var div = document.createElement('div');
                div.setAttribute("id", 'info');
                document.getElementById("tittle").appendChild(div);

                for (var key in jsonResponse.data) {
                    if (jsonResponse.data.hasOwnProperty(key)) {
                        localStorage.setItem(key, jsonResponse.data[key]);
                        var para = document.createElement("p");
                        para.innerText = key + ": " + jsonResponse.data[key];
                        document.getElementById("info").appendChild(para);
                    };
                };

            } else {
                if (jsonResponse["msg"] == undefined) {
                for (x of jsonResponse.errors) {
                };
                openModal();
                createElement();
                texto = x.msg;
                var info = document.getElementById("info");
                info.innerHTML = texto;
                } else {
                    openModal();
                    createElement();
                    texto = jsonResponse.msg;
                    var info = document.getElementById("info");
                    info.innerHTML = texto;
                };
            };
            })
            .catch(function (error) {
                openModal();
                createElement();
                texto = jsonResponse.msg;
                var info = document.getElementById("info");
                info.innerHTML = texto;
            console.log(error);
            });
    } else {
        openModal();
        texto = 'Log In validation Failed. Check all the fields first.';
        var info = document.getElementById("alertInfo");
        info.innerHTML = texto;
    };
});

window.onload = function() {    
    if (localStorage.getItem('name') === null){
        console.log('no hay datos en el Local Storage');
    } else { 
        var name = document.getElementById('firstName');
        name.value = localStorage.getItem('name');
        var lastName = document.getElementById('lastName');
        lastName.value = localStorage.getItem('lastName');
        var zipCode = document.getElementById('zipCode');
        zipCode.value = localStorage.getItem('zip');        
        var dateOfBirth = document.getElementById('dateOfBirth');
        dateOfBirth.value = localStorage.getItem('dob');        
        var phone = document.getElementById('phone');
        phone.value = localStorage.getItem('phone');        
        var dni = document.getElementById('dni');
        dni.value = localStorage.getItem('dni');
        var address = document.getElementById('address');        
        address.value = localStorage.getItem('address');      
        var city = document.getElementById('city');
        city.value = localStorage.getItem('city');     
        var email = document.getElementById('email');
        email.value = localStorage.getItem('email');     
        var password = document.getElementById('password');
        password.value = localStorage.getItem('password');        
        var passwordConfirm = document.getElementById('passwordConfirm');
        passwordConfirm.value = localStorage.getItem('password');        
    };
};