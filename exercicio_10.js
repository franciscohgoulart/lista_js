function folhaPag(){ 

    let nome = prompt("Informe o seu nome: ");
    let bruto = parseFloat(prompt("Informe o seu SALÁRIO BRUTO: "));
    let inss = bruto * 0.08;
    let liquido = bruto - 0.08;

    alert ("Olá, " + nome);
    alert ("Seu salário bruto é de: R$ " + bruto);
    alert ("INSS: R$ " + inss);
    alert ("liquido: R$ " + liquido);


}