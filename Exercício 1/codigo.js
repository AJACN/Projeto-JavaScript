// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let res = document.getElementById('res')

// Calcular
function calcular() {
    res.innerHTML += `<p>Com as horas extras, o valor do salário é de R$${(Number(n1.value) / 200) * (Number(n2.value) + (Number(n3.value) * 1.5)) + (Number(n1.value))}</p>`;
}

// Função para limpar os resultados
function limpar() {
    res.innerHTML = "";
}