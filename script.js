$(document).ready(function(){
	
	////////////////////////////////////////////////////////////////////////FROM-TO//////////////////////////////////////////////////////////
	$(".from, .to").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".cities-list li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) == 0)
      $("#no-result").css({"display": "none"});
      $(".shadow-picture2").css({"background": "hsla(0, 0%, 25%, 0.7)"});
	  $(".date-choose").css({"z-index": "-1"});	
      
    });
  });
   $(".from, .to").keyup(function(){
    if($(this).val() == ""){
    $(".cities-list li").css({"display":"none"});
    $(".shadow-picture2").css({"background": "transparent"});
    }
     if($(".cities-list li:visible").length == 0 && $(this).val() != ""){
          $("#no-result").css({"display": "block"});
		 
      }
	   
  });
$(".cities-choose input").on("keyup", function() {
	if ( $( this ).is( ".from" ) ) {
	$(".cities-list li").addClass("cities-list-from");
	$(".cities-list li").removeClass("cities-list-to");	
	$(".cities-list").removeClass("cities-list-bottom-mobile");		
	}
	if ( $( this ).is( ".to" ) ) {
	$(".cities-list li").addClass("cities-list-to");
	$(".cities-list li").removeClass("cities-list-from");	
	$(".cities-list").addClass("cities-list-bottom-mobile");		
	}
});
$(".cities-list li").click(function(){
	var text = $(this).text();
	if($(this).hasClass("cities-list-from")){
	
	$(".from").val(text);
}
if($(this).hasClass("cities-list-to")){
	
	$(".to").val(text);
}	
	$(".date-choose").css({"z-index": "1"});	
	
	
	$(this).css({"display": "none"});
	$(".cities-list li").css({"display":"none"});
	$(".shadow-picture2").css({"background": "transparent"});
});
	
/*$(".ok").click(function(){
	var airplainePosition = $(".airplane-list").position();
	var passengerPosition = $(".passenger-choose");
	if($(document).width() > 650){
	   	passengerPosition.css({"top": airplainePosition.top });
			passengerPosition.css({"left": airplainePosition.left });
		
	}
	
})*/	
	

////////////////////////////////////////////////////////////////////////DATE-FLY//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////PASSENGERS///////////////////////////////////////////////////////////////


$(".passenger").click(function(){
	$(".shadow-picture3").css({"display": "block"})
});
$(".ok").click(function(){
	$(".shadow-picture3").css({"display": "none"})
});	
var CounterMan = 1;	
var CounterChild = 0;
var CounterBaby = 0;	
$(".plus-adult").click(function(){
	$(".span-adult").text(CounterMan+=1);
	$(".minus-adult").css({"pointer-events": "auto"})
})	
$(".plus-child").click(function(){
	$(".span-child").text(CounterChild+=1);
	$(".minus-child").css({"pointer-events": "auto"});	
})		
$(".plus-baby").click(function(){
	$(".span-baby").text(CounterBaby+=1);
	$(".minus-baby").css({"pointer-events": "auto"})
})		
$(".minus-adult").click(function(){
	if(CounterMan == 1){
		
		$(this).css({"pointer-events": "none"});
		
	}
	else {
		
	 $(".span-adult").text(CounterMan-=1);
	}
	
})
	
$(".minus-child").click(function(){
	
	if(CounterChild == 0){
		
		$(this).css({"pointer-events": "none"});	
	}
	else {
		
	 $(".span-child").text(CounterChild-=1);	}

})	
	
$(".minus-baby").click(function(){
	
	if(CounterBaby <= 0){
		$(this).css({"pointer-events": "none"})
	}
	else {	
	 $(".span-baby").text(CounterBaby-=1);
	}

})
	  ////////////////////////////////////////////////////HOVER-IMAGES////////////////////////////////////////////
	
	 $(".city-wrapper").hover(function(){
		
      $(this).children(".city-img-wrapper").addClass("city-img-wrapper-hover");
	  $(this).children(".price-wrapper").css({"opacity": "1"});
		
	 },function(){
	$(this).children(".city-img-wrapper").removeClass("city-img-wrapper-hover");	 
	$(this).children(".price-wrapper").css({"opacity": "0"})
	 
	 
  });
	
	
	

////////////////////////////////////////////////////////////Show-Images//////////////////////////////////////////////////////////////////
	
 $(".next-button, .prev-button").click(function(){
    // $(".cities-wrapper").first().addClass("cities-wrapper-opacity");
	// imageCount++;
	  if($(".cities-wrapper").last().hasClass( "cities-wrapper-opacity")){
		  
	 $(".cities-wrapper").first().addClass("cities-wrapper-opacity");
	 $(".cities-wrapper").last().removeClass("cities-wrapper-opacity");
		 
	 }
	 else{
	$(".cities-wrapper-opacity").next().addClass("cities-wrapper-opacity");	 
	 $(".cities-wrapper-opacity").first().removeClass("cities-wrapper-opacity");
	 
		
	 }
	  
	 
	 
  });
	
	 $(".cities-wrapper").filter(function() {
  $(this).children().slice(0, 2).css({"display": "block"})
		 
	   	 
	 });
	$(window).resize(function() {
	 
		
	$(".cities-wrapper").filter(function() {	
		if($(window).width() > 900){
		 $(this).children().slice(2, 9).css({"display": "block"})
		}
		else{
			$(this).children().css({"display": "none"})
			$(this).children().slice(0, 2).css({"display": "block"})
		}
		})
	 
	});
	var ImageSlice  = 2;
	
	
	$(".hide").click(function(){
		 $(".load").css({width:"100%"});
		 $(this).css({display:"none"});
		$(this).css({display:"none"});
		
		$(".cities-wrapper").filter(function() {
		 
		 $(this).children().slice(2, 9).slideUp();
		 ImageSlice  = 2;
		
		})	
	 });
	$(".load").click(function(){
		 ImageSlice+=2;
		/* $(window).scrollTop() == 0;*/
		
		 $("html, body").animate({ scrollTop: $(".load").offset().top }, 1000);
       
		
	     $(this).css({width:"50%"});
		 $(".hide").css({display:"block"});
		$(".cities-wrapper").filter(function() {	
		 $(this).children().slice(0, ImageSlice).slideDown()//.css({"display": "block"});
		})
	 })
	
	
});
				
	
	
	
	 

	

















	
