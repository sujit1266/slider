var swiper = new Swiper(".mySwiper", {
     slidesPerView: 5,
     centeredSlides: false,
     spaceBetween: 9,
     slidesPerGroup: 5,
     slidesOffsetAfter: 65,
     slidesPerView: 'auto',
     pagination: {
       el: ".swiper-pagination",
       type: "fraction",
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });