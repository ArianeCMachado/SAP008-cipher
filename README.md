# Cipher

Primeiro projeto da turma SAP008 da Laboratoria
https://arianecmachado.github.io/SAP008-cipher/

## 🚀 Introdução a aplicação

Nesse projeto foi pensado um local para que o usuário pudesse codificadar e descodificar suas senhas.
Sabemos que a segurança digital é muito importante nos dias de hoje. Os usuários devem ter cuidado e não utilizar palavras de uso cotidiano, como nome dos filhos ou parceiro, datas de nascimento, números sequenciais.
Então para isso, neste local, o usuário poderá utilizar dessas palavras e expressões que ele não esquecerá e codificar em uma outra que não será facilmente descoberta.

### 📋 Funcionalidade

O usuário colocará escrito a palavra ou expressão que ele não esquecerá.
Escolherá um número de deslocamento.
E apertando no botão, aparecerá aquela palavra já codificada, pronta para uso.

E após ele pode fazer a ação reversa.
De colocar a palavra codificada, escolher o deslicamento de volta.
E ao apertar o botão, terá sua palavra inicial.


### 🔧 Passo a passo 

Primeiro, foi idealizado como seria o prototipo de baixa fidelidade.
<img src="./Img/prototipo.jpeg">
Após, escrito o HTML.
E o cipher.js, onde foi feita a lógica para funcionar, com os calculos adequados.

Primeiro para o code com letras maisculas e depois com letras minusculas.
```
String.fromCharCode(((code - 65 + deslocamento) % 26) + 65)
String.fromCharCode(((code - 97 + deslocamento) % 26) + 97)
```

E após o encode com letras maiusculas e depois com letras minusculas.

```
String.fromCharCode(((code1 - 65 - deslocamento1) % 26) + 65)
atual1 = String.fromCharCode(((code1 - 97 - deslocamento1) % 26) + 97)
```

E assim colocado a mensagem para caso o usuário não escreva nada
```
   if (palavra1 ===""){
        window.alert("Escreva uma palavra")
```
E por final o calculo para não letras

```
(code >= 32 && code <= 64) {
atual = String.fromCharCode(code)
```


### 🔩 Teste

O primeiro teste verifica a importação do JS para o HTML.

```
export default cipher;
```

Os testes verificam se o Offset para maisculas e minusculas estão funcionando.


## ✒️ Autores

Projeto realizado por Ariane Costa Machado. Com grande ajuda de todo o pessoal da Laboratoria, mas especialmente: Palomita, Gabriel, Thali, Gui e Moni. <3


_________________________________________________________________________________________________________________________
