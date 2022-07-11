const menuBtn = document.querySelector('.menu-btn-wrapper')
const mobileNav = document.querySelector('.mobile-nav')

menuBtn.onclick = () => {
    menuBtn.classList.toggle('open')
    mobileNav.classList.toggle('open')
}

const imgBx = document.querySelector('.imgBx'),
	slides = imgBx.getElementsByTagName('img'),
	contentBx = document.querySelector('.contentBx'),
	slidesText = contentBx.getElementsByTagName('div'),
	slidesControlBtn = document.querySelectorAll('.controls li')

let j = (i = 0)

slidesControlBtn.forEach((btn) =>
	btn.addEventListener('click', (e) => {
		if (e.target.getAttribute('data-slide') === 'previous') {
			setPreviousSlide()
		} else if (e.target.getAttribute('data-slide') === 'next') {
			setNextSlide()
		}
		btn.removeEventListener
	})
)

const setNextSlide = () => {
	slides[i].classList.remove('active')
	i = (i + 1) % slides.length
	slides[i].classList.add('active')

	slidesText[j].classList.remove('active')
	j = (j + 1) % slidesText.length
	slidesText[j].classList.add('active')
}
const setPreviousSlide = () => {
	slides[i].classList.remove('active')
	i = (i - 1 + slides.length) % slides.length
	slides[i].classList.add('active')

	slidesText[j].classList.remove('active')
	j = (j - 1 + slidesText.length) % slides.length
	slidesText[j].classList.add('active')
}
