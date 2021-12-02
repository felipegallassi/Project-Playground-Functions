// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true; 
  }
  else {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}

// Desafio 3
function splitSentence(sentence) {
  let result = sentence.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let result = array[array.length - 1] + ', ' + array[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  totalDePontos = (3 * wins) + ties;
  return totalDePontos;
}
// Desafio 6
function highestCount(array) {
  let maior=array[0],conta=1;
  for(let i=1;i<array.length;++i)
    if(array[i]>maior)
    {
      maior=array[i];
      conta=1;
    }
    else if(array[i]===maior)conta++;
  return conta;
}
 
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
