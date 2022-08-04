//encode:
const encode = function (palavra, deslocamento) {
    var output = "";
    for (var i = 0; i < palavra.length; i++) {
        var atual = palavra[i];
        console.log(atual)
        var code = palavra.charCodeAt(i);
        console.log(code)
        if (code >= 65 && code <= 90) {
            atual = String.fromCharCode(((code - 65 + deslocamento) % 26) + 65);
            console.log(atual)
            console.log((((code - 65 + deslocamento) % 26) + 65))
        }
 
        else if (code >= 97 && code <= 122) {
        atual = String.fromCharCode(((code - 97 + deslocamento) % 26) + 97);
        }
        output += atual;
    }
   
    console.log(output)
    console.log(atual)
    return output;
};

const cipher = {encode};

//decode


export default cipher;

