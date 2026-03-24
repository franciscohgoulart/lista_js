function variaveis () {

    let numero_1 = parseInt(prompt("digite um numero inteiro"));
    let numero_2 = parseInt(prompt("digite outro numero"));
    
    diferenca = numero_1 - numero_2;
    dobro_primeira = numero_1 * 2;
    triplo_segunda = numero_2 * 3;
    letra_b = dobro_primeira + triplo_segunda;
    multiplicacao = numero_1 * numero_2;

     alert(
        "a) Diferença: " + diferenca + "\n" +
        "b) Dobro da primeira + triplo da segunda: " + letra_b + "\n" +
        "c) Multiplicação: " + multiplicacao
    );

}