// Desafio 10
function techList(arrayT, name) {
  arrayT.sort();
  let objeto = [];

for(let i = 0; i < arrayT.length; i += 1) {
objeto.push({'tech': arrayT[i], 'name': name})
}


if(objeto.length === 0) {
return "Vazio!"
} 
else {
return objeto
}
}
 
    
    


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
