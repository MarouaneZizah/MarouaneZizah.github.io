$('.sliderDetails').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable :false,
    swipe : false,
    touchMove : false,
    pauseOnHover : false,
    asNavFor: '.mainSlider'
});

$(".mainSlider").slick({
    autoplay : true,
    speed : 2000,
    autoplaySpeed: 3000,
    infinite: true,
    asNavFor: '.sliderDetails',
    arrows : false,
    dots: false,
    draggable :false,
    swipe : false,
    touchMove : false,
    pauseOnHover : false,
    centerMode: true, 
    slidesToShow:3,
    slidesToScroll: 1,
    responsive : true,
    responsive: 
    [
        {
            breakpoint: 768,
            settings: 
            {
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: 
            {
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$(document).on('click', 'a[href^="#"]', function (event) 
{
    event.preventDefault();
    $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top - 80 }, 'slow');
});

$(window).scroll(function()
{    
    var a = 112;
    var pos = $(window).scrollTop();
    if(pos > a) 
    {
        $("nav").addClass('scrollNav');
    }
    else 
    {
        $("nav").removeClass('scrollNav');
    }
});