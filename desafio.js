/* #7DaysOfCode

    Dia 5: Arrays e Coleções.

*/
alert("Minha lista de Compras para o SuperMercado")
let secoes = [
    `\nBebidas`,
    `\nAcougue`, 
    `\nCereais`, 
    `\nEnlatados`, 
    `\nFrios`, 
    `\nLaticinios`, 
    `\nMaterial de Limpeza`, 
    `\nHigience Pessoal`, 
    `\nPeixaria`, 
    `\nHortifruti (frutas, legumes e verduras)`, 
    `\nPadaria`
]
let verdadeiro = true
let supermercado = new Object()
while(verdadeiro == true){
    let pergunta = prompt("Deseja comprar alguma coisa no supermercado? Responda SIM ou NÃO.").toLowerCase().trim()
    if(pergunta == 'sim'){
        let produto = prompt("O que deseja comprar?")
        let categoria = prompt(`Entre essas sessoes do mercado\n ${secoes}\n onde fica${produto}?`)
        supermercado[categoria] = produto
        console.log(supermercado)
        
    }else if(pergunta == 'não'){
        alert("Lista de comprar terminada.")
        verdadeiro=false
                
    }else{
        alert("Entre com um valor válido")
    }
        
}document.write(`Sua lista de Compras:<br> `+JSON.stringify(supermercado))

