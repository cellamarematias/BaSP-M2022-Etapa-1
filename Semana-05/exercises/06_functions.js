console.log('\nExcercise 6.a');
// Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function additionFunc(x, y) {
    return x + y;
};
console.log(additionFunc(2,5));

console.log('\nExcercise 6.b');
// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
// mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function checkIsNan(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {       
        alert('Is not a Number');
        return NaN;
    } else {
        return num1 + num2;
    };
};

console.log('\nExcercise 6.c');
// Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(x) {
    if(Number.isInteger(x)) {
    return true;
    }		
};

console.log('\nExcercise 6.d');
// A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
// En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function checkIsNan2(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        alert('Is not a Number');
        return NaN;
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        alert('Num 1 o no es un entero');
        var num1 = Math.round(num1);
        console.log(num1)
        var num2 = Math.round(num2);
        console.log(num2)
        return num1 + num2;
    } else {
        return num1 + num2;   
    };
};

console.log('\nExcercise 6.e');
// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
// probando que todo siga funcionando igual.
function validation(num1,num2) {
    if(isNaN(num1) || isNaN(num2)) {
        alert('Is not a Number');
        return NaN;
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        alert('Num 1 o no es un entero');
        var num1 = Math.round(num1);
        //console.log(num1)
        var num2 = Math.round(num2);
        //console.log(num2)
        return num1 + num2;
    } else {
        return num1 + num2;   
    };
};
function additionFuncValidation(num1,num2) {    
    var result = validation(num1,num2);
    return result; 
};
