document.addEventListener("DOMContentLoaded", (event)  => {
  if (window.extended) {
    const tabs = new window.extended.Tabs();
    // now thanks to prototype we have 'removeClasses' available on tabs uncomment to see its magic.
    //tabs.removeClasses(document.getElementsByClassName('tab'), '__selected')
    window.extended.ScrollEffect();
  }else {
    console.error('unable to initialized extended classes');
  }
});