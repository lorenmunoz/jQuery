//ENSURE PAGE IS READY FOR JQUERY
$(document).ready( function() {
//REDUCES OPACITY OF #SQUARE	
	$("#square").animate( {opacity: .5});
//INCREASES OPACITY OF #SQUARE WHILE HOVERED
	$("#square").hover( function() {
		$(this).stop().animate( {opacity: .9} );
//REDUCES OPACITY OF #SQUARE WHILE NOT HOVERED		
  }, function() {
  	$(this).stop().animate( {opacity: .2} );
  });
//REDUCES H1 OPACITY
	$("h1").show( function() {
	  $("h1").animate( {opacity: .2} , 2000 )
	});
//INCREASES H1 OPACITY
	$("h1").show( function() {
	  $("h1").animate( {opacity: .9} , 2000 )	 
	});
//SLIDES #SQUARE UP WHEN H1 IS CLICKED 
	$("h1").click( function() {
		$("#square").slideUp()
  });
  $("h1").click( function() {
    $("#square").slideDown()
  });

	});