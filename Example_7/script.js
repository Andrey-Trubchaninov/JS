//first task

let userInputstr = prompt('Введите строку:');
let userInputstr2 = prompt('Введите вторую строку для сравнения:');
let result = isSymbolPresentInString(userInputstr, userInputstr2);
alert(result);

function isSymbolPresentInString(str, symbol) {
  outer:
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol[0]) {
      for (let j = 1; j < symbol.length; j++) {
        const leftStringIndex = i + j;

        if (str[leftStringIndex] !== symbol[j]) {
          continue outer;
        }
      }
      return true;
    }
  }
  return false;
}

//second task

let userInputstr4 = prompt('Введите строку:');
let userInputstr5 = prompt('Введите вторую строку для сравнения:');
let result2 = getSymbolIndex(userInputstr4, userInputstr5);
alert(result2);

function getSymbolIndex(str, symbol) {
  outer:
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol[0]) {
      for (let j = 1; j < symbol.length; j++) {
        const leftStringIndex = i + j;

        if (str[leftStringIndex] !== symbol[j]) {
          continue outer;
        }
      }
      return str[i];
    }
  }
  return -1;
}

//third task

let userInputNumber = prompt('Введите число:');
let result3 = getNumberOfEven(userInputNumber);
alert(result3);

function getNumberOfEven(n) {
	let quantity = 0;

	for (let i = 0; i < n.length; i++) {
  	const number = parseInt(n[i]);
    if (number % 2 === 0) {
    	quantity++;
    }
  }
	return quantity;
}