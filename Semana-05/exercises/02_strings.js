//a
var upperCaseString = 'Le haré una oferta que no podrá rechazar.';
var result = upperCaseString.toUpperCase();
console.log(result);
//b
var substringString = 'Le haré una oferta que no podrá rechazar.';
var newString = substringString.substring(0, 5);
console.log(newString);
//c
var simpsonString = 'A la grande le puse cuca.';
var newString = simpsonString.substring(simpsonString.length - 3);
console.log(newString);
//d
var simpsonString = 'a lA gRanDe Le puse CucA.';
var result = simpsonString.substring(0, 1).toUpperCase() + simpsonString.substring(1).toLowerCase();
console.log(result);
//e
var simpsonString = 'biblioteca argentina ';
var result = simpsonString.indexOf(" ");
console.log(result);
//f
var a = 'murciélago omnipresente';
var result = a.substring(0, 1).toUpperCase() + a.substring(1, a.indexOf(" ") + 1).toLowerCase() + a.substring(a.indexOf(" ") + 1, a.indexOf(" ") + 2).toUpperCase() + a.substring(a.indexOf(" ") + 2).toLowerCase();
console.log(result);