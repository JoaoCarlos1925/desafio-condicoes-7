function verificarCategoriaEnvio() {
    const peso = parseFloat(document.getElementById('peso').value);
    let categoria;

    if (isNaN(peso)) {
        categoria = "Por favor, insira um peso válido.";
    } else if (peso < 1) {
        categoria = "Leve";
    } else if (peso >= 1 && peso <= 5) {
        categoria = "Normal";
    } else {
        categoria = "Pesado";
    }

    document.getElementById('resultado').innerHTML = `Categoria de Envio: ${categoria}`;
}
