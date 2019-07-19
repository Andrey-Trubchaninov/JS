let getNumber = function () { 
  let start = 0; 
  return function(x) { 
    start += x; 
    return start;
  };
}

let sum = getNumber();
console.log(sum(1));
console.log(sum(5));
