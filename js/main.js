/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*=============== MENU SHOW ===============*/
/*Validate if content exists*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*======MENU HIDDEN ======*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(navLink => {
    navLink.addEventListener('click', linkAction)
})


/*==========CHANGE BACKGROUND HEADER =========*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}

window.addEventListener('scroll', shadowHeader);



/*============ EXPERIENCE =============*/
const modalViews = document.querySelectorAll('.experience__modal'),
    modalBtns = document.querySelectorAll('.experience__button'),
    modalClose = document.querySelectorAll('.experience__modal-close');


let modal = function(modalClick) {
        modalViews[modalClick].classList.add('active-modal')
    }

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})


















/*===================qualification tabs===========*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        // Remove the previous 'qualification__active' class from all tab contents
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        });

        // Add the 'qualification__active' class to the selected content
        target.classList.add('qualification__active')

        // Remove the 'qualification__active' class from all tabs
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        });

        // Add the 'qualification__active' class to the clicked tab
        tab.classList.add('qualification__active')
    });
});


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current them that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'Light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>  {
    //Add or remove the dark /icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//=============== SCROLL REVEAL ANIMATION ===============