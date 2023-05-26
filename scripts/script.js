// Seleção da imagem principal
if (window.innerWidth <= 768) {
  document.querySelector('.desktop').style.display = 'none';
  document.querySelector('.mobile').style.display = 'block';
}
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    document.querySelector('.desktop').style.display = 'none';
    document.querySelector('.mobile').style.display = 'block';
  } else {
    document.querySelector('.mobile').style.display = 'none';
    document.querySelector('.desktop').style.display = 'block';
  }
})

// Index do item do meio atual
let currentIndex = window.innerWidth <= 768? 0 : 1;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => {
  // Se for o da esquerda diminui o valor, se não, aumenta
  if (window.innerWidth >= 768) {
    currentIndex += e.id === 'anterior'? -3 : 3;
  } else {
    currentIndex += e.id === 'anterior'? -1 : 1;
  }

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
const botao = document.getElementById('btn-contato');
const modal = document.getElementsByClassName('modal')[0];
let conteudo = document.getElementsByClassName('content')[0];

botao.addEventListener('click', function abrirModal() {
    modal.style.display = 'flex';
    conteudo = document.getElementsByClassName('content')[0];
})

const fechar = document.getElementsByClassName('modal__close')[0];

fechar.addEventListener('click', function fecharModal () {
    modal.style.display = 'none';
});
