var btnFeedback = document.querySelector('.contacts .btn');
var popup = document.querySelector('.modal-content');
var btnClose = document.querySelector('.btn-modal-close');
var modalOverlay = document.querySelector('.modal-overlay');
var formFeedback = document.querySelector('.modal');
var inputEmail = popup.querySelector('input[type=email]');
var inputName = popup.querySelector('input[type=text]');
var textMessage = popup.querySelector('textarea');

var storageName = localStorage.getItem('name');
var storageEmail = localStorage.getItem('email');

btnFeedback.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal-content-show');
  inputName.focus();

  if (storageName) {
    inputName.value = storageName;
    inputEmail.focus();
  }
  if (storageEmail) {
    inputEmail.value = storageEmail;
    textMessage.focus();
  }
  modalOverlay.classList.add('modal-overlay-show');
});

btnClose.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-content-show');
  popup.classList.remove("modal-error");
  modalOverlay.classList.remove('modal-overlay-show');
});

formFeedback.addEventListener("submit", function(event) {
  if (!inputName.value || !inputEmail.value || !textMessage.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    console.log('Введите имя и емэйл');
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('email', inputEmail.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
