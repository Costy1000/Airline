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
	
	
	
	$(this).css({"display": "none"});
	$(".cities-list li").css({"display":"none"});
	$(".shadow-picture2").css({"background": "transparent"});
});
	
	
	
});
////////////////////////////////////////////////////////////////////////DATE-FLY//////////////////////////////////////////////////////////





	
