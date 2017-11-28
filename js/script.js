
$(document).ready(function(){

    $(".center").slick({
        autoplay : true,
        speed : 2000,
        autoplaySpeed: 3000,
        infinite: true,
        
        arrows : false,
        dots: false,

        draggable :false,
        swipe : false,
        touchMove : false,
        pauseOnHover : true,
        
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive : true,
        responsive: 
        [
            {
                breakpoint: 768,
                settings: 
                {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: 
                {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});