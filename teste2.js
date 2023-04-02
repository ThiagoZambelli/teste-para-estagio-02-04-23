// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 
// valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
// informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número 
// informado pertence ou não a sequência.

// Numero que vai ser testado 
let numeroTeste = 55;

//numeros para criar a sequência de Fibonacci
let seq1 = 0, seq2 = 1;

// Funcao de teste
const testando = (numero) =>{
    while( numero > seq1 ){
        sequencia();
        if(numero == seq1){
            console.log("o número informado pertence a sequência de Fibonacci")
        }      
    }
    if(numero !== seq1){
        console.log("o número informado Não pertence a sequência de Fibonacci")
    } 
}

// sequência de Fibonacci
const sequencia = () =>{    
    let numControle = seq1
    seq1 = seq1 + seq2;
    seq2 = numControle
}

testando(numeroTeste);