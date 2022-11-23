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
