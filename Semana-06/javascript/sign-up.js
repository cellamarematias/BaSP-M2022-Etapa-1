var password = document.getElementById('password');
var passwordConfirm = document.getElementById('passwordConfirm');

// NAME validation Nombre: Solo letras y debe tener más de 3 letras. 
document.getElementById("name").onblur = () => {
    var name = document.getElementById('name');
    // loop for to check is there is a number in the name
    var number = false;
    for (var i = 0; i < name.value.length; i++) {
        if (isNaN(name.value[i]) == false) {
            number = true;
        };
    };
    if (name.value.length > 3 && number == false) {
        name.style = "border-color: none";
    } else {
        name.style = "border: solid 2px red; border-radius: 5px";
        texto = `*Invalid name format. <br> Don't use numbers.`
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
// LASTNAME validation
document.getElementById("lastName").onblur = () => {
    var lastName = document.getElementById('lastName');
        // loop for to check is there is a number in the Lastname
    var number = false;
    for (var i = 0; i < lastName.value.length; i++) {
        if (isNaN(lastName.value[i]) == false) {
            number = true;
        };
    };
    if (lastName.value.length > 3 && number == false) {
        lastName.style = "border-color: none";
    } else {
        lastName.style = "border: solid 2px red; border-radius: 5px";
        texto = `*Invalid last name format. <br> Don't use numbers.`
        var capa = document.getElementById("lastNameAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("lastName").onfocus = () => {
    var lastName = document.getElementById('lastName');
    lastName.style = "border-color: none";
    const list = document.getElementById("lastNameAlert");
    list.removeChild(list.firstElementChild);
};
// DNI validation
document.getElementById("dni").onblur = () => {
    var dni = document.getElementById('dni');
    if (dni.value.length > 7 && isNaN(dni.value) == false) {
        dni.style = "border-color: none";
    } else {
        dni.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Invalid dni format'
        var capa = document.getElementById("dniAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("dni").onfocus = () => {
    var dni = document.getElementById('dni');
    dni.style = "border-color: none";
    const list = document.getElementById("dniAlert");
    list.removeChild(list.firstElementChild);
};
// DATE validation  Fecha de Nacimiento: Con formato dd/mm/aaaa.  // check only numbers and check slashes
document.getElementById("dateOfBirth").onblur = () => {
    var dateOfBirth = document.getElementById('dateOfBirth');
    var day = dateOfBirth.value.substr(0,2)
    var month = dateOfBirth.value.substr(2,2)
    var year = dateOfBirth.value.substr(4,6)
    var date = dateOfBirth.value.replace(/[/]/g, '');
    console.log(date)
    var slash = 0;
    for (var i = 0; i < dateOfBirth.value.length; i++) {
        if (dateOfBirth.value[i] == '/') {
            slash++;
        };
    };
    if (slash == 2 && isNaN(date) == false) {
        dateOfBirth.style = "border-color: none";
    } else {
        dateOfBirth.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Invalid format. <br> Please use this: dd/mm/yy'
        var capa = document.getElementById("dateOfBirthAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("dateOfBirth").onfocus = () => {
    var dateOfBirth = document.getElementById('dateOfBirth');
    dateOfBirth.style = "border-color: none";
    const list = document.getElementById("dateOfBirthAlert");
    list.removeChild(list.firstElementChild);
};
// PHONE validation
document.getElementById("phone").onblur = () => {
    var phone = document.getElementById('phone');
    if (phone.value.length == 10 && isNaN(phone.value) == false) {
        phone.style = "border-color: none";
    } else {
        phone.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Invalid phone. <br> Must containt 10 digits.'
        var capa = document.getElementById("phoneAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("phone").onfocus = () => {
    var phone = document.getElementById('phone');
    phone.style = "border-color: none";
    const list = document.getElementById("phoneAlert");
    list.removeChild(list.firstElementChild);
};
// ADRESS validation Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
document.getElementById("address").onblur = () => {
    var address = document.getElementById('address');
    var addressSpaces = address.value.replaceAll(' ','');
    //check for numbers
    var number = false;
    for (var i = 0; i < addressSpaces.length; i++) {
        if (isNaN(addressSpaces[i]) == false) {
            number = true;
        };
    };
    // check for letters
    var letter = false;
    for (var i = 0; i < addressSpaces.length; i++) {
        if (isNaN(addressSpaces[i]) == true) {
            letter = true;
        };
    };
    if (address.value.length > 5 && number == true && letter == true && address.value.indexOf(' ') > 0) {
        address.style = "border-color: none";
    } else {
        address.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Invalid address format <br> Please use this: Street 123.'
        var capa = document.getElementById("addressAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("address").onfocus = () => {
    var address = document.getElementById('address');
    address.style = "border-color: none";
    const list = document.getElementById("addressAlert");
    list.removeChild(list.firstElementChild);
};
// CITY validation Localidad: Texto alfanumérico y debe tener más de 3 letras. 
document.getElementById("city").onblur = () => {
    var city = document.getElementById('city');
    //check for numbers
    var number = false;
    for (var i = 0; i < city.value.length; i++) {
        if (isNaN(city.value[i]) == false) {
            number = true;
        };
    };
    // check for letters
    var letter = false;
    for (var i = 0; i < city.value.length; i++) {
        if (isNaN(city.value[i]) == true) {
            letter = true;
        };
    };
    if (city.value.length > 3 && number == true && letter == true) {
        city.style = "border-color: none";
    } else {
        city.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Invalid city format'
        var capa = document.getElementById("cityAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("city").onfocus = () => {
    var city = document.getElementById('city');
    city.style = "border-color: none";
    const list = document.getElementById("cityAlert");
    list.removeChild(list.firstElementChild);
};
// ZIPCODE validation Código Postal: Solo número y debe tener entre 4 y 5 números. 
document.getElementById("zipCode").onblur = () => {
    var zipCode = document.getElementById('zipCode');
    if (zipCode.value.length >= 4 && zipCode.value.length <= 5 && isNaN(zipCode.value) == false) {
        zipCode.style = "border-color: none";
    } else {
        zipCode.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Invalid Zip Code format <br> Use only number(4 to 5)'
        var capa = document.getElementById("zipCodeAlert");
        var p = document.createElement("p");
        p.innerHTML = texto;
        p.style = "color: red; font-size: 12px"
        capa.appendChild(p);
    };
};
// this is to remove the alert div
document.getElementById("zipCode").onfocus = () => {
    var zipCode = document.getElementById('zipCode');
    zipCode.style = "border-color: none";
    const list = document.getElementById("zipCodeAlert");
    list.removeChild(list.firstElementChild);
};
// EMAIL validation Repetir 
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
// PASSWORD validation
document.getElementById("password").onblur = () => {
    var password = document.getElementById('password');
    //check for numbers
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
    if (password.value.length > 8 && number == true && letter == true ) {
        password.style = "border-color: none";
    } else {
        password.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Use at least 8 charaters. <br> Use numbers and letters.'
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
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('passwordConfirm');
    if (password.value == passwordConfirm.value) {
        passwordConfirm.style = "border-color: none";
    } else {
        passwordConfirm.style = "border: solid 2px red; border-radius: 5px";
        texto = '*Password does not match';
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