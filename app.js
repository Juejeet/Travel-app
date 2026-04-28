const preloader = document.querySelector('.preloader')
const hamburgurMenu = document.querySelector('.hambergur-menu')
const cancleHamburgur = document.querySelector('.cross-btn')
const hamburgurNav = document.querySelector('navbar')
// preloader 
window.addEventListener('load',()=>{
    preloader.classList.add('remove')
})

// hamburgur toggle 
hamburgurMenu.addEventListener('click',()=>{
    hamburgurMenu.classList.add('opened')
    cancleHamburgur.classList.remove('closed')
    hamburgurNav.classList.add('slide')
     document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'
})
cancleHamburgur.addEventListener('click',()=>{
    hamburgurMenu.classList.remove('opened')
    cancleHamburgur.classList.add('closed')
    hamburgurNav.classList.remove('slide')
    document.body.style.minHeight = '100vh'
    document.body.style.overflowY = 'scroll'
})