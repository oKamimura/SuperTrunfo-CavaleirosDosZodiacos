
var carta1 = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        Força: 85,
        Técnica: 50,
        Conhecimento: 50
    }
}

var carta2 = {
    nome: "Athena",
    imagem: "https://saintseiya-cdn.gaming.ph/images/thumb/7/73/Kido-full.jpg/x256px-Kido-full.jpg.pagespeed.ic.w7_ca3IK2z.jpg",
    atributos: {
        Força: 10,
        Técnica: 20,
        Conhecimento: 95
    }
}

var carta3 = {
    nome: "Shun de Andrômeda",    
    imagem: "http://pm1.narvii.com/6400/1c55c6cbf4831e75b9f678e742a5212c6face3f6_00.jpg",
    atributos: {
        Força: 60,
        Técnica: 85,
        Conhecimento: 55
    }
}

var carta4 = {
    nome: "Shiryu",
    imagem: "https://i.pinimg.com/originals/ee/8f/c4/ee8fc4d0035b3584c49a24006fa0be9b.jpg",
    atributos: {
          Força: 80,
        Técnica: 65,
        Conhecimento: 40
    }
}

var carta5 = {
    nome: "Ikki de Fênix",
    imagem: "https://i.pinimg.com/736x/ee/8f/93/ee8f9359b8532a7b142abc3755c6c49e.jpg",
    atributos: {
           Força: 83,
        Técnica: 65,
        Conhecimento: 40
    }
}

var carta6 = {
    nome: "Aiolos de Sagitário",
    imagem: "https://pbs.twimg.com/profile_images/972584396141277184/QAY0Kg8S_400x400.jpg",
    atributos: {
          Força: 90,
        Técnica: 70,
        Conhecimento: 35
    }
}

var carta7 = {
    nome: "Hyoga",
    imagem: "https://s.aficionados.com.br/imagens/hyoga.jpg",
    atributos: {
       Força: 85,
        Técnica: 45,
        Conhecimento: 40
    }
}

var carta8 = {
    nome: "Marin de Águia",
    imagem: "https://static.wikia.nocookie.net/saintseya/images/0/01/Marin_hades.png/revision/latest/top-crop/width/360/height/450?cb=20130622231543&path-prefix=pt",
    atributos: {
        Força: 75,
        Técnica: 45,
        Conhecimento: 30
    }
}

var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]
//            0           1           2          3         4            5            6           7     
var pontosJogador = 0
var pontosMaquina = 0

atualizarPlacar()
atualizaQtndDeCartas()

function atualizaQtndDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML= html
}

function atualizarPlacar() {
     var divPlacar = document.getElementById('placar')
     var html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina"
   divPlacar.innerHTML = html
  }

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
    
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)

    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    cartas.splice(numeroCartaJogador, 1)
  
  
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0){
      alert ('Fim do jogo')
      if(pontosJogador>pontosMaquina){
        htmlResultado = '<p class="resultado-final">Você venceu a máquina</p>'        
       }else if (pontosJogador<pontosMaquina){
          htmlResultado = '<p class="resultado-final">Você perdeu para a máquina</p>'       
       }else{
          htmlResultado = '<p class="resultado-final">Você empatou com a máquina</p>'       
       }
      }else{
        document.getElementById("btnProximaRodada").disabled = false
      }
    
  
  
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

     
  
  
     atualizarPlacar()
     exibeCartaMaquina()
     atualizaQtndDeCartas()
  
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div><div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById("btnProximaRodada").disabled = false
  
  var divResultado = document.getElementById('resultado')
  
  divResultado.innerHTML = ''
}