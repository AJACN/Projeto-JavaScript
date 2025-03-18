// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById('n1')
let res = document.getElementById('res')

// Calcular
function calcular() {
    if ((n1.value) <= 0) {
        res.innerHTML += `<p>O salário não pode ser nulo ou negativo!</p>`;
    } else if ((n1.value) <= 1200) {
        res.innerHTML += `<p>Seu salário recebeu um bônus de 16%, se tornando R$${(Number(n1.value) * 1.16).toFixed(2)}</p>`
    } else if ((n1.value) <= 2100) {
        res.innerHTML += `<p>Seu salário recebeu um bônus de 13%, se tornando R$${(Number(n1.value) * 1.13).toFixed(2)}</p>`
    } else if ((n1.value) <= 3000) {
        res.innerHTML += `<p>Seu salário recebeu um bônus de 10%, se tornando R$${(Number(n1.value) * 1.1).toFixed(2)}</p>`
    } else if ((n1.value) > 3000) {
        res.innerHTML += `<p>Seu salário recebeu um bônus de 5%, se tornando R$${(Number(n1.value) * 1.05).toFixed(2)}</p>`
     } else {
         res.innerHTML += `<p>Oops, algo deu errado!</p>`
     }
}

// Função para limpar os resultados
function limpar() {
    res.innerHTML = "";
}