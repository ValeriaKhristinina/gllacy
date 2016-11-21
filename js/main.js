var btnFeedback = document.querySelector('.contacts .btn');
var popup = document.querySelector('.modal-content');
var btnClose = document.querySelector('.btn-modal-close');
var inputName = popup.querySelector('.modal input[type=text]');
var modalOverlay = document.querySelector('.modal-overlay');

btnFeedback.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal-content-show');
  inputName.focus();
  modalOverlay.classList.add('modal-overlay-show');
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('modal-content-show');
  modalOverlay.classList.remove('modal-overlay-show');
});
