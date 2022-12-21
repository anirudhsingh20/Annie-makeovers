var navHeight = $('#navigation').height();

$(window).scroll(function () {
  var position = window.pageYOffset;
  $('.section').each(function () {
    console.log(navHeight);
    var target = $(this).offset().top - 320;
    console.log(target, position);
    var id = $(this).attr('id');
    var navLinks = $('#navigation li a');
    if (position >= target) {
      navLinks.removeClass('active');
      $('#navigation li a[href="#' + id + '"]').addClass('active');
    }
  });
});

$('.catalogue').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
    variableWidth: true,
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          centerMode: false,
          arrows: false
        }
      },]
  });

  