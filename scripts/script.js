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

// Abrindo o modal

const openModalButton = document.querySelector("#btn-contato");
const closeModalButton = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
  if (!modal.classList.contains('hide')) {
    document.querySelector('#name').focus();
  } else {
    document.querySelector('#name').blur();
    document.querySelector('#email').blur();
    document.querySelector('#contato').blur();
    document.querySelector('#mensagem').blur();
  }
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

// Verificando o Formulario

function submitUserForm() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
      document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">Por favor, complete a verificação.</span>';
      return false;
  } else {
      var botaoConfirmarModal = document.getElementsByName('submit')[0]

      var inputNome = document.getElementById('name').value
      var inputEmail = document.getElementById('email').value
      var inputTelefone = document.getElementById('contato').value
      var inputMensagem = document.getElementById('mensagem').value
      var checkbox = document.getElementById('checkbox')

      var loader = document.getElementById('container-loader')
      var recaptcha = document.getElementsByClassName('g-recaptcha')[0]
       

      if (inputNome && inputEmail && inputTelefone && inputMensagem && checkbox.checked) {
            loader.style.display = 'block'
      }

      return true;
  }


}

// Verificando o reCAPTCHA
function verifyCaptcha() {
  document.getElementById('g-recaptcha-error').innerHTML = '';
}

