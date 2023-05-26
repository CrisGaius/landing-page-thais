// Index do item do meio atual
let currentIndex = 2;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => {
  // Se for o da esquerda diminui o valor, se não, aumenta
  currentIndex += e.id === 'anterior'? -1 : 1;
  const listaDeCards = document.querySelectorAll('.depoimento');
  
  // Garantindo que o index não saia do range válido
  // OBS: Com telas maiores, sempre haverão ter três cards na tela, ou seja, o 1o e o último nunca estrão no meio
  if (window.innerWidth < 768) {
    if (currentIndex < 0) {
      currentIndex = listaDeCards.length - 1;
    } else if (currentIndex > listaDeCards.length -1) {
      currentIndex = 0;
    }
    } else {
    if (currentIndex < 2) {
      currentIndex = listaDeCards.length - 2;
    } else if (currentIndex > listaDeCards.length - 2) {
      currentIndex = 1;
    }
  }

  // Movendo os cards para que o card do index esteja no meio
  listaDeCards[currentIndex].scrollIntoView({
    inline: 'center',
    block: 'nearest',
    behavior: 'smooth',
  });
}));

// Abrindo Modal
var botao = document.getElementById('btn-contato')
var modal = document.getElementsByClassName('modal')[0]
var conteudo = document.getElementsByClassName('content')[0]

botao.addEventListener('click', function abrirModal() {
    modal.style.display = 'flex'
    var conteudo = document.getElementsByClassName('content')[0]
})

var fechar = document.getElementsByClassName('modal__close')[0]

fechar.addEventListener('click', function fecharModal () {
    
    modal.style.display = 'none'
})

//menu hamburguer

function teste () {
  var botaoMenu = document.getElementById('botao-menu')
  console.log(botaoMenu)
  var sobreElemento = document.getElementById('sobreElemento')
  var botaoElemento = document.getElementById('btn-contato')
}