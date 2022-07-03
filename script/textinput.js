var ogText = document.querySelector("#og-text");
var encodedText = document.querySelector("#encoded-text");

function getKeys() {
    let keys = document.querySelector("#keys");
    let aux = [], i; // Variável auxiliar e váriavel de controle
    keys = keys.value.split(",");

    for (i = 0; i < keys.length; i++) {
        if (isNaN(parseInt(keys[i]))) {
            alert("You have not passed a valid key!");

            return 0;
        }

        aux.push(parseInt(keys[i]));
    }

    keys = aux;

    return keys;
}

function showEncrypt() {
    let keys = getKeys();
    if (keys === 0) return 0;
    let input = ogText.innerText;

    encodedText.innerText = encode(input, keys);
}

function showDecrypt() {
    let keys = getKeys();
    if (keys === 0) return 0;
    let input = encodedText.innerText, output;
    // if (input === "jasga://vjy.avzkwfg.bvo/ehstj?x=cXe4y9VdZgS")
        //rickroll();
    
    output = decode(input, keys);
    if (output.substring(0, 8) === "https://")
        ogText.innerHTML = `<a href="${output}" contentEditable="false" target="_blank" onclick="rickroll()">${output}</a>`;
    else ogText.innerText = output;

}

function rickroll() {
    console.log("uepa")
    document.body.style.backgroundImage = 'url("https://c.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif")';
}
