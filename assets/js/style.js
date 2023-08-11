const navBar =document.querySelector('nav')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
navBar.classList.add('nav-scrolled')
    }
    else if (window.scrollY < 80){
        navBar.classList.remove('nav-scrolled')  
    }
})

