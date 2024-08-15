
document.getElementById('encryptBtn').addEventListener('click', function() {
    const input = document.getElementById('inputText').value;
    const output = encriptarTexto(input);
    mostrarResultado(output);
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const input = document.getElementById('inputText').value;
    const output = desencriptarTexto(input);
    mostrarResultado(output);
});

function mostrarResultado(texto) {
    const outputPlaceholder = document.getElementById('outputPlaceholder');
    const outputText = document.getElementById('outputText');
    if (texto) {
        outputPlaceholder.style.display = 'none';
        outputText.style.display = 'block';
        outputText.value = texto;
    } else {
        outputPlaceholder.style.display = 'block';
        outputText.style.display = 'none';
    }
}

function encriptarTexto(texto) {
    // Aquí se implementaría la lógica de encriptación
    return texto.split('').reverse().join(''); // Ejemplo simple: invierte el texto
}

function desencriptarTexto(texto) {
    // Aquí se implementaría la lógica de desencriptación
    return texto.split('').reverse().join(''); // Ejemplo simple: invierte el texto
}
