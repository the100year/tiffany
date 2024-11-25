const slideContainer = document.querySelector('.header_inner');
const prevBtn = document.querySelector('.img_pr');
const nextBtn = document.querySelector('.img_ne');
const slides = document.querySelectorAll('.slide');

let slideIndex = 1;
let isAnimating = false; 

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.classList.add('clone');
lastClone.classList.add('clone');


slideContainer.appendChild(firstClone); 
slideContainer.insertBefore(lastClone, slides[0]); 

const totalSlides = slideContainer.querySelectorAll('.slide');
slideContainer.style.transition = 'none';
slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

const moveSlide = (direction) => {
  if (isAnimating) return; 
  isAnimating = true;

  slideIndex += direction;
  slideContainer.style.transition = 'transform 0.5s ease-in-out';
  slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

  slideContainer.addEventListener('transitionend', () => {
    if (slideIndex === totalSlides.length - 1) {
      slideIndex = 1; 
      slideContainer.style.transition = 'none';
      slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    if (slideIndex === 0) {
      slideIndex = totalSlides.length - 2; 
      slideContainer.style.transition = 'none';
      slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    isAnimating = false;
  });
};

prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));


const menuItems = document.querySelectorAll('.all_menu_left > li > a');
menuItems[0].classList.add('active');
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
        event.preventDefault(); 

        menuItems.forEach((item) => item.classList.remove('active'));

        menuItem.classList.add('active');
    });
});
const menuItems1 = document.querySelectorAll('.all_menu_right > li > a');
menuItems1[0].classList.add('active');
menuItems1.forEach((menuItem1) => {
    menuItem1.addEventListener('click', (event) => {
        event.preventDefault(); 

        menuItems1.forEach((item) => item.classList.remove('active'));

        menuItem1.classList.add('active');
    });
});



const allListHidden = document.querySelector('.all_list_hidn');
const viewButton = document.querySelector('.h_button > a');

viewButton.addEventListener('click', (event) => {
    event.preventDefault();
    allListHidden.style.display = 'grid'; 
    viewButton.style.display = 'none';
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

});

var swiper = new Swiper(".swiper1", {
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 0,
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  on: {
    slideChange: updateActiveSlide,
    slideChangeTransitionEnd: updateActiveSlide,
    init: function () {
      updateActiveSlide();
    }
  },
});

function updateActiveSlide() {
  const slides = document.querySelectorAll(".swiper-slide");
  
  slides.forEach((slide) => {
    slide.classList.remove("is-active");
  });

  const activeIndex = swiper.activeIndex; 
  const middleSlide = slides[activeIndex]; 
  
  if (middleSlide) {
    middleSlide.classList.add("is-active");
  }
}

