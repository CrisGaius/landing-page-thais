// Index do item do meio atual
let currentIndex = 2;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => {
  // Se for o da esquerda diminui o valor, se não, aumenta
  currentIndex += e.id === 'anterior'? -1 : 1;
  const listaDeCards = document.querySelectorAll('.depoimento');
  
  // Garantindo que o index não saia do range válido
  // OBS: sempre haverão ter três cards na tela, ou seja, o 1o e o último nunca estrão no meio
  if (currentIndex < 2) {
    currentIndex = listaDeCards.length - 2;
  } else if (currentIndex > listaDeCards.length - 2) {
    currentIndex = 1;
  }
  console.log(currentIndex)
  // Movendo os cards para que o card do index esteja no meio
  listaDeCards[currentIndex].scrollIntoView({
    inline: 'center',
    block: 'nearest',
    behavior: 'smooth',
  });
}));