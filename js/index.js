$(document).ready(function(){

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function(e) {
      e.stopPropagation();
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
    // Clicking away from nav will close navbar
    $('nav').mouseleave(function(){
        $(window).click(function() {
            
            $('nav ul').slideUp();
            $('#nav-toggle').removeClass('active');
    });

    });
    
    //hiding navbar on scroll down and show sidebar 
    'use strict';
  
    var c, currentScrollTop = 0,
       navbar = $('.navigation');
       iconbar = $('.icon-bar');
    $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     

      if (c < currentScrollTop && a > b + b + b) {
          navbar.addClass("scrollUp"); 
          iconbar.fadeIn("slow");
      }
      else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
       
      }
      else if(c > currentScrollTop ){
         iconbar.fadeOut("slow");
      }
      c = currentScrollTop;
    });

    //smooth scrolling on the page

     $("nav ul li a[href^='#']").on('click', function(e){
           e.preventDefault();
            
            $('html, body').animate({
               scrollTop: $(this.hash).offset().top 
            }, 500, function() {
                window.location.hash = this.hash;
            });
        });
        $("nav .icon-bar .otherpage a[href^='#']").on('click', function(e){
           e.preventDefault();
            
            $('html, body').animate({
               scrollTop: $(this.hash).offset().top 
            }, 500, function() {
                window.location.hash = this.hash;
            });
        });
      $("nav .icon-bar .toppage a[href^='#']").on('click', function(e){
           e.preventDefault();
            
            $('html, body').animate({
              scrollTop:0
            }, 'slow');
        });
      $(".navigation .brandone a[href^='#']").on('click',function(e){
            $('html, body').animate({
              scrollTop:0
            }, 'slow');
      });
      $(".navigation .nav-list a[href^='#']").on('click',function(e){
            $('html, body').animate({
              scrollTop:0
            }, 'slow');
      });





     //more about me 


     $('.aboutbutton').on('click', function(e){
           e.preventDefault();
            var $this = $(this);
            var $collapse = $this.closest('#about-section').find('.collapse');
            $collapse.collapse('toggle');
        });

     //skill bar 

             var $skillSection = $('.skill-wrapper');
        var skillIsVisible = false;
        $(window).scroll(function(){
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            var middle_of_skillSection = $skillSection.offset().top + $skillSection.outerHeight()/2;

            if((bottom_of_window > middle_of_skillSection)&& (skillIsVisible == false)){

              $('.skills-bar-container li').each( function(){

                var $barContainer = $(this).find('.bar-container');
                var dataPercent = parseInt($barContainer.data('percent'));
                var elem = $(this).find('.progressbar');
                var percent = $(this).find('.percent');
                var width = 0;

                var id = setInterval(frame, 15);

                function frame() {
                  if (width >= dataPercent) {
                      clearInterval(id);
                  } else {
                    width++;
                    elem.css("width", width+"%");
                    percent.html(width+" %");
                  }
                }
              });
              skillIsVisible = true;
            }
        });

  }); 
