const contextMenuButton = document.querySelector('.header__toggler-mobile-menu');
const contextMenu = document.querySelector('.context-menu');

function clickButtonMenuHandler() {
  if (contextMenuButton) {
    contextMenuButton.addEventListener("click", function () {
      document.documentElement.classList.toggle('content--lock');
      contextMenu.classList.toggle('context-menu--active');
      contextMenuButton.classList.toggle('header__toggler-mobile-menu--active');
    });
  }
}

export {clickButtonMenuHandler}
