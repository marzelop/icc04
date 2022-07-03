var alphabet = "ABCDEFGHIJOKLMNOPQRSTUVWXYZ";
var ASCIItoChar = String.fromCharCode;
var baseChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function baseToDec(base, baseNum) {
    if (base <= 0)  throw "Unvalid Base: You can't have a base with 0 or less digits. You are trying base ", base;
    
    let i, decNum = 0;
    
    for (i = 0; i < baseNum.length; i++) {
       if (baseChar.indexOf(baseNum[i]) >= base)
           throw `Unvalid Conversion: Trying to convert number with characters not from base. Example: trying to convert "e" from base < 16 to decimal. Char: ${baseNum[i]}, base: ${base}`;
        decNum += baseChar.indexOf(baseNum[i]) * base ** (baseNum.length - i - 1);
    }

    return decNum;
}

function decToBase(base, decNum) {
    if (base <= 0)  throw "Unvalid Base: You can't have a base with 0 or less digits. You are trying base ", base;
    let i, rest = [], intDiv = function(a, b) {return Math.floor(a / b);}, baseNum = "";
    do {
        rest.push(decNum % base);
        decNum = intDiv(decNum, base);
    } while (decNum > 0);

    for (i = rest.length - 1; i >= 0; i--) {
        baseNum += baseChar[rest[i]];
    }

    return baseNum;
}

function encode(phrase, key) {
    let char, encodedStr = "", asciiCode, getASCIIcodeFrom = function(a) { return a.charCodeAt() };
    let i, j; // Variáveis de controle

    for (i = 0; i < phrase.length; i++) {
        encodedStr += decToBase(key, getASCIIcodeFrom(phrase[i]));
        
    }
    return encodedStr;
}

function decode(phrase, key) {
    let char, decodedStr = "", validChar;
    let i, j; // Variáveis de controle

    for (i = 0; i < phrase.length; i++) {
        validChar = false;
        for (j = 0; j < key + 1; j++) {
            if (phrase[i] === baseChar[j]) {
                validChar = true;
                break;
            }
            else if (j === key) {
            }
        }
        if (validChar) {
            char = ASCIItoChar(baseToDec(key, phrase[i] + phrase[i + 1]));
            decodedStr += char;
            i += 1;          
        } 
        else {
            decodedStr += phrase[i];
        }
    }
    return decodedStr;
}
