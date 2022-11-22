const openMenuButtons = [...document.querySelectorAll('.open-menu')]

openMenuButtons.forEach((btn) => { 
  btn.addEventListener('click', (e) => {
		document.querySelector('.menu').classList.add('active')
		document.querySelector('.menu .lists').style.translate = `-${btn.getAttribute('data-menu-num') * 25}% 0%`
	})
})

window.addEventListener('click', function (e) {
	if (!document.querySelector('.nav').contains(e.target) && !document.querySelector('.menu').contains(e.target)) {
		// if user clicks outside menu close it
		document.querySelector('.menu').classList.remove('active')
	}
})

document.querySelector('.close-btn').addEventListener('click', () => {
	document.querySelector('.menu').classList.remove('active')
})

let darkMode = localStorage.getItem('darkMode')

const enableDarkMode = () => {
	document.body.classList.add('darkmode')
	localStorage.setItem('darkMode', 'enabled')
	document.querySelector('.dark-mode-toggle .material-symbols-outlined').textContent = 'light_mode'
}

const disableDarkMode = () => {
	document.body.classList.remove('darkmode')
	localStorage.setItem('darkMode', null)
	document.querySelector('.dark-mode-toggle .material-symbols-outlined').textContent = 'dark_mode'
}
if (darkMode === 'enabled') {
	enableDarkMode()
}

document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode')

	if (darkMode !== 'enabled') {
		enableDarkMode()
	} else {
		disableDarkMode()
	}
})
