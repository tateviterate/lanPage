window.onload = function () {

    $('.carousel1').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin: 0,
        nav: false,
        dots:true,
        items: 1,
        itemsCustom: false,
        responsive: {
            0 : {
                items:1
            }
        }
    });


};

    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            var first = $('.home-service-first').offset().top;
            var second = $('.home-service-second').offset().top;
            var third = $('.home-service-third').offset().top;
       


         console.log(scroll);

            if(scroll < first){
            
                $(".home-service-first").addClass("active-part");
                $(".home-service-second").removeClass("active-part");
               
            }else if(scroll >=first && scroll <second ){
                
                $(".home-service-second").addClass("active-part");
                 $(".home-service-first").removeClass("active-part");
                   $(".home-service-third").removeClass("active-part");
                  
          

            }else if(scroll >=second && scroll < third){
                
                $(".home-service-third").addClass("active-part");
                     $(".home-service-second").removeClass("active-part");
                     $(".home-service-first").removeClass("active-part");

            }


        })


            $(".home-service-video-layer").click(function(){
                $(".video-modal").fadeIn();
        
                });

            $(".close").click(function(){
                $(".video-modal").fadeOut();
        
                });


    });
