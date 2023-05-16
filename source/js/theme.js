const toglersTheme = document.querySelectorAll('.js-theme');
const html = document.documentElement;

function themeHandler() {
  changeToglersThemeHandler()
  checkTheme()
}

function checkTheme() {
  if (localStorage.getItem('theme') === 'darck') {
    toglersTheme.forEach(togler => {
      togler.checked = true;
    })
    document.documentElement.dataset.themeDark = null;
  } else {
    toglersTheme.forEach(togler => {
      togler.checked = false;
    })
    document.documentElement.removeAttribute('data-theme-dark');
  }
}

function changeToglersThemeHandler() {
  toglersTheme.forEach(togler => {
    togler.addEventListener('change', function () {
      document.documentElement.toggleAttribute('data-theme-dark');
      if (document.documentElement.hasAttribute('data-theme-dark')) {
        toglersTheme.forEach(togler => {
          togler.checked = true;
        })
        localStorage.setItem('theme', 'darck');
      } else {
        toglersTheme.forEach(togler => {
          togler.checked = false;
        })
        localStorage.setItem('theme', 'white');
      }
    })
  });
}



export { themeHandler }


