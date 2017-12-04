
$(document).ready(function(){

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
        draggable :true,
        swipe : true,
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

});