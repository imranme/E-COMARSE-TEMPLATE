$(document).ready(function(){
    $("#dropButton").click(function(){
        $("#dropMenu").toggle("slow");
    });
});

/*        jquery Plugin
  -------------Slick slider-----------------------------------------------------
*/
$('.responsive').slick({
    dots: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  });
  // -------------------------- 3 slider section area ----------------------------------
  $('.slider_one_big_picture').EasySlides()

 



  // ----------------mixitup plugin ---------------------------------------------
  var config = document.querySelector('.mymixcont');
  var mixer = mixitup(config);