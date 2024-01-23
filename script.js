function isPalindrome(str) {
    // Elimina caracteres no alfanuméricos y convierte a minúsculas
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Compara la cadena original con su reverso
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

function checkPalindrome() {
    const inputText = document.getElementById('inputText').value;
    const resultElement = document.getElementById('result');

    if (isPalindrome(inputText)) {
        resultElement.textContent = '¡Es un palíndromo!';
    } else {
        resultElement.textContent = 'No es un palíndromo.';
    }
}