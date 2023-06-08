// Função para exibir a notificação
function showNotification(message) {
    var notificationBar = document.getElementById('notification-bar');
    var notificationMessage = document.getElementById('notification-message');
  
    // Define a mensagem da notificação
    notificationMessage.textContent = message;
  
    // Exibe a notificação
    notificationBar.style.display = 'block';
  }
  
  // Função para fechar a notificação
  function closeNotification() {
    var notificationBar = document.getElementById('notification-bar');
    notificationBar.style.display = 'none';
  }
  
  // Evento de clique no botão de fechar
  var closeButton = document.getElementById('notification-close');
  closeButton.addEventListener('click', closeNotification);
  
  // Exemplo de uso da notificação
showNotification('Nova promoção: 20% de desconto em todos os cursos desenvolvimento mobile!');

var images = document.getElementsByClassName('slideshow-image');
var descriptions = document.getElementsByClassName('image-description');
var currentIndex = 0;

// Função para exibir a imagem atual do carrossel
function showImage(index) {
  // Remove a classe 'active' de todas as imagens e descrições
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
    descriptions[i].style.display = 'none';
  }

  // Adiciona a classe 'active' à imagem atual e exibe a descrição correspondente
  images[index].classList.add('active');
  descriptions[index].style.display = 'block';

  currentIndex = index;
}

// Evento de clique no botão Anterior
var prevButton = document.getElementsByClassName('prev-button')[0];
prevButton.addEventListener('click', function() {
  var prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = images.length - 1;
  }

  showImage(prevIndex);
});

// Evento de clique no botão Próximo
var nextButton = document.getElementsByClassName('next-button')[0];
nextButton.addEventListener('click', function() {
  var nextIndex = currentIndex + 1;
  if (nextIndex >= images.length) {
    nextIndex = 0;
  }

  showImage(nextIndex);
});

// Exibe a primeira imagem ao carregar a página
showImage(0);

