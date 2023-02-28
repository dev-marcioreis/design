const openToggle = document.querySelector('.openToggle')
const closeToggle = document.querySelector('.closeToggle')
const menuToggle = document.querySelector('.navbar')
const navLink = document.querySelectorAll('.nav__link')

openToggle.addEventListener('click', () => {
    menuToggle.classList.add('openMenu')
    openToggle.style.display = 'none'
    closeToggle.style.display = 'block'
})

const closeMenu = () => {
    menuToggle.classList.remove('openMenu')
    closeToggle.style.display = 'none'
    openToggle.style.display = 'block'
}

closeToggle.addEventListener('click', closeMenu)

function activeLink() {
    navLink.forEach(item => {
        item.classList.remove('active')
        this.classList.add('active')
    })
}
navLink.forEach(item => {
    item.addEventListener('click', activeLink)
})