/* #7DaysOfCode

    Dia 2: Obtendo Informações do Usuário

*/
const nome = prompt("Qual o seu nome? ")
const idade = prompt("Quantos anos você tem? ")
const linguagem = prompt("Qual linguagem de programação você está estudando? ")
const mensagem = `Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}!`
alert(mensagem)
const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÂO.`)
document.write(`<h3>Nome: ${nome}<br>Idade: ${idade} Anos<br>Linguagem: ${linguagem}<br><br></h3>`)
document.write(`<h3>Pergunta: Você gosta de estudar ${linguagem}?</h3>`)

if(resposta == 1){
    document.write(`<h3>Resposta: SIM <br></h3>`)
    document.write("<h3>> Muito bom! Continue estudando e você terá muito sucesso.</h3>")
}else if(resposta == 2){
    document.write(`<h3>Resposta: NÃO<br></h3>`)
    document.write("<h3>> Ahh que pena... Já tentou aprender outras linguagens?</h3>")
}else{
    document.write(`<h3>> Você digitou ${resposta}. Por Favor, Digite apenas 1 ou 2.</h3>`)
}