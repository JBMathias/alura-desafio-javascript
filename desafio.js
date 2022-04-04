/* #7DaysOfCode

    Dia 3: Estruturas de Controle de Fluxo.

*/
alert("Bem Vindo ao Game Developer");
let area = prompt("Qual área da tecnologia deseja seguir: (Back-End ou Front-End)?").toLowerCase().trim()
if(area === 'front-end'){
    const linguagem = prompt("Qual linguagem você deseja seguir aprendendo: (React ou Vue)?")
    const especializacao = prompt(`Agora chegou a sua vez de se especializar. Deseja se aprofundar em ${linguagem} ou seguir se desenvolvendo para se tornar Fullstack.`)
    const mensagem = `Área: ${area[0].toUpperCase()+area.slice(1)}<br> Linguagem: ${linguagem[0].toUpperCase()+linguagem.slice(1)}<br> Especialização: ${especializacao[0].toUpperCase()+especializacao.slice(1)}`
    document.write(mensagem)

    }
else if(area === 'back-end'){
    const linguagem = prompt("Qual linguagem você deseja seguir aprendendo: (C# ou Java)?")
    const especializacao = prompt(`Agora chegou a sua vez de se especializar. Deseja se aprofundar em ${linguagem[0].toUpperCase()+linguagem.slice(1)} ou seguir se desenvolvendo para se tornar Fullstack.`)
    const mensagem = `Área: ${area[0].toUpperCase()+area.slice(1)}<br> Linguagem: ${linguagem[0].toUpperCase()+linguagem.slice(1)}<br> Especialização: ${especializacao[0].toUpperCase()+especializacao.slice(1)}`
    document.write(mensagem)
    
}
else{
    alert("Entre com uma Área de Tecnologia Válida.")
}    
    
let pergunta = prompt("Tem mais alguma tecnologia que você gostarai de aprender? (Responda 1 para SIM ou 2 para NÃO.)")
if(pergunta == 1){
    let contador = prompt("Quantas tecnologias deseja aprender? Ex: 5")
    const lista_de_linguagens=[]
    while(contador !=0){
        const outra_linguagem = prompt("Quais linguagens gostaria de conhecer? ")
        lista_de_linguagens.push(outra_linguagem[0].toUpperCase()+outra_linguagem.slice(1))
        contador-=1
    }
    document.write(`<p>Outras_Linguagens: ${lista_de_linguagens}</p>`)
}else if(pergunta == 2){
    alert("Obrigado por participar ;)")
}else{
    alert("Digite 1 ou 2")
    let contador = prompt("Quantas tecnologias ainda deseja aprender? Ex: 5")
    const lista_de_linguagens=[]
    while(contador !=0){
        const outra_linguagem = prompt("Quais linguagens gostaria de conhecer? ")
        lista_de_linguagens.push(outra_linguagem[0].toUpperCase()+outra_linguagem.slice(1))
        contador-=1
    }
    document.write(`<p>Outras_Linguagens: ${lista_de_linguagens}</p>`)
}
