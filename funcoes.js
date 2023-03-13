function atv1Aplicacao(){
    let valor= parseFloat(document.getElementById('valor').value)
    let saldo=(valor+(valor/100))
    document.getElementById('text-area').innerHTML=saldo
}

function atv2Desconto(){
    let valor= parseFloat(document.getElementById('valor').value)
    let saldo=(valor-((9/100 * valor)))
    document.getElementById('text-area').innerHTML=saldo
}

function atv3Desconto(){
    let horaAula= parseFloat(document.getElementById('horaAula').value)
    let quantidadeDeAulas=parseFloat(document.getElementById('quantidadeDeAulas').value)
    let percentualInss=parseFloat(document.getElementById('percentualInss').value)
    let salarioLiquido= (horaAula*quantidadeDeAulas)-(percentualInss/100*(horaAula*quantidadeDeAulas))
    document.getElementById('text-area').innerHTML=salarioLiquido
}

function atv4Prestacao(){
   let valor=  parseFloat(document.getElementById('valor').value)
   let tempoDeAtraso=parseFloat(document.getElementById('tempoDeAtraso').value)
   let taxa =parseFloat(document.getElementById('taxa').value)
    let prestacao=(valor+(valor*(taxa/100)*tempoDeAtraso))
    document.getElementById('text-area').innerHTML=prestacao
}

function atv5Litros(){
    let tempo= parseFloat(document.getElementById('tempo').value)
    let velocidadeMedia=parseFloat(document.getElementById('velocidadeMedia').value)
    let distancia=velocidadeMedia*tempo
    let litros= distancia /12
    let texto = ("A velocidade media é: "+ velocidadeMedia +"km/h, o tempo gasto é: "+tempo +"hora(as), a distância percorrida é: " + distancia +"km " +" e a quantidade de litros utilizados na viagem é(são): "+ litros+(' litros')) 
    document.getElementById('text-area').innerHTML=texto
}

function atv1ImparOupar(){
    let valor= parseFloat(document.getElementById('valor').value)
    let resposta=""
    if(valor%2==0){
        resposta="É par"
    }else{
        resposta="É impar"
    }


    document.getElementById('text-area').innerHTML=resposta
}

function atv2Nulo(){
    let valor= parseFloat(document.getElementById('valor').value)
    let resposta=""
    if(valor>0){
        resposta="É Positivo"
    }else if(valor<0){
        resposta="É Negativo"
    }else{
        resposta="É Nulo"

    }


    document.getElementById('text-area').innerHTML=resposta 
}

function atv3Valor(){
    
}

   
