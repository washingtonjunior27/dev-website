// MOBILE MENU

const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener('click', () => {
    const navbarList = document.querySelector('.navbar-list');

    navbarList.classList.toggle('active');
})


// MENU COLOR CHANGE

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');
    
    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
});

// CLOSE MENU ON CLICK
const links = document.querySelectorAll('.links');

Array.from(links).forEach(link => {
    link.addEventListener('click', () => {
        const navbarList = document.querySelector('.navbar-list');
        if(navbarList.classList.contains("active")){
            navbarList.classList.remove("active");
        }
    })
})
    
// const navbarList = document.querySelector('.navbar-list')

// navbarList.addEventListener("click", () => {
//     if(navbarList.classList.contains("active")){
//         navbarList.classList.remove("active");
//     }
// })

// DARK MODE

const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

// SLIDE

const swiper = new Swiper('.slide-contents', {
    slidesPerView: 3,
    spaceBetween: 25, 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        778: {
            slidesPerView: 2,
        },
        1030: {
            slidesPerView: 3,
        },
    }
});