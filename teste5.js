const palavraTeste = "teste";

// desmembra, inverte e remonta a palavra
function inverter(palavra){
  let palavraInvertida =  palavra.split('').reverse().join('');
  console.log(palavraInvertida);
}

inverter(palavraTeste);