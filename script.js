const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura * altura);

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = nome + ", seu IMC é: " + imc.toFixed(2);

});
