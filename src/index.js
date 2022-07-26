import cipher from './cipher.js';
console.log(cipher);

const textInput = document.getElementById("palavra")
document.getElementById("submit").addEventListener("click",clickCifrar)
textInput.addEventListener ("submit",function(){

  if(!CheckChar) {
    e.preventDefault
      }
});
function CheckChar() {
const char = String.fromCharCode;
const pattern = "[a-zA-Z]";
if (char.match(pattern))
return true;
}
function clickCifrar() {
var palavra = document.getElementById("palavra").value 
var deslocamento = parseInt(document.getElementById("deslocamento").value);
var cifra = cipher.encode(palavra,deslocamento);
document.getElementById("resposta").value = cifra;
if (palavra ===""){
window.alert("Escreva uma palavra")
}
}
//document.getElementById("cifrar").addEventListener("click",clickCifrar);




