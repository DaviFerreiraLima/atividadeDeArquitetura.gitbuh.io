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

function atv3SomaEOpera(){
    let numero1= parseFloat(document.getElementById('valor1').value)
    let numero2 =parseFloat(document.getElementById('valor2').value)

    let resposta= ""
        if((numero1+numero2)>20){
        resposta = (numero1+numero2)+8
        }else{
        resposta= (numero1+numero2)-5
        }
        document.getElementById('text-area').innerHTML=resposta 
    }
   
function atv4Prestacao(){
    let salario= parseFloat(document.getElementById('salario').value)
    let prestacao =parseFloat(document.getElementById('prestacao').value)
    let resposta=""

    if(prestacao>(40*salario/100)){
        resposta="Empréstimo não pode ser concedido"
    }else{
        resposta="Empréstimo pode ser concedido"
    }
    document.getElementById('text-area').innerHTML=resposta 
}

function atv5Aceitacao(){
    let sexo = parseFloat(document.getElementById('sexo').value)
    let idade =parseFloat(document.getElementById('idade').value)
    let nome = String(document.getElementById('nome').value)
    let resposta=""

    if(sexo==1 && idade<25){
        resposta=`${nome} foi ACEITO(A)`
    }
    else{
        resposta=`${nome} NÃO FOI foi ACEITO(A)`
    }
    document.getElementById('text-area').innerHTML=resposta 
}

function atv6Media(){
    let nome = String(document.getElementById('nome').value)
    let nota1= parseFloat(document.getElementById('valor1').value)
    let nota2 =parseFloat(document.getElementById('valor2').value)
    let media= (nota1+nota2)/2
    let resposta

    if(media>=7){
         resposta =`Aluno ${nome} foi aprovado com média de: ${media} \n Nota 1: ${nota1}\n Nota 2: ${nota2} `

    }else if( media>=3 && media<7){
         resposta=`Aluno ${nome} foi posto em Prova Final com média de: ${media} \n Nota 1: ${nota1}\n Nota 2: ${nota2} `
    }else{
         resposta=`Aluno ${nome} foi reprovado com média de: ${media} \n Nota 1: ${nota1}\n Nota 2: ${nota2} `
    }
    document.getElementById('text-area').innerHTML=resposta 
}