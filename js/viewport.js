/*
  viewport.js - development utility plugin for testing various device viewports
*/
(function() {
  var url = window.location.pathname,
      deviceList = document.createElement('div');
      deviceList.className = 'button-group';
      deviceList.innerHTML = '<div class="device-list"><button class="js-iphone-portrait">Iphone Portrait</button><button class="js-iphone-landscape">Iphone Landscape</button><button class="js-ipad-portrait">Ipad Portrait</button><button class="js-ipad-landscape">Ipad Landscape</button></div><button class="js-device-slider device-icon">&#10095;</button>';

  document.body.appendChild(deviceList);

  document.addEventListener('click', function(e) {
    var matches;
    (function(doc) {
      matches = doc.matchesSelector ||
                doc.webkitMatchesSelector ||
                doc.mozMatchesSelector ||
                doc.oMatchesSelector ||
                doc.msMatchesSelector;
    })(document.documentElement);

    if ( matches.call(e.target, 'button') ) {
      switch(e.target.className) {
      case ('js-iphone-portrait'):
        window.open(url,'','width=320,height=480');
        break;
      case ('js-iphone-landscape'):
        window.open(url,'','width=480,height=320');
        break;
      case ('js-ipad-portrait'):
        window.open(url,'','width=768,height=1024');
        break;
      case ('js-ipad-landscape'):
        window.open(url,'','width=1024,height=768');
        break;
      default:
        if (e.target.parentElement.childNodes[0].style.display=='block') {
          e.target.parentElement.childNodes[0].style.display='none';
        } else {
          e.target.parentElement.childNodes[0].style.display='block';
        };

      }
    }
  }, false);
})();
