 $( document ).ready(function() {
   $('.js-price__slider').slick({
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,
  nextArrow: '.price-slider-next',
  prevArrow: '.price-slider-prev',
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
        
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

    $('.js-doing-icons').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {//это параметр, на котором слайдер начинает разбиваться
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
      }
    }
  ]
});
     $('.js-review__slider').slick({
      dots: true,
      nextArrow: '.review-slider__next',
      prevArrow: '.review-slider__prev',
      responsive: [
    {
      breakpoint: 1150,
      settings: {
        arrows: false
        
      }
    }
  ]
     })


     $('.nav-mobile').click(function(){
      //toggleClass - класс добавляется и удаляется автоматом при клике
        $(this).toggleClass('active');
        $('.main-nav__list').toggleClass('mobile-show');
     });


     //просто какой-то код с инета, который позволяет скроллить к разделу
     $('.scroll-link').click(function() {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        
      });

    //просто загугли -пмагнифиг попап, опен форм
     $('.popup-link').magnificPopup({
        type: 'inline'
    });


 });