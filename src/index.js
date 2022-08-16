import cipher from './cipher.js';

document.getElementById("submit").addEventListener("click",clickCifrar)

function clickCifrar() {
    var palavra = document.getElementById("palavra").value 
    var deslocamento = document.getElementById("deslocamento").valueAsNumber;
    try{
        var cifra = cipher.encode(deslocamento, palavra);
        document.getElementById("resposta").value = cifra;
    }
    catch(error){
        alert(error.message)
    }
}

document.getElementById("submit1").addEventListener("click",clickCifrar1)

function clickCifrar1() {
    var palavra1 = document.getElementById("palavra1").value 
    var deslocamento1 = document.getElementById("deslocamento1").valueAsNumber;
    try{
        var cifra1 = cipher.decode(deslocamento1, palavra1);
        document.getElementById("resposta1").value = cifra1;
    }
    catch(error){
        alert(error.message)
    }

}