/// ====================================
/// custom js/jq go here
// ====================================
$(document).ready(function () {
	console.log('rocknroll here we go!'); 
		console.log('open sesame!'); 
			  $('.navbar-toggler-icon').on('click', function () {
				    $(this).toggleClass('active');
			  }); 
//set matching height just incase
$('.utility--sameheight').matchHeight();   


//back to top
$('.takeitfromthetop').on('click', function () {
		console.log('take it from to top again!'); 
$('html,body').animate({scrollTop:0}, 2000);return false;
 });


//end document load event
		});

 

	
 