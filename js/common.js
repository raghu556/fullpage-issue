function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
$(document).ready(function(e) {

 var mq2 = window.matchMedia("(min-width: 768px)");
    if (mq2.matches) {
        $("li.dropdown").hover(function(e) {
			
            //var refThis = $(this);
            $(".dropdown").removeClass("open");
            //  $(".dropdown-menu").css("display", "none");
            $(".navbar-nav > li > a").css("background", "none");
            //$(".dropdown-menu", refThis).css("display", "block");
            //$(".navbar-nav > li.dropdown.talk-to-an-expert > a").css("background", "#43d220");
        });
		
		
    }

$("li.dropdown a").click(function(){
var refHref = $(this).attr("href");	
$(location).attr("href", refHref);
})

$(".photo-container").each(function(i){
  $(this).hover(function(){
    $("#overLay").show();
    //$(".popup-profile-contailer").css({"margin-top":$(window).scrollTop()});
    $(".prfile-img img").attr("src", $(this).find("img").attr("src"));
    $(".popup-profile-contailer .prfile-content-cnt").html($(".profiles:eq("+i+")").html());
    $(".popup-profile-contailer h5").html($(this).next("h5").html()).next().html($(this).next("h5").next().html());
  });  
});
//$(".close-btn").click(function(){
  //$("#overLay").hide();
//});
$(window).scroll(function(){
  //console.log($(window).scrollTop());
  //$(".popup-profile-contailer").css({"margin-top":$(window).scrollTop()});
});     

var mq = window.matchMedia("(min-width: 768px)");
    if (mq.matches) {
        var animateCheck =true;
        var topslidemenu = $('.top-slide-menu'),
        navslideMenu = $('.top-slide-menu'),
        srlines = $('.nav-button span');
        $('.nav-button, .navbar-toggle').on('click', function(){     
            if(animateCheck) {
                animateCheck = false;
                topslidemenu.animate({'right' : "-900px"}, 'slow',function(){
                    animateCheck = true;
                });
            }
            
            srlines.toggleClass("sr-lines-rotate-0");
        });
}


$(window).scroll(function(){
var mq1 = window.matchMedia("(min-width: 1200px)");
    if (mq1.matches) {
$(".home-bg-img").css({
   'background-attachment' : 'fixed'
   
});
}
/*else {
$(".home-bg-img").css({
'background-attachment' : 'fixed',
'background-position' : '50% 50px'
});
}*/
});
$(".cloud-img").removeClass("hover");
setInterval(function(){
 var eqNo = Math.floor((Math.random() * Math.round($(".cloud-img").length)) ); 
  /*$(".front").mouseout();
  $(".front:eq("+eqNo+")").mouseover(); */
  $(".cloud-img:eq("+eqNo+")").addClass("hover");
  setTimeout(function(){
   $(".cloud-img:eq("+eqNo+")").removeClass("hover");
   },16500);
 },8250);
// var winHeight=$(".home-bg-img").height();
// var cntHEight= winHeight - 300 ;

// $(".h1heading").css("top",cntHEight);

/*Customer page code starts here*/
$(".blocks").css("opacity","0");
	var s1 = setInterval(function(){
	var eqNo = Math.floor((Math.random() * Math.round($(".blocks[data-opac='0']").length))); 
	//console.log($('.blocks[data-opac="0"]').length+'hi'+ eqNo);
	$(".blocks[data-opac='0']").eq(eqNo).animate({"opacity":"1"},180).attr("data-opac","1");	
		if($(".blocks[data-opac='0']").length == 0){
		clearInterval(s1);
		}
	},170);
/*Customer page code ends here*/
});