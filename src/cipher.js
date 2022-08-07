const encode = function (deslocamento, palavra) {
    var output = "";
    for (var i = 0; i < palavra.length; i++) {
        var atual = palavra[i];
              var code = palavra.charCodeAt(i);
              if (code >= 65 && code <= 90) {
            atual = String.fromCharCode(((code - 65 + deslocamento) % 26) + 65);
        }
         else if (code >= 97 && code <= 122) {
        atual = String.fromCharCode(((code - 97 + deslocamento) % 26) + 97);
        }
        output += atual;
    }
    return output;
};


const decode = function (deslocamento1, palavra1) {
    var output1 = "";
    for (var i1 = 0; i1 < palavra1.length; i1++) {
        var atual1 = palavra1[i1];
              var code1 = palavra1.charCodeAt(i1);
              if (code1 >= 65 && code1 <= 90) {
               atual1 = String.fromCharCode(((code1 - 65 - deslocamento1) % 26) + 65);
            }   
        
               else if (code1 >= 97 && code1 <= 122) {
               atual1 = String.fromCharCode(((code1 - 97 - deslocamento1) % 26) + 97);
                }
       
        output1 += atual1;
    }
    return output1;
};

const cipher = {encode, decode};

export default cipher;

