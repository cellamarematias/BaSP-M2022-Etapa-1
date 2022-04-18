//a
function additionFunc(x, y) {
    return x + y;
  }
  console.log(additionFunc(2,5));
//b
function checkIsNan(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {       
        alert('Is not a Number');
        return NaN;
    } else {
        return num1 + num2;
    };
};
//c
function validateInteger(x) {
    if(Number.isInteger(x)) {
    return true;
    }		
}
//d
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
//e
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
}
