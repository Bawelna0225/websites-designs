const toggleButton = document.querySelector('.toggle'),
	sidebar = document.querySelector('.sidebar')

toggleButton.addEventListener('click', () => {
	sidebar.classList.toggle('open')
	if (sidebar.classList.contains('open')) {
		toggleButton.querySelector('span').textContent = 'chevron_left'
	} else {
		toggleButton.querySelector('span').textContent = 'chevron_right'  
    }
})
