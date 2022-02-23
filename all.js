$(document).ready(function () {
    
    $("a.link").append('<i class="fa-solid fa-sm fa-up-right-from-square"></i>');

    $(".blue-menu li").click(function (e) { 
        e.preventDefault();
        $(this).find("div").toggleClass("active");
        $(this).find("a").toggleClass("active");
        $(this).siblings().find("a").removeClass("active");
        $(this).siblings().find("div").removeClass("active");
        $(".white-menu li div,.white-menu>li>a").removeClass("active");
    });
    $(".white-menu li").click(function (e) { 
        e.preventDefault();
        $(this).find("div").toggleClass("active");
        $(this).find("a").toggleClass("active");
        $(this).siblings().find("a").removeClass("active");
        $(this).siblings().find("div").removeClass("active");
        
    });
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{
            delay:6500,
        },
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
     $(".gallery a").click(function (e) { 
       e.preventDefault();
       $(this).attr("data-lightbox","gallery1");
       $(this).siblings().attr("data-lightbox","gallery1")
       
     });
     $("button").click(function (e) { 
       e.preventDefault();
       $("html,body").animate(
         {scrollTop:0,},800);
         
       });
       
     });

