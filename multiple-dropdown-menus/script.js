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

window.addEventListener('click', function (e) {
	if (!document.querySelector('.nav').contains(e.target) && !document.querySelector('.dropdown-menu').contains(e.target)) {
		// if user clicks outside menu close it
		openMenuButtons.forEach((btn) => {
        btn.classList.remove('active')
      })
	}
})