console.log('\nExcercise 3.a');
// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
// mostrar por consola los meses 5 y 11 (utilizar console.log).
var year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(year[4]);
console.log(year[10]);

console.log('\nExcercise 3.b');
// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(year.sort());

console.log('\nExcercise 3.c');
// Agregar un elemento al principio y al final del array (utilizar unshift y push).
var year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var addFirst = year.unshift("beginning");
var addLast = year.push("end");
console.log(year);

console.log('\nExcercise 3.d');
// Quitar un elemento del principio y del final del array (utilizar shift y pop).
var year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var removeFirst = year.shift();
var removeLast = year.pop();
console.log(year);

console.log('\nExcercise 3.e');
//Invertir el orden del array (utilizar reverse).
var year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var reverseYear = year.reverse();
console.log(reverseYear);

console.log('\nExcercise 3.f');
// Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var yearString = year.join("-");
console.log(yearString);

console.log('\nExcercise 3.g');
// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var year = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var yearSlice = year.slice(4,10);
console.log(yearSlice);