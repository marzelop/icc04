var ogText = document.querySelector("#og-text");
var encodedText = document.querySelector("#encoded-text");

function getKeys() {
    let keys = document.querySelector("#keys");
    return parseInt(keys.value);
}

function showEncrypt() {
    let keys = getKeys();
    if (keys === 0) return 0;
    let input = ogText.innerText;

    encodedText.innerText = encode(input, keys);
}

function showDecrypt() {
    let keys = getKeys();
    let input = encodedText.innerText, output;
    output = decode(input, keys);
    ogText.innerText = output;

}
