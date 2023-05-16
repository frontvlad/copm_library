const tabsScroller = document.querySelector('.tabs__scroller');
const tabs = tabsScroller.querySelectorAll('.tabs__button');
const cards = document.querySelectorAll('.preview__card');

const htmlTabsContent = document.querySelector('.tabs__content--html');
const cssTabsContent = document.querySelector('.tabs__content--css');

const clickTabsHandler = () => {
  if (document.querySelector('[data-main-page]')) {
    checkActiveTab()
  }
  if (document.querySelector('[data-components-page]')) {
    checkActiveTabCode()
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', toggleTabs)
  })
}

const checkActiveTab = () => {
  tabs.forEach(tab => {
    if (tab.classList.contains('tabs__button--active')) {
      renderTabsContent(tab)
    }
  })
}


const checkActiveTabCode = () => {
  tabs.forEach(tab => {
    if (tab.classList.contains('tabs__button--active')) {
      renderTabsContentCode(tab)
    }
  })
}


const toggleTabs = (evt) => {
  tabs.forEach(tab => {
    tab.classList.remove('tabs__button--active');
  })
  evt.target.classList.add('tabs__button--active');
  if (document.querySelector('[data-main-page]')) {
    renderTabsContent(evt.target)
  }
  if (document.querySelector('[data-components-page]')) {
    renderTabsContentCode(evt.target)
  }
}

const renderTabsContent = (tab) => {
  if (tab.hasAttribute('data-type-all')) {
    cards.forEach(card => {
      card.style.display = 'block'
    })
  }

  if (tab.hasAttribute('data-type-complex')) {
    cards.forEach(card => {
      if (!card.hasAttribute('data-type-complex')) {
        card.style.display = 'none'
      } else {
        card.style.display = 'block'
      }
    })
  }

  if (tab.hasAttribute('data-type-simple')) {
    cards.forEach(card => {
      if (!card.hasAttribute('data-type-simple')) {
        card.style.display = 'none'
      } else {
        card.style.display = 'block'
      }
    })
  }
}


const renderTabsContentCode = (tab) => {
  if (tab.hasAttribute('data-type-html')) {
    htmlTabsContent.style.display = 'block'
    cssTabsContent.style.display = 'none'
  } else {
    htmlTabsContent.style.display = 'none'
    cssTabsContent.style.display = 'block'
  }
}


export { clickTabsHandler }
