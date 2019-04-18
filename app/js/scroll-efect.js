(function () {
  window.extended = window.extended || {};
  function ScrollEffect () {
    document.addEventListener('scroll', function (e) {
      const scrollTop = document.documentElement.scrollTop;
      const MAX_HEIGHT = 400;
      const BG_STYLE = 'background-color: ';
      const mainWhite = 'rgba(246, 252, 254, alpha);';
      const mainBlue = 'rgba(7, 68, 94, alpha);';
      const normalize = (MAX_HEIGHT - scrollTop)/ MAX_HEIGHT;
      const SECOND_CLASS = 'second-screen';
      if (normalize > 0) {
        document.body.setAttribute('style', BG_STYLE + mainWhite.replace(/alpha/g, Math.abs(normalize)));
      }else {
        if(normalize <= -1) {
          document.body.classList.add(SECOND_CLASS);
        } else {
          document.body.classList.remove(SECOND_CLASS);
        }
        document.body.setAttribute('style', BG_STYLE + mainBlue.replace(/alpha/g, Math.abs(normalize)));
      }
    })
  }
  window.extended.ScrollEffect = ScrollEffect;
})();