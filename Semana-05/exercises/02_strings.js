console.log('\nExcercise 2.a');
// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var upperCaseString = 'Le haré una oferta que no podrá rechazar.';
var result = upperCaseString.toUpperCase();
console.log(result);

console.log('\nExcercise 2.b');
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres 
// guardando el resultado en una nueva variable (utilizar substring).
var substringString = 'Le haré una oferta que no podrá rechazar.';
var newString = substringString.substring(0, 5);
console.log(newString);

console.log('\nExcercise 2.c');
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
// guardando el resultado en una nueva variable (utilizar substring).
var simpsonString = 'A la grande le puse cuca.';
var newString = simpsonString.substring(simpsonString.length - 3);
console.log(newString);

console.log('\nExcercise 2.d');
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
// Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var simpsonString = 'a lA gRanDe Le puse CucA.';
var result = simpsonString.substring(0, 1).toUpperCase() + simpsonString.substring(1).toLowerCase();
console.log(result);

console.log('\nExcercise 2.e');
// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var simpsonString = 'biblioteca argentina ';
var result = simpsonString.indexOf(" ");
console.log(result);

console.log('\nExcercise 2.f');
// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y 
// las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var a = 'murciélago omnipresente';
var result = a.substring(0, 1).toUpperCase() + a.substring(1, a.indexOf(" ") + 1).toLowerCase() + a.substring(a.indexOf(" ") + 1, a.indexOf(" ") + 2).toUpperCase() + a.substring(a.indexOf(" ") + 2).toLowerCase();
console.log(result);