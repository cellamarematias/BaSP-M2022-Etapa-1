//a
var newArray = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5"];
for (let i = 0; i < newArray.length; i++) {
  alert(newArray[i]);
};
//b
var newArray = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5"];
for (let i = 0; i < newArray.length; i++) {
	var upperArray = newArray[i].substring(0, 1).toUpperCase() + newArray[i].substring(1);
	alert(upperArray);
};
//c
var sentence = '';
for (let i = 0; i < newArray.length; i++) {
	sentence += newArray[i];
};
alert(sentence);
//d
var emptyArray = [];
for (let i = 0; i < 10; i++) {
	emptyArray.push(i);
};
console.log(emptyArray);