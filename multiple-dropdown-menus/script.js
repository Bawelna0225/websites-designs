const openMenuButtons = [...document.querySelectorAll('.open-menu')]

openMenuButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(btn.classList.contains('active')) {
      btn.classList.remove('active')
    } else {
      openMenuButtons.forEach((btn) => {
        btn.classList.remove('active')
      })
        btn.classList.add('active')
    } 
  })
})