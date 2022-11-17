const openMenuButtons = [...document.querySelectorAll('.open-menu')]
console.log(openMenuButtons);

openMenuButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		btn.classList.toggle('active')
		document.querySelector('.menu').classList.add('active')
		document.querySelector('.menu').style.translate = `-${btn.getAttribute('data-menu-num') * 25}% 0%`
	})
})

window.addEventListener("click", function (e) {
  if (
    !document.querySelector('.nav').contains(e.target) &&
    !document.querySelector('.menu').contains(e.target)
  ) {
    // if user clicks outside menu close it
    document.querySelector(".menu").classList.remove("active");
  }
});