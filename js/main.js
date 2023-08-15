$owl = $('body').find('.portfolio__content');
const carouselSettings = {
  items: 1,
  loop: true,
  smartSpeed: 600,
  margin: 15,
  stagePadding: 40,
};
function initialize(){
  if(window.innerWidth <= 428) {
    $owl.owlCarousel(carouselSettings);
    $owl.addClass('owl-carousel');
  } else {
    $owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    $owl.find('.owl-stage-outer').children().unwrap();
  }
}
let id;
$(window).resize( function() {
  clearTimeout(id);
  id = setTimeout(initialize, 500);
});
initialize();

// слайдер в хедере
$(".header-slider").owlCarousel({
  items: 1,
  loop: true,
  smartSpeed: 600,
  margin: 3,
});

$('.header-slider__next').click(function() {
  $(".header-slider").trigger('next.owl.carousel');
});

$('.header-slider__prev').click(function() {
  $(".header-slider").trigger('prev.owl.carousel');
});

// галерея Портфолио
Fancybox.bind("[data-fancybox]", {
  Thumbs: false,
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ["close"],
    },
  },
});

// анимация цифр статистики при скролле
var show = true;
var countbox = '.animated-number';
$(window).on('scroll load resize', function () {
  if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
  var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
  var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
  var w_height = $(window).height(); // Высота окна браузера
  var d_height = $(document).height(); // Высота всего документа
  var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
  if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
    $('.about__statistic-number').css('opacity', '1');
    $('.about__statistic-number').spincrement({
      thousandSeparator: '',
      duration: 2000
    });
    show = false;
  }
});
