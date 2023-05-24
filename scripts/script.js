// Fazendo com que o segundo ítem fique no meio do carousel
document.querySelectorAll('.depoimento')[2].scrollIntoView({
  inline: 'center',
  behavior: 'smooth',
});

// Index do item do meio atual
let currentIndex = 2;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => {

  // Se for o da esquerda diminui o valor, se não, aumenta
  currentIndex += e.id === 'anterior'? -1 : 1;
  const listaDeCards = document.querySelectorAll('.depoimento');

  // Garantindo que o index não saia do range válido
  // OBS: card 0 e -1 são vazios e só existem para que o primeiro e último possam ficar no meio
  if (currentIndex < 1) {
    currentIndex = listaDeCards.length - 2;
  } else if (currentIndex > listaDeCards.length - 2) {
    currentIndex = 1;
  }

  // Movendo os cards para que o card do index esteja no meio
  listaDeCards[currentIndex].scrollIntoView({
    inline: 'center',
    behavior: 'smooth',
  });
}));