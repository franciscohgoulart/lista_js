function ordenacaoValores() {

    let numeros = [];

    for (let i = 0; i < 4; i++) {
        numeros.push(Number(prompt("digite um número")));
    }
numeros.sort((a,b) => b - a);
alert ("Ordem decrescente")



}