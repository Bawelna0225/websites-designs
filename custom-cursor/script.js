const customCursor = document.querySelector('.custom-cursor')
const navItems = document.querySelectorAll('.navbar ul li, a, button')

window.addEventListener('mousemove', (e) => {
	customCursor.style.left = `${e.clientX}px`
	customCursor.style.top = `${e.clientY}px`
})
window.addEventListener('mousedown', (e) => {
	customCursor.classList.add('mouse-down')
})
window.addEventListener('mouseup', (e) => {
	customCursor.classList.remove('mouse-down')

})

navItems.forEach((navItem) => {
    navItem.addEventListener('mouseenter', (e) => {
        customCursor.classList.add('over')
    })
    navItem.addEventListener('mouseleave', (e) => {
        customCursor.classList.remove('over')
    })
})
