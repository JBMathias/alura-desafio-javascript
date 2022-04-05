/* #7DaysOfCode

    Dia 4: Mais Loops e Randomização.

*/
const min=0
const max=10
const sorte_aleatoria = Math.floor(Math.random() * (max - min + 1) + min)

const sorte_fixa = 7
let tentativa = 3
let chute = 0
let contador = 0
let log_resposta = [];
alert("Bem Vindo ao Game Adivinha Número");

while(chute != sorte_aleatoria){
    chute=prompt("Chute um número entre 0 e 10:")
    tentativa = tentativa -1
    contador = contador + 1
    if(chute == sorte_aleatoria){
        alert(`Parabéns, Você acertou! O número sorteado era ${sorte_aleatoria} e você ainda tinha ${tentativa} tentativas`)
        log_resposta.push(chute)
        const mensagem = `Número Sorteado:${sorte_aleatoria}<br>Último Número Escolhido:${chute}<br>Tentativas: ${contador}<br>Respostas:${log_resposta}`
        document.write(mensagem)
        break
    }else{
        if(chute > sorte_aleatoria){
            alert("Você errou!! Dica: É um número menor")
            log_resposta.push(chute)
        }else{
            alert("Você errou!! Dica: É um número maior")
            log_resposta.push(chute)
        }
        alert(`Você ainda tem ${tentativa} tentativas`)
    }
    if(tentativa == 0){
        alert(`Suas tentativas acabaram, você perdeu!! O número era ${sorte_aleatoria}`)
        const mensagem = `Número Sorteado:${sorte_aleatoria}<br>Último Número Escolhido:${chute}<br>Tentativas: ${contador}<br>Respostas:${log_resposta}`
        document.write(mensagem)
        break
    }
}
alert("Fim de Jogo")