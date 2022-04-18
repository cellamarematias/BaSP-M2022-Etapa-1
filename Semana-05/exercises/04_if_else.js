//a
var randomNumber = Math.random();
console.log(randomNumber);
if(randomNumber >= 0.5) {
    alert('Greater than 0,5');
} else {
    alert('Lower than 0,5');
}
//b
var age = Math.floor((Math.random()  *100) + 1);
console.log(age)
if (age < 2) {
	alert('bebé');
} else if (age >= 2 &&  age <= 12) {
	alert('niño');
} else if (age >= 13 && age <= 19) {
	alert('adolescente');
} else if (age >= 20 && age <= 30) {
	alert('joven');
} else if (age >= 31 && age <= 60) {
	alert('adulto');
} else if (age >= 61 && age <= 75) {
	alert('adulto mayor');
} else if (age  > 75) {
	alert('anciano');
};