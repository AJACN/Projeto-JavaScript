// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

// Soma
function somar() {
    res.innerHTML += `<p>O resultado da soma entre ${n1.value} e ${n2.value} é ${Number(n1.value) + Number(n2.value)}</p>`;
}

// Subtração
function subtrair() {
    res.innerHTML += `<p>O resultado da subtração entre ${n1.value} e ${n2.value} é ${Number(n1.value) - Number(n2.value)}</p>`;
}

// Multiplicação
function multiplicar() {
    res.innerHTML += `<p>O resultado da multiplicação entre ${n1.value} e ${n2.value} é ${Number(n1.value) * Number(n2.value)}</p>`;
}

// Divisão
function dividir() {
    if (n2.value == 0) {
        res.innerHTML += `<p>Não é possível dividir por zero!</p>`;
    } else {
        res.innerHTML += `<p>O resultado da divisão entre ${n1.value} e ${n2.value} é ${Number(n1.value) / Number(n2.value)}</p>`;
    }
}

// Potência (n1 elevado a n2)
function potencia() {
    res.innerHTML += `<p>${n1.value} elevado a ${n2.value} é ${Math.pow(Number(n1.value), Number(n2.value))}</p>`;
}

// Raiz quadrada (somente de n1)
function raizQuadrada() {
    if (Number(n1.value) < 0) {
        res.innerHTML += `<p>Não é possível calcular a raiz quadrada de um número negativo!</p>`;
    } else {
        res.innerHTML += `<p>A raiz quadrada de ${n1.value} é ${Math.sqrt(Number(n1.value))}</p>`;
    }
}

// Função para limpar os resultados
function limpar() {
    res.innerHTML = "";
}
