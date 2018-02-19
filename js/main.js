// LISTENERS DE BOTOES
document.getElementById("btn-somar").addEventListener("click", somar);
document.getElementById("btn-subtrair").addEventListener("click", subtrair);
document.getElementById("btn-dividir").addEventListener("click", dividir);
document.getElementById("btn-multiplicar").addEventListener("click", multiplicar);
document.getElementById("btn-resultado").addEventListener("click", resultado);
document.getElementById("btn-limpar").addEventListener("click", limpar);

var conta = document.getElementById("ipt-conta");
var numeroDigitado = document.getElementById("ipt-numero");

var auxiliar = 0;

function definirValor(valor) {
    if (numeroDigitado.value == 0 || !numeroDigitado.value) { 
        numeroDigitado.value = valor;
    } else {
        numeroDigitado.value += valor;
    }
}

function somar() {
    ajustaContaEAuxiliar("+");
    numeroDigitado.value = null;
}

function subtrair() {
    ajustaContaEAuxiliar("-");
    numeroDigitado.value = null;
}

function dividir() {
    ajustaContaEAuxiliar("/");  
    numeroDigitado.value = null;
}

function multiplicar() {
    ajustaContaEAuxiliar("*");
    numeroDigitado.value = null;
}

function ajustaContaEAuxiliar(simboloAritmetico) {
    // atribui o valor digitado à string da conta e depois concatena com o símbolo
    conta.value += numeroDigitado.value;
    concatenarStringConta(simboloAritmetico);
    // se o auxiliar estiver vazio (não tinha conta feita antes) ele passa a ser o número digitado
    if (!auxiliar) {
        auxiliar = numeroDigitado.value;
    }
}

function resultado() {
    var caracteresDaConta = conta.value.split('')
    var resultado;
    for (var i = 0; i < caracteresDaConta.length; i++) {
        resultado = calcular(caracteresDaConta[i]);
    }
    limpar();
    // mostra o resultado no input numeroDigitado
    numeroDigitado.value = resultado;
    // auxiliar passa a ser o resultado (para ser usado na próxima conta, caso não limpe)
    auxiliar = resultado;
}

function concatenarStringConta(simbolo) {
    switch (simbolo) {
        case '+':
            conta.value += "+"
            break;
        case '-':
            conta.value += "-"
            break;
        case '/':
            conta.value += "/"
            break;
        case '*':
            conta.value += "*"
            break;
    }
}

function calcular(simbolo) {
    switch (simbolo) {
        case '+':
            return parseInt(auxiliar) + parseInt(numeroDigitado.value);
            break;
        case '-':
            return parseInt(auxiliar) - parseInt(numeroDigitado.value);
            break;
        case '/':
            return parseInt(auxiliar) / parseInt(numeroDigitado.value);
            break;
        case '*':
            return parseInt(auxiliar) * parseInt(numeroDigitado.value);
            break;
    }
}

function limpar() {
    conta.value = null;
    numeroDigitado.value = null;
    auxiliar = null;
}