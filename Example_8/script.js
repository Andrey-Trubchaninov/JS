//first task

let userImput = prompt('Задание 1. Введите длину строки:');
let length = parseInt(userImput);

function getRandomString(length) {
  length = length || 10;
  let result = '';
  const symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>@!#$%^&*()_+[]{}?:;|\"\\,./~`-=';
  const symbolLength = symbol.length;
  for ( var i = 0; i < length; i++ ) {
    result += symbol.charAt(Math.floor(Math.random() * symbolLength));
  }
  return result;
}

console.log('Результат задания 1:' + getRandomString(length));

//second task
let userImput2 = prompt('Задание 2. Введите количество строк:');
let quantity = parseInt(userImput2);
let userImput3 = prompt('Задание 2. Введите длину строки:');
let length2 = parseInt(userImput3);


function getRandomString2(quantity, length2) {
  quantity = quantity || 100;
  length2 = length2 || 10;
  let result2 = [];
  for (let i = 1; i <= quantity; i++) {
    result2.push(getRandomString(length2));
  }
  return result2;
}

console.log('Результат задания 2:' + getRandomString2(quantity, length2));

//third task

let userNumber = prompt('Задание 3. Введите строку:');

function getQuantityOfSymbols(userNumber) {
  let all_letters = userNumber.length;
  for(var i=0, letters=0, digits=0, symbols=0, char; i < all_letters; i++) {
    char = userNumber.charAt(i);

    if("<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=".indexOf(char) != -1) {
      symbols++;
    }

    else if (!isNaN(char * 1)){
      digits++;
    }
    
    else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(char) != -1){
      letters++;
    }
  }
  return {
    sym: symbols,
    dig :digits,
    let: letters
  };
}

console.log('Результат задания 3:');
console.log(getQuantityOfSymbols(userNumber));

//four task

function symbolsArrey(arrStr) {
  let objArr = [];
  for(let i = 0; i<arrStr.length; i++){
    objArr[i] = getQuantityOfSymbols(arrStr[i]);
  }
  return objArr;
}

let symbolsArr = getRandomString2(quantity, length2);
let newArr =  symbolsArrey(symbolsArr);

function countSymbolsByType(arr) {
    var sum = arr.reduce(function(sum, elem){
     sum.sym = sum.sym + elem.sym;
     sum.dig = sum.dig + elem.dig;
     sum.let = sum.let + elem.let;
        return { 
      sym: sum.sym,
      dig: sum.dig,
      let: sum.let
      };
    },{sym:0,dig:0,let:0});
  return sum;
}
console.log('Результат задания 4:');
console.log(newArr);
console.log(countSymbolsByType(newArr));