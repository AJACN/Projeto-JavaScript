// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

// Calcular
function calcular() {
    if ((n1.value) <= 0) {
        res.innerHTML += `<p>O número de pessoas não pode ser nulo ou negativo!</p>`;
    } else if ((n1.value) <= 49) {
        res.innerHTML += `<p>Com uma quantidade de ${n1.value} pessoa(s) e um número de ${n2.value} dia(s), o valor é equivalente a R$${((4.50 * Number(n1.value)) * Number(n2.value)).toFixed(2)}</p>`
    } else if ((n1.value) <= 99) {
        res.innerHTML += `<p>Com uma quantidade de ${n1.value} pessoa(s) e um número de ${n2.value} dia(s), o valor é equivalente a R$${((4.10 * Number(n1.value)) * Number(n2.value)).toFixed(2)}</p>`
    } else if ((n1.value) <= 149) {
        res.innerHTML += `<p>Com uma quantidade de ${n1.value} pessoa(s) e um número de ${n2.value} dia(s), o valor é equivalente a R$${((3.80 * Number(n1.value)) * Number(n2.value)).toFixed(2)}</p>`
    } else if ((n1.value) > 149) {
        res.innerHTML += `<p>Com uma quantidade de ${n1.value} pessoa(s) e um número de ${n2.value} dia(s), o valor é equivalente a R$${((3.60 * Number(n1.value)) * Number(n2.value)).toFixed(2)}</p>`
     } else {
         res.innerHTML += `<p>Oops, algo deu errado!</p>`
     }
}

// Função para limpar os resultados
function limpar() {
    res.innerHTML = "";
}