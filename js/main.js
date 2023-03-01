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


const lightBtn = document.querySelector('.light-btn').addEventListener('click', () => {

    const lightOn = document.querySelector('.light')
    const activeBtn = document.querySelector('.light-btn')
    const notification = document.querySelector('.notification')

    lightOn.classList.toggle('on')
    activeBtn.classList.toggle('activeBtn')
    notification.classList.toggle('notification-active')

})



const scrollPage = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2500,
    delay: 400
})


scrollPage.reveal(`.lamp-content`, {delay: 100, origin: 'left'})
scrollPage.reveal(`.profile-image`, {delay: 200, origin: 'right'})
scrollPage.reveal(`.text-content`, {delay: 100, origin: 'top'})
scrollPage.reveal(`.location`, {delay: 200, origin: 'left'})
scrollPage.reveal(`.info`, {delay: 300, origin: 'bottom'})
