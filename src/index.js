import cipher from './cipher.js';
console.log(cipher);

document.getElementById("submit").addEventListener("click",clickCifrar)

function clickCifrar() {
    var palavra = document.getElementById("palavra").value 
    var deslocamento = document.getElementById("deslocamento");
    var cifra = cipher.encode(palavra,parseInt(deslocamento.value));
    document.getElementById("resposta").value = cifra;
    console.log(palavra,typeof deslocamento.value)
    if (palavra ===""){
        window.alert("Escreva uma palavra")
    }
}





