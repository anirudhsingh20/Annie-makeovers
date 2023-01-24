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
    slidesToScroll: 1,
    dots:true,
    variableWidth: true,
    arrows: true,
    infinite: false,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1225,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
          // centerMode: true,
          arrows: false
        }
      },{
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          centerMode: false,
          arrows: false
        }
      }]
  });

$('.book-now-cta').click(function() {
  window.open("https://wa.me/919871123304?text=Hello%20Annie%27s%20Makeovers%2C%0A%0AI%20would%20like%20to%20request%20a%20booking.");
})