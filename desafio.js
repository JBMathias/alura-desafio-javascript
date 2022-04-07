/* #7DaysOfCode

    Dia 6: Arrays e Coleções - Remoção de itens em Arrays.

*/
alert("Minha lista de Compras para o SuperMercado")
let frutas = []
let laticinios = []
let doces = []
let congelados = []
let outros = []
let secoes = [
    `\nFrutas`,
    `\nLaticinios`, 
    `\nDoces`, 
    `\nCongelados`,
    `\nOutros`
]
let verdadeiro = true

while(verdadeiro == true){
    let pergunta = prompt("Deseja comprar alguma coisa no supermercado? Responda SIM ou NÃO.").toLowerCase().trim()
    if(pergunta == 'sim'){
        let produto = prompt("O que deseja comprar?")
        let categoria = prompt(`Entre essas seções do mercado\n ${secoes}\n onde fica ${produto}?`)
        if(categoria.toLowerCase().trim() === "frutas"){
            frutas.push(produto)
        }else if(categoria.toLowerCase().trim() === "laticinios"){
            laticinios.push(produto)
        }else if(categoria.toLowerCase().trim() === "congelados"){
            congelados.push(produto)
        }else if(categoria.toLowerCase().trim() === "doces"){
            doces.push(produto)
        }else if(categoria.toLowerCase().trim() === "outros"){
            outros.push(produto)
        }else{
            alert("Seção não encontrada!!")
        }
        
        
    }else if(pergunta == 'não'){
        alert("Lista de compras terminada.")
        verdadeiro=false
                
    }else{
        alert("Entre com um valor válido: Respota válida é SIM ou NÃO")
    }
        
}document.write(`Sua lista de Compras:<br>Frutas:${frutas}<br>Laticinios:${laticinios}<br>Doces:${doces}<br>Congelados:${congelados}<br>Outros:${outros}<br><br>`)


verdadeiro = true
while(verdadeiro == true){
    pergunta_2 = prompt("Deseja remover algum item da lista? Digite SIM ou NÃO.").toLowerCase().trim()
        if(pergunta_2 === 'sim'){
            exclui_item = prompt("Qual produto deseja remover da lista?")
            obtem_lista = prompt(`De qual seção é ${exclui_item} em:\n ${secoes}`)
            if(obtem_lista === 'frutas'){
                frutas.splice(frutas.indexOf(exclui_item),1)
            }else if(obtem_lista === "laticinios"){
                laticinios.splice(laticinios.indexOf(exclui_item),1)
            }else if(obtem_lista === "congelados"){
                congelados.splice(congelados.indexOf(exclui_item),1)
            }else if(obtem_lista === "doces"){
                doces.splice(doces.indexOf(exclui_item),1)
            }else if(obtem_lista ==="outros"){
                outros.splice(outros.indexOf(exclui_item),1)
            }else{
                alert("Item a ser removido não encontrado. Verifique a lista!")
            }
        }else if(pergunta_2 === "não"){
            alert("Sessão Encerrada!")
            verdadeiro = false
            
        }else{
            alert("Entre com um valor válido: Respota válida é SIM ou NÃO")
        }

        
}document.write(`Sua lista de Compras:<br>Frutas:${frutas}<br>Laticinios:${laticinios}<br>Doces:${doces}<br>Congelados:${congelados}<br>Outros:${outros}`)