(function () {
  window.extended = window.extended || {};

  function removeClasses(domElements, className) {
    for (let i = 0; i < domElements.length; i++) {
        domElements[i].classList.remove(className);
    }
  }

  function Tabs () {
    const tabs = document.getElementsByClassName('tab');
    for (let j = 0; j < tabs.length; j++) {
      const tab = tabs[j];
      tab.addEventListener('click', function (event) {
        removeClasses(tabs, '__selected');
        this.classList.add('__selected');
        const TR_TL = 'transform: translatePOS(VALpx)';
        const seletedInd = document.getElementById('bg-selected');
        const mainTabs = document.querySelector('.tabs');
        let finalTransform = '';
        if (mainTabs.offsetHeight < mainTabs.offsetWidth) {
         finalTransform = TR_TL.replace(/POS/g, 'X').replace(/VAL/g, this.offsetLeft - this.offsetWidth);
        }else {
        finalTransform = TR_TL.replace(/POS/g, 'Y').replace(/VAL/g, this.offsetTop - this.offsetHeight - 20);
        }
        seletedInd.setAttribute('style', finalTransform);
      });
    }
  }
  // there is no need to expose this function but .... just to show the power of prototype :)
  Tabs.prototype.removeClasses = removeClasses;
  window.extended.Tabs = Tabs;
})();