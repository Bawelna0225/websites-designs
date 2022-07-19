//Sticky
window.addEventListener('scroll', function () {
	var header = document.querySelector('header')
	header.classList.toggle('sticky', window.scrollY > 0)
})
//Mobile Menu
const menuBtn = document.querySelector('.menu-btn')
const mobileNav = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open')
	mobileNav.classList.toggle('open')
})



//Back to Top
const backToTopButton = document.querySelector('#back-to-top-btn')

window.addEventListener('scroll', scrollFunction)

function scrollFunction() {
	if (window.pageYOffset > 300) {
		// Show backToTopButton
		if (!backToTopButton.classList.contains('btnEntrance')) {
			backToTopButton.classList.remove('btnExit')
			backToTopButton.classList.add('btnEntrance')
			backToTopButton.style.display = 'flex'
		}
	} else {
		// Hide backToTopButton
		if (backToTopButton.classList.contains('btnEntrance')) {
			backToTopButton.classList.remove('btnEntrance')
			backToTopButton.classList.add('btnExit')
			setTimeout(function () {
				backToTopButton.style.display = 'none'
			}, 250)
		}
	}
}

backToTopButton.addEventListener('click', smoothScrollBackToTop)

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
	const targetPosition = 0
	const startPosition = window.pageYOffset
	const distance = targetPosition - startPosition
	const duration = 750
	let start = null

	window.requestAnimationFrame(step)

	function step(timestamp) {
		if (!start) start = timestamp
		const progress = timestamp - start
		window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration))
		if (progress < duration) window.requestAnimationFrame(step)
	}
}

function easeInOutCubic(t, b, c, d) {
	t /= d / 2
	if (t < 1) return (c / 2) * t * t * t + b
	t -= 2
	return (c / 2) * (t * t * t + 2) + b
}
