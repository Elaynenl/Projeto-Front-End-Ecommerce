document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        slidesPerView: 1,

        breakpoints: {
            1024: {
            slidesPerView: 2 // Exibe 2 slides por vez em telas maiores ou iguais a 1024px
            },
            1728: {
            slidesPerView: 3 // Exibe 3 slides por vez em telas maiores ou iguais a 1728px
            }
        }, 
      
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },

        loop: true,

    });
})