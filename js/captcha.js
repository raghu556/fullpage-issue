$(document).ready(function(){
	$.post("captcha.php",{page: "page_index"},function(data, status){
			if(status=='success'){
			$("#captcha_label").html(data);
		}
    });

	$("#error_msg_payments-firstname").hide();
	$("#error_msg_payments-lastname").hide();
	$("#error_msg_email").hide();
	$("#error_msg_phoneNumber").hide();
	$("#error_msg_captcha").hide();
	$("#error_msg_company").hide();
	$("#error_msg_request_type").hide();

	$("#submitCheckout").click(function(){

		var formvalid = submitContactForm();
		if(formvalid) {
			valid_captcha = false;
			$.post("validatecaptcha.php",{page: "page_index", captcha_text: $("#captcha").val()},function(data, status){
				if(status=='success' && data=='true'){
					valid_captcha = true;
				} else {
					valid_captcha = false;
					$("#error_msg_captcha").show();
					$("#captcha").focus();

					$("#captcha").keypress(function(){
						$("#captcha").removeClass("text-field-error"); 
						$("#error_msg_captcha").hide();
					});
				}

					if(valid_captcha == true) {
						//showErrorSuccessDiv(data.queryString);
						//alert("We have received your request. Thanks. ");
						var docHeight = $(document).height(); //grab the height of the page
						var scrollTop = $(window).scrollTop(); //grab the px value from the top of the page to where you're scrolling
						var selectedPopup = $(this).data('showpopup'); //get the corresponding popup to show
						
						$('.overlay-bg').show().css({'height' : docHeight}); //display your popup background and set height to the page height
						$('.popup1').show(); //show the appropriate popup and set the content 20px from the window top
						
						//document.contactForm.captchaText.value='';
						//refreshCaptcha();

						
						// hide popup when user clicks on close button or if user clicks anywhere outside the container
						$('.close-btn, .overlay-bg').click(function(){
							$('.overlay-bg, .overlay-content').hide(); // hide the overlay
						});

						setTimeout(function(){
							$('.popup1').hide();
							$('.overlay-bg').hide()
						}, 5000);
					}
			});

		}
	});
});