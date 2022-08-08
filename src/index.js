import cipher from './cipher.js';

document.getElementById("submit").addEventListener("click",clickCifrar)

function clickCifrar() {
    var palavra = document.getElementById("palavra").value 
    var deslocamento = document.getElementById("deslocamento");
    var cifra = cipher.encode(parseInt(deslocamento.value), palavra);
    document.getElementById("resposta").value = cifra;
    if (palavra ===""){
        window.alert("Escreva uma palavra")
    }
 
}


document.getElementById("submit1").addEventListener("click",clickCifrar1)

function clickCifrar1() {
    var palavra1 = document.getElementById("palavra1").value 
    var deslocamento1 = document.getElementById("deslocamento1");
    var cifra1 = cipher.decode(parseInt(deslocamento1.value), palavra1);
    document.getElementById("resposta1").value = cifra1;
    if (palavra1 ===""){
        window.alert("Escreva uma palavra")
}
}
