const arrayNumber = [10,13,41,38,68]
const arrayString = ["Edson", "Esther", "Icaro"]
const arrayMix = ["Edson", 41, 41 > 25]

console.log(arrayNumber.length);
console.log(arrayString.length);
console.log(arrayMix.length);

const primeiroItem = arrayNumber[0]
const segundoItem = arrayString[1]
const terceiroItem = arrayMix[2]

console.log(primeiroItem);
console.log(segundoItem);
console.log(terceiroItem);

const verificacao1 = arrayNumber.includes(10)
const verificacao2 = arrayMix.includes(25)
console.log(verificacao1);
console.log(verificacao2);