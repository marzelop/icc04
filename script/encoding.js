var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Retorna a posição de uma letra no alfabeto
function alphabetIndex(char) {
    let i;
    char = char.toUpperCase();
    for (i = 0; i < alphabet.length; i++) {
        if (char === alphabet[i])
            return i;
    }
    return -1; // Retorna -1 se char não for uma letra
}

function encode(phrase, keys) {
    let char, charIndex, encodedStr = "", offset, lettercase, key;
    let i, j; // Variáveis de controle

    for (i = 0; i < phrase.length; i++) {
        offset = 0; // Reinicia o deslocamento
        char = phrase[i];

        if (char === char.toUpperCase()) { lettercase = 1; } // Letra Maiúscula
        else { lettercase = 0; } // Letra Minúscula

        charIndex = alphabetIndex(char);

        // Se char não for uma letra
        if (charIndex === -1) {
            encodedStr += char;
            continue;
        }
        
        // Calcula o deslocamento
        for (j = 1; j <= keys.length; j++) {
            key = keys[j - 1];
            if ((i + 1) % j === 0)
                offset += key;
        }

        if (lettercase)
            encodedStr += alphabet[(charIndex + offset + alphabet.length) % alphabet.length];
        else
            encodedStr += alphabet[(charIndex + offset + alphabet.length) % alphabet.length].toLowerCase();
    }

    return encodedStr;
}

function decode(phrase, keys) {
    let char, charIndex, decodedStr = "", offset, lettercase, key;
    let i, j; // Variáveis de controle

    for (i = 0; i < phrase.length; i++) {
        offset = 0; // Reinicia o deslocamento
        char = phrase[i];

        if (char === char.toUpperCase()) { lettercase = 1; } // Letra Maiúscula
        else { lettercase = 0; } // Letra Minúscula

        charIndex = alphabetIndex(char);

        // Se char não for uma letra
        if (charIndex === -1) {
            decodedStr += char;
            continue;
        }

        for (j = 1; j <= keys.length; j++) {
            key = keys[j - 1];
            if ((i + 1) % j === 0)
                offset += key;
        }

        if (lettercase)
            decodedStr += alphabet[(charIndex - offset + alphabet.length) % alphabet.length];
        else
            decodedStr += alphabet[(charIndex - offset + alphabet.length) % alphabet.length].toLowerCase();
    }

    return decodedStr;
}
