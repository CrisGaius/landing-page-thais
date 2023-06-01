// Seleção da imagem principal
if (window.innerWidth <= 750) {
  document.querySelector('.desktop').style.display = 'none';
  document.querySelector('.mobile').style.display = 'block';
}
window.addEventListener('resize', () => {
  if (window.innerWidth <= 750) {
    document.querySelector('.desktop').style.display = 'none';
    document.querySelector('.mobile').style.display = 'block';
  } else {
    document.querySelector('.mobile').style.display = 'none';
    document.querySelector('.desktop').style.display = 'block';
  }
})

// Index do item do meio atual
let currentIndex = window.innerWidth <= 750? 0 : 1;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => {
  // Se for o da esquerda diminui o valor, se não, aumenta
  if (window.innerWidth >= 751) {
    currentIndex += e.id === 'anterior'? -3 : 3;
  } else {
    currentIndex += e.id === 'anterior'? -1 : 1;
  }

  const listaDeCards = document.querySelectorAll('.depoimento');
  
  // Garantindo que o index não saia do range válido
  // OBS: Com telas maiores, sempre haverão ter três cards na tela, ou seja, o 1o e o último nunca estrão no meio
  if (window.innerWidth <= 750) {
    if (currentIndex < 0) {
      currentIndex = listaDeCards.length - 1;
    } else if (currentIndex > listaDeCards.length - 1) {
      currentIndex = 0;
    }
  } else {
    if (currentIndex < 1) {
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

// // Abrindo Modal
// const botao = document.getElementById('btn-contato'); // pegando o botão do site que vai abrir o modal
// const modal = document.getElementsByClassName('modal')[0]; //pegando o modal completo
// let conteudo = document.getElementsByClassName('content')[0]; //pegando o conteúdo do modal
// const x = document.getElementById('X');

// //Ao clicar no botão
// botao.addEventListener('click', function abrirModal() { 
//     modal.style.display = 'flex'; // modal irá aparecer
//     conteudo = document.getElementsByClassName('content')[0];
// })

// const fechar = document.getElementsByClassName('modal__close')[0]; //pegar o "X" que fecha o modal

// //ao clicar no X que fecha o botão
// fechar.addEventListener('click', function fecharModal () {
//     modal.style.display = 'none'; //fazemos o modal completo desaparecer
//     conteudo.classList.toggle('animar')
// });

const openModalButton = document.querySelector("#btn-contato");
const closeModalButton = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

// var botaoConfirmarModal = document.getElementsByName('submit')[0]

// var loader = document.getElementById('container-loader')

// botaoConfirmarModal.addEventListener('click', () => {
//   var inputNome = document.getElementById('name').value
//   var inputEmail = document.getElementById('email').value
//   var inputTelefone = document.getElementById('contato').value
//   var inputMensagem = document.getElementById('mensagem').value
//   var checkbox = document.getElementById('checkbox')

//   if (inputNome && inputEmail && inputTelefone && inputMensagem && checkbox.checked) {

//     if (inputEmail.includes('@') && inputEmail.length > 3) {
//       loader.style.display = 'block'
//     } else {
//       console.log('erro!')
//     }

//   }

// })

