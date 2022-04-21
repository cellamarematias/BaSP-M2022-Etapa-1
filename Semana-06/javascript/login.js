var email = document.getElementById('email');

email.onblur = function(){
    if (email.indexOf('@') < 1) {
        console.log('No es un email')
    } else {
        console.log('todo ok')
    }
};

