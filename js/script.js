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

var lastId,
    topMenu = $("ul.navbar-nav"),
    topMenuHeight = topMenu.outerHeight()+1,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function()
    {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

$(document).on('click', 'a[href^="#"]', function (event) 
{
    event.preventDefault();
    $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top - 40 }, 850, 'swing');
});

/*
menuItems.click(function(e)
{
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    
    $('html, body').stop().animate({ 
      scrollTop: offsetTop
    }, 850);
    e.preventDefault();
});
*/


$(window).scroll(function()
{
    var fromTop = $(this).scrollTop()+topMenuHeight;
   
    var cur = scrollItems.map(function()
    {
        if ($(this).offset().top < fromTop) return this;
    });

    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
   
    if (lastId !== id) 
    {
       lastId = id;
        
       menuItems.removeClass("active").filter("[href='#"+id+"']").addClass("active");

       //menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
    }    

    var scrollHeight = $(document).height(),
	    scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) 
    {
        menuItems.removeClass("active").filter("[href='#contactSection']").addClass("active");
	}
});