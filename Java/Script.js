// Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

let swiperProjects = new Swiper('.projects__container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 24,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // Emailjs
  const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact__name'),
        contactEmail = document.getElementById('contact__email'),
        contactProject = document.getElementById('contact-project'),
        contactMessage = document.getElementById('contact__message')
  const sendEmail = (e) => {
      e.preventDefault()
      if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '' || contactMessage.value === ''){
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        contactMessage.textContent = 'Please fill in all fields'
      }
      else{
        emailjs.sendForm('service_tcwl3di', 'template_q8uf8uf', contact-form, '9g7oESUzIBpXnvVzM')
        .then(() => {
            contactMessage.classList.remove('color-red')
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent successfully'
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            contactForm.reset()
        }, (error) => {
            contactMessage.classList.remove('color-blue')
            contactMessage.classList.add('color-red')
            contactMessage.textContent = 'OOPS! Something went wrong.', error
        })

        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
        contactMessage.value = ''

      }
      contactForm.addEventListener('submit', sendEmail)
    }

    // Scroll Sections Active
    const sections = document.querySelectorAll('section[id]')
    function scrollActive(){
        const scrollY = window.pageYOffset
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
                
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
          }
          else{
            sectionClass.classList.remove('active-link')
          }
        })
    }
    window.addEventListener('scroll', scrollActive)
    
    const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up')
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)

    // Dark Light Theme
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'ri-sun-line'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

    if(selectedTheme){
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    }

    // Activate / Deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
    })