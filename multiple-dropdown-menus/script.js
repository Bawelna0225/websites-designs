const openMenuButtons = [...document.querySelectorAll('.open-menu')]

openMenuButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (btn.classList.contains('active')) {
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

// =================== Dark Mode ======================== //

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
