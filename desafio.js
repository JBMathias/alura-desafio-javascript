/* #7DaysOfCode

    Dia 7: Funções em Javascript - Criando uma Calculadora.

*/
alert("Bem Vindo a Calculadora Básica v1.0")

function multiplicacao(numero1, numero2){
    return numero1 * numero2
}
function divisao(numero1, numero2){
    return numero1/numero2
}
function subitracao( numero1, numero2){
    return numero1 - numero2
}
function adicao(numero1, numero2){
    return numero1 + numero2
}

verdadeiro = true
while(verdadeiro){
    numero1 = Math.floor(prompt("Digite um número: "))
    opcao = prompt("Qual operação deseja realizar com a calculadora:\n (1) Soma\n (2) Subtração\n (3) Multiplicação\n (4) Divisão\n (5) Sair da Calculadora")
    if(opcao == 1){
        numero2 = Math.floor(prompt("Outro número: "))
        var soma = adicao(numero1, numero2)
        alert(`A Soma de: ${numero1.toLocaleString('pl-PL')} + ${numero2.toLocaleString('pl-PL')} = ${soma.toLocaleString('pl-PL')}`)
    }
    else if(opcao == 2){
        Math.floor(numero2 = prompt("Outro número: "))
        var sub = subitracao(numero1, numero2)
        alert(`A Subtração de: ${numero1.toLocaleString('pl-PL')} - ${numero2.toLocaleString('pl-PL')} = ${sub.toLocaleString('pl-PL')}`)
    }
    else if(opcao == 3){
        Math.floor(numero2 = prompt("Outro número: "))
        var multi = multiplicacao(numero1,numero2)
        alert(`A Multiplicação de: ${numero1.toLocaleString('pl-PL')} * ${numero2.toLocaleString('pl-PL')} = ${multi.toLocaleString('pl-PL')}`)
    }
    else if(opcao == 4){
        Math.floor(numero2 = prompt("Outro número: "))
        if(numero2 == 0){
            alert("Zero Division Error!")
            verdadeiro=false
        }
        else{
            var div = divisao(numero1,numero2)
            alert(`A Divisão de: ${numero1.toLocaleString('pl-PL')} / ${numero2.toLocaleString('pl-PL')} = ${div.toLocaleString('pl-PL')}`)

        }
        
    }
    else if(opcao == 5){
        alert("Até a próxima!")
        verdadeiro=false
    }
    else{
        alert("Digite uma operação válida!")
    }
}