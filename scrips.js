
let chave = "90a90502a4cff7fe3714fed30c0d9410"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade){

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    ).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
    
    console.log(dados)
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value 

    
    buscarCidade(cidade)
}