function pagVar() {
let nome = prompt("Informe o seu nome: ");
    let bruto = parseFloat(prompt("Informe o seu SALÁRIO BRUTO: "));
    let INSS = 0;
    let liquido = 0;
    let taxa = 0;

    if (bruto <= 1000) {
        taxa = 0.08;
    } else if (bruto <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }

    INSS = bruto * taxa;
    liquido = bruto - INSS;

    alert("Olá, " + nome);
    alert("Salário bruto: R$ " + bruto);
    alert("Taxa aplicada: " + (taxa * 100) + "%");
    alert("Desconto INSS: R$ " + INSS);
    alert("Salário líquido: R$ " + liquido);
}