const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_4kpc6df','template_h1qiyyl','#contact-form','ymww5csoamfe3JVKW')

    .then(() => {
        contactMessage.textContent = 'Message envoyé avec succès'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    })
}

contactForm.addEventListener('submit', sendEmail)


function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    } 

}

window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

var typingEffect = new Typed(".typedText", {
    strings: ["Designer Web", "Développeur Frontend"],
    loop : true,
    typeSpeed: 100,
    backSpeed : 80,
    backDelay : 2000
})

const sr = ScrollReveal ({
    origin : 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.featured-text-card', {})
sr.reveal('.featured_name', {delay: 100})
sr.reveal('.featured-text-info', {delay: 200})
sr.reveal('.featured-text-btn', {delay: 200})
sr.reveal('.social_icons', {delay: 200})
sr.reveal('.featured-image', {delay: 300})

sr.reveal('.projet-box', {interval: 200})

sr.reveal('.top-header', {})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.apropos-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})

const srRightt = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.skills-box', {delay: 100})
srLeft.reveal('.form-control', {delay: 100})

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' +sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' +sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)