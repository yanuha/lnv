function ready() {

  // Class Handlers
  var hasClass = function (elem, className) {
      return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  };

  var addClass = function (elem, className) {
      if (!hasClass(elem, className)) {
          elem.className += ' ' + className;
      }
  };

  var removeClass = function (elem, className) {
      var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
      if (hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
              newClass = newClass.replace(' ' + className + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
      }
  };

  // Show Card Functions
  if ( 'querySelector' in document && 'addEventListener' in window ) {

    var showCardItems = document.querySelectorAll('.js-lnv-contact-card-show-btn');
    var hideCardBtn = document.querySelector('.js-lnv-contact-card-hide-btn');
    var showCard = document.querySelector('.js-lnv-contact-card-w');

    for (var i = 0, len = showCardItems.length; i < len; i++) {
      var showCardItem = showCardItems[i];
      showCardItem.addEventListener('click', function(e) {
        addClass(showCard, 'js-show-card');
      });

      hideCardBtn.addEventListener('click', function(e) {
        if ( hasClass(showCard, 'js-show-card') ) {
            removeClass(showCard, 'js-show-card');
        }
      });
    }
  }

  // sidebar show
  function classToggle() {
    document.querySelector('.js-layout-main-w').classList.toggle('active-sidebar');
  }
  document.querySelector('.js-toggle-sidebar').addEventListener('click', classToggle);
}

document.addEventListener("DOMContentLoaded", ready);
