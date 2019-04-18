"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  if (window.extended) {
    var tabs = new window.extended.Tabs(); // now thanks to prototype we have 'removeClasses' available on tabs uncomment to see its magic.
    //tabs.removeClasses(document.getElementsByClassName('tab'), '__selected')

    window.extended.ScrollEffect();
  } else {
    console.error('unable to initialized extended classes');
  }
});
"use strict";

(function () {
  window.extended = window.extended || {};

  function ScrollEffect() {
    document.addEventListener('scroll', function (e) {
      var scrollTop = document.documentElement.scrollTop;
      var MAX_HEIGHT = 400;
      var BG_STYLE = 'background-color: ';
      var mainWhite = 'rgba(246, 252, 254, alpha);';
      var mainBlue = 'rgba(7, 68, 94, alpha);';
      var normalize = (MAX_HEIGHT - scrollTop) / MAX_HEIGHT;
      var SECOND_CLASS = 'second-screen';

      if (normalize > 0) {
        document.body.setAttribute('style', BG_STYLE + mainWhite.replace(/alpha/g, Math.abs(normalize)));
      } else {
        if (normalize <= -1) {
          document.body.classList.add(SECOND_CLASS);
        } else {
          document.body.classList.remove(SECOND_CLASS);
        }

        document.body.setAttribute('style', BG_STYLE + mainBlue.replace(/alpha/g, Math.abs(normalize)));
      }
    });
  }

  window.extended.ScrollEffect = ScrollEffect;
})();
"use strict";

(function () {
  window.extended = window.extended || {};

  function removeClasses(domElements, className) {
    for (var i = 0; i < domElements.length; i++) {
      domElements[i].classList.remove(className);
    }
  }

  function Tabs() {
    var tabs = document.getElementsByClassName('tab');

    for (var j = 0; j < tabs.length; j++) {
      var tab = tabs[j];
      tab.addEventListener('click', function (event) {
        removeClasses(tabs, '__selected');
        this.classList.add('__selected');
        var TR_TL = 'transform: translatePOS(VALpx)';
        var seletedInd = document.getElementById('bg-selected');
        var mainTabs = document.querySelector('.tabs');
        var finalTransform = '';

        if (mainTabs.offsetHeight < mainTabs.offsetWidth) {
          finalTransform = TR_TL.replace(/POS/g, 'X').replace(/VAL/g, this.offsetLeft - this.offsetWidth);
        } else {
          finalTransform = TR_TL.replace(/POS/g, 'Y').replace(/VAL/g, this.offsetTop - this.offsetHeight - 20);
        }

        seletedInd.setAttribute('style', finalTransform);
      });
    }
  } // there is no need to expose this function but .... just to show the power of prototype :)


  Tabs.prototype.removeClasses = removeClasses;
  window.extended.Tabs = Tabs;
})();