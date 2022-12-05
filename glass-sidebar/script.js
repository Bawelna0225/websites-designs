const toggleButton = document.querySelector('.toggle'),
	sidebar = document.querySelector('.sidebar'),
	navItems = document.querySelectorAll('.nav-item')

toggleButton.addEventListener('click', () => {
	sidebar.classList.toggle('open')
	if (sidebar.classList.contains('open')) {
		toggleButton.querySelector('span').textContent = 'chevron_left'
	} else {
		toggleButton.querySelector('span').textContent = 'chevron_right'
	}
})

navItems.forEach((navItem) => {
	navItem.addEventListener('click', () => {
		navItems.forEach((navItem) => navItem.classList.remove('active'))
		navItem.classList.add('active')
	})
})

let touchstartX = 0
let touchendX = 0

function checkDirection() {
	if (touchendX < touchstartX && sidebar.classList.contains('open')) sidebar.classList.remove('open')

	if (touchendX > touchstartX && !sidebar.classList.contains('open')) sidebar.classList.add('open')
}

sidebar.addEventListener('touchstart', (e) => {
	touchstartX = e.changedTouches[0].screenX
})

sidebar.addEventListener('touchend', (e) => {
	touchendX = e.changedTouches[0].screenX
	checkDirection()
})
