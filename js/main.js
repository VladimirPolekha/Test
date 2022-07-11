$(function(){
    $('.slider__recall').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
      });
      $('.awards__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
      });
      $('.document').onclick = function(e) {
        console.log(e.target.id)
        if (e.target.getAttribute('class') === 'card-tag'){
            document.getElementById(e.target.id).classList.add('active-tag')
        }else  if (e.target.getAttribute('class') === 'card-tag active-tag'){
            document.getElementById(e.target.id).classList.remove('active-tag');
        }
    };
});