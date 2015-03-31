var marker;
var map;
var markerImage = 'eTouch-logo-small.png';

function initialize() {
  var myLatlng = new google.maps.LatLng(37.546997, -122.064736);
  var mapOptions = {
    zoom: 16,
    center: myLatlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: ''
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){

    $(".contact-content .address-list").click(function(){
		$(".contact-content .address-list").removeClass("active");
		$(this).find(".caret").css({"display":"inline-block"});
        var latValue = $(this).find("input[name = 'latitude']").val();
        var longValue = $(this).find("input[name = 'longitude']").val();
        var zoomValue = parseInt($(this).find("input[name = 'zoomValue']").val());
        var new_marker_position = new google.maps.LatLng(latValue, longValue);
        marker.setPosition(new_marker_position);
        map.panTo(marker.getPosition());
        map.setZoom(zoomValue);
		console.log($(this).offset().left-$(this).css("margin-left"));
		$(this).addClass("active");
		/*$(".contact-content .contact-hover").animate({left: $(this).offset().left-$(this).css("margin-left").split("p")[0]-$(this).css("margin-right").split("p")[0]-46});
		$(".contact-content .col-md-3").find(".contact-icon").removeClass("contact-icon-black");*/
		
		//$(".contact-content col-md-3 p").removeClass("hovertext");
		//$(".contact-content .contact-hover").next("p").addClass("hovertext");
		
		/*$("p", this).addClass("hovertext");
		$(this).find(".contact-icon").addClass("contact-icon-black");*/
		
    });
$("#tablist-device a").click(function(){

        var latValue = $(this).parent().find("input[name = 'latitude']").val();
        var longValue = $(this).parent().find("input[name = 'longitude']").val();
        var zoomValue = parseInt($(this).parent().find("input[name = 'zoomValue']").val());
        var new_marker_position = new google.maps.LatLng(latValue, longValue);
        marker.setPosition(new_marker_position);
        map.panTo(marker.getPosition());
        map.setZoom(zoomValue);	
});
});