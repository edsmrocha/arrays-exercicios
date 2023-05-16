
const arrayNumber = [10,13,41,38,68]
const arrayString = ["Edson", "Esther", "Icaro"]
const arrayMix = ["Edson", 41, 41 > 25]

console.log(arrayNumber);
console.log((arrayString));
console.log(arrayMix);

const copiaNumber = arrayNumber.slice()
const copiaString = arrayString.slice()
const copiaMix = arrayMix.slice()

copiaNumber.push(78)
console.log(copiaNumber);
copiaString.pop()
console.log(copiaString);
copiaMix.splice(1,1)
console.log(copiaMix);