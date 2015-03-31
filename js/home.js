$(document).ready(function(e) {
/*Home Page Slider script starts here*/
var $slides = $('#slides');
    
    //Initilizing the slider
    $slides.superslides({
        pagination: true
    });

	//Move to Case Studies Slides
	$slides.on('init.slides', function () {
		var paramValue=getParameterByName("sliderValue");
		if(paramValue== 'casestudies1'){
			$(".slides-navigation .next").trigger('click');
		}	
	});
   
    //Below code for Changing the content div on slider change
   $(".prev").css('visibility','hidden');
   $slides.on('animated.slides', function () {
      var current_index = $(this).superslides('current');

      for (var i = 1; i <= 9; i++) {
          $("#homeContent").hide();
          $("#caseStudyContent" + i).hide();
      }

      if(current_index == 0)
      {
        $("#homeContent").show();
        $(".prev").css('visibility','hidden');
      }
      else{
        $("#caseStudyContent" + current_index).show();
        $(".prev").css('visibility','visible');
      }
      
      $(".home-bg-img").css({
            'background-attachment': 'scroll'
            /*'background-position': '50% 0'*/
      });

      //Nav Selection code
      var dataNavValue = $(".home-bg-img").eq(current_index).attr('data-rel-menu');
      $(".navbar-nav li").removeClass('active');
      $(".navbar-nav li").each(function(){
        if($(this).attr('data-rel') == dataNavValue)
        {
          $(this).addClass('active'); 
        }
      });

    });


   $(".navbar-nav li:eq(0) a").on('click',function(){
      $(".slides-pagination a").eq(0).trigger('click');
   });

   // Below slider code for Touch Devices
   Hammer($slides[0]).on("swipeleft", function(e) {
        var current_index = $(this).superslides('current');
        $slides.data('superslides').animate('next');
        
        $(".home-bg-img").css({
            'background-attachment': 'scroll'
            /*'background-position': '50% 0'*/
        });

    });

    Hammer($slides[0]).on("swiperight", function(e) {
      var current_index = $(this).superslides('current');
        if(current_index != 0)
        {
          $slides.data('superslides').animate('prev');
        }
        
        $(".home-bg-img").css({
            'background-attachment': 'scroll'
           /* 'background-position': '50% 0'*/
        });
    });


    /*Home Page Slider script ends here */
});