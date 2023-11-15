$(document).ready(function() {

  // Slider
  $('#slider-home').slick({
    dots: true,
    arrows: false,
    speed: 1000
  });

  $('#slider-product').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      }, {
      breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }
    }]
  });

  // Set background
  SetBannerBackground();

});

function SetBannerBackground() {

  $('[data-bg]').each(function (i) {
    var url_background = $(this).data("bg");
    // $(this).css('background', '#FFFFFF url(' + url_background + ') no-repeat right');
    $(this).backstretch(url_background);
  });

}