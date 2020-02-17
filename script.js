$(document).ready(function(){
	///////////////////////////////////////////////////////////////HEADER-SLIDER//////////////////////////////////////////////////////////////////////
	
	
	
	
	
	
	
	var array = [".img-header1", ".img-header2", ".img-header3", ".img-header4"];
	var i = 0;
	var x;
	
	
	//$(".text-block").text(array.length);
	var sh = function(){
  $(".shadow-picture-slider2").removeClass("shadow-picture-slider2-block");
};
	
	
	
   
	$(".next-header").click(function(){
			
		while(i< array.length){	
			
			i++;
			x = i-1;			
			if (i == array.length){
				i = 0;       
   } 
			break;
		}
		$(".shadow-picture-slider2").addClass("shadow-picture-slider2-block");
		
	setTimeout(sh, 100);
		
		$(array[i]).addClass("img-block");
		$(array[x]).removeClass("img-block");
		
});
	
$(".prev-header").click(function(){
		while(i < array.length){
			
			
			if (i == 0){
				i = array.length;    
   } 
			i--;
			x = i + 1;
			break;
		}
	$(".shadow-picture-slider2").addClass("shadow-picture-slider2-block");
		
	setTimeout(sh, 100);
		
		$(array[i]).addClass("img-block");
		
		$(array[x]).removeClass("img-block");
		
	 
});   
	
	
	//////Buttons-Menu//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$(".content-bar").click(function(){
	  $(".button-list").addClass("button-list-width");
		//$(".button-list-width").css({"display": "block"});
	  $(".content-bar-black").css({"display": "block"});	
		
});
$(".close").click(function(){
	  $(".button-list").removeClass("button-list-width");
	  $(".content-bar-black").css({"display": "none"});	
});	
  var location = $(".location");
	//for(var i = 0; i< $(".location").length; i++){
	//for(var i = 0; i< 3; i++){
    var arraycities = [];
		//var arraycitiesTo = [];
	
		$(".location").filter(function() {
			arraycities.push($(this).text());
			
		})
	
	for(var i = 0; i< arraycities.length; i++){
     $(".cities-list").append("<li>" +  arraycities[i]  + "</li>");
 }
	 $(".cities-list").append("<li id='no-result' class='no-result'>No result found</li>");
	//}
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
	if($(this).hasClass("cities-list-from") && !$(this).hasClass("no-result") ){
	
	$(".from").val(text);
}
if($(this).hasClass("cities-list-to") && !$(this).hasClass("no-result")){
	
	$(".to").val(text);
}	
	$(".date-choose").css({"z-index": "1"});	
	
	
	$(this).css({"display": "none"});
	$(".cities-list li").css({"display":"none"});
	$(".shadow-picture2").css({"background": "transparent"});
});
	
	

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
	///////////////////////////////////////////////////////////buttons-hover/////////////////////////////////////////////////////////
	$(".other-wrapper").children().hover(function(){
		  $(this).children(".more-informations").addClass("more-informations-animation");
		   $(this).children("img").addClass("other-images-hover");
	},function(){
	$(".more-informations").removeClass("more-informations-animation");
	$(this).children("img").removeClass("other-images-hover");	
	 
	})
	
	
	///////////////////////////////////////////////////////////ticket-script////////////////////////////////////////////////////////////
	
		
  $(".outgoing").click(function(){
	  
	  if($(this).val() != ""){
		  $(".return").addClass("return2");
	  }
	  /*else{
		   $(".return").removeClass("return2");
	  }*/
  })
	/*var arraycities = [];
		
	
		$(".cities-list li").filter(function() {
			arraycities.push($(this).text());
			
		})*/
	////////////////////////////////////////////////////////////////////////localStorage/////////////////////////////////////////////////////////
	
	 var j = $(".tickets-airplane");
		var tk = $(".ticket-wrapper-storage .tickets-airplane");
	var buttonDelete = $(".button-delete");
	//$(".ticket-wrapper-storage").append("<button class='button-delete'>Delete Ticket</button>");
	
	var dl = $(".ticket-wrapper-storage .button-delete");
	//var nt = $(".ticket-wrapper-storage .no-ticket");
	//var tk2 = $(".ticket-wrapper-storage");
	var noTicket = $(".no-ticket");
	
	var spanOne = $(".span-one");
	var saveButton = $(".save");

		//tk.html(localStorage.getItem('aa'));
	tk.html(localStorage.getItem('aa'));
	dl.html(localStorage.getItem('bb'));
	//nt.html(localStorage.getItem('cc'));
		spanOne.html(localStorage.getItem('cc'));
		
	  
	   
	   var listCities  = [
		   {city: "New York", hour: "20:30", price: 1000},
		    {city: "Rome", hour: "21:30", price: 300},
		   {city: "Prague", hour: "21:30", price: 250},
		   {city: "Tokyo", hour: "19:30", price: 1200},
		   {city: "Dublin", hour: "04:30", price: 700},
		   {city: "Madrid", hour: "08:30", price: 400},
		   {city: "Lisbon", hour: "10:30", price: 300},
		   {city: "Munich", hour: "10:30", price: 500},
		   {city: "London", hour: "14:30", price: 800},
		   {city: "Istanbul", hour: "14:30", price: 700},
		   {city: "Viena", hour: "14:30", price: 400},
		    {city: "Rio", hour: "15:30", price: 550},
		   {city: "Los-Angeles", hour: "18:30", price: 1400},
		   {city: "Amsterdam", hour: "19:30", price: 600},
		  
		   {city: "Budapest", hour: "22:30", price: 200},
		   {city: "Chicago", hour: "23:30", price: 1300},
		   {city: "Sydney", hour: "11:30", price: 2000},
		    {city: "Cairo", hour: "09:30", price: 900},
	   ];
	
		   
	   
		
	
	
	$(".search").click(function(){
		
	
		var from = $(".from");
		var to = $(".to");
		var outgoing = $(".outgoing");
		var returnv = $(".return");
		
		var d = new Date();
		 if (arraycities.indexOf(from.val())  > -1 && arraycities.indexOf(to.val())  > -1  ){
			 $(".hour-city").text(listCities[arraycities.indexOf(from.val())].hour);
			 var counterManTotal = 	CounterMan * listCities[arraycities.indexOf(from.val())].price ;
			 
		  var counterChildTotal = CounterChild * listCities[arraycities.indexOf(from.val())].price  / 2;	 
		    var counterBabyTotal = CounterBaby  * listCities[arraycities.indexOf(from.val())].price / 5;		 
	        var counterTotal =  counterManTotal  + counterChildTotal + counterBabyTotal;
	  // var x = parseInt(counterTotal);
		    var x = parseInt(counterTotal);
			 $(".price-ticket").text(x + " $ ");
			if($(".from").val()  != $(".to").val() && outgoing.val() != "Outgoing"  ){
		if(outgoing.val()  < returnv.val()){
		      
		       
			  $(".ticket-wrapper").css({"display": "block"});
		    
		
		$(".circle-shadow").css({"display": "block"}); 	 
	 	$("body").css({overflow: "hidden"});
				$(".from").css({"border": "none"}); 
				$(".to").css({"border": "none"});  
				$(".outgoing").css({"border": "none"});
			$(".return").css({"border": "none"});
			 }
				else{
					 $(".wrong-cities").css({"display": "block"});
					$(".wrong-cities p").css({"display": "none"});
					 $(".wrong-cities p").filter(".no-valid").css({"display": "block"});
					$(".return").css({"border": "1px solid red"});
				}
			}
			 if($(".from").val()  == $(".to").val()){
				 	$(".from").css({"border": "1px solid red"});
				 $(".to").css({"border": "1px solid red"}); 
				 $(".wrong-cities").css({"display": "block"});
				  $(".wrong-cities p").css({"display": "none"});
				 $(".wrong-cities p").filter(".same-cities").css({"display": "block"});
				  //$(".no-city").css({"display": "none"});
			 }
			 
			 
			
		}
		if(arraycities.indexOf(from.val())  == -1){
			    // $(".wrong-cities").css({"display": "block"}); 
			
				$(".from").css({"border": "1px solid red"});
			$(".wrong-cities p").css({"display": "none"});
			 $(".wrong-cities p").filter(".no-city").css({"display": "block"});
			
			 }

		
		if(arraycities.indexOf(to.val())  == -1){
			 $(".wrong-cities").css({"display": "block"});
			   $(".wrong-cities p").css({"display": "none"});
			$(".wrong-cities p").filter(".no-city").css({"display": "block"});
				$(".to").css({"border": "1px solid red"}); 
			 }
		if( outgoing.val() == "Outgoing"){
				$(".outgoing").css({"border": "1px solid red"}); 
			 }
		else{
			$(".outgoing").css({"border": "none"}); 
		}
		if( returnv.val() == "Return"){
			$(".ticket-return").css({"display": "none"});
			 
		}
		else{
			$(".ticket-return").css({"display": "block"});
		}
	
		var outgoingDate = $(".outgoing").val(); 
		$(".do").text(outgoingDate);
	    var returnDate = $(".return").val(); 
		$(".dr").text(returnDate);
		var fromValue = $(".from").val();	 
		$(".from-city").text(fromValue);
		var toCity = $(".to").val();	 
		$(".to-city").text(toCity);	 
		
			 //////////////////////////////////////////////////////////////priceTicket//////////////////////////////////////
		//var priceTicket = $(".price-ticket").text();
		//var counterManTotal = 	CounterMan * priceTicket ;
		/*var counterChildTotal = CounterChild * 500;	 
		var counterBabyTotal = CounterBaby * 200;		 
	    var counterTotal =  counterManTotal + counterChildTotal + counterBabyTotal;*/
	  // var x = parseInt(counterTotal);
		//var x = parseInt(counterManTotal);
	  
		//$(".price-ticket").text(   x  + "$");
	});
	$(".close-cities").click(function(){
		 $(this).parent().css({"display": "none"});
	});
	 
	$(".button-save").click(function(){
		  $(".ticket-wrapper").css({display: "none"});
		  $("body").css({overflow: "auto"});
		  spanOne.text("1");
		 spanOne.css({"display": "block"});
		 localStorage.setItem('cc', spanOne.html());
	    
		 localStorage.setItem('aa', j.html());
		             ///////////////////////////////////////DeleteButton//////////////////////////////////////////////////////////////////////////////
		  buttonDelete.text("Delete Ticket");
		  buttonDelete.css({"display": "block"});
		 localStorage.setItem('bb', dl.html());
		
		noTicket.css({"display": "none"});
		 
		 //localStorage.removeItem('cc', noTicket.html());
		
	});
	
	
	if(buttonDelete.text() == ""){
			buttonDelete.css({display: "none"});
		}
		if(buttonDelete.text() != ""){
			buttonDelete.css({display: "block"});
		}
	if(buttonDelete.css('display') == 'block'){
		noTicket.css({display: "none"});
		spanOne.css({display: "block"});
		
	}
	if(buttonDelete.css('display') == 'none'){
		noTicket.css({display: "block"});
		spanOne.css({display: "none"});
	}
	
	
	
	$(".save").click(function(){
		$(".ticket-wrapper-storage ").css({"display": "block"});
		$(".button-list").removeClass("button-list-width");
		//$(".close-wrapper").css({"display": "none"});*/
		$(".content-bar-black").css({"display": "none"});
		$("body").css({overflow: "hidden"});
		tk.html(localStorage.getItem('aa'));
		
	    
		
	});
	$(".back").click(function(){
		$(".ticket-wrapper-storage").css({"display": "none"}); 
        $("body").css({overflow: "auto"});
		//$(".no-ticket").css({"display": "block"});
		
	
		
	});
	$(".button-delete").click(function(){
		$(".ticket-wrapper-storage").css({"display": "none"});
		  localStorage.removeItem('aa', j.html());
		  $(this).css({"display": "none"});
		
		  buttonDelete.css({"display": "none"});
		 $("body").css({overflow: "auto"});
		  localStorage.removeItem('bb', buttonDelete.html());
		
		noTicket.css({"display": "block"});
		
		
		 spanOne.css({"display": "none"});
		localStorage.removeItem('cc', spanOne.html());
	
	});
	$(".recomandation-images").children().hover(function(){
		var a = $(this);
		  a.children().addClass("shadow-picture-recomandation");
		$(".title-recomandation").css({"opacity": "0"});
		$(".title-recomandation").addClass("h4-opacity");
		$(".shadow-picture-recomandation").children(".img-title").addClass("h4-opacity");
		 if(a.hasClass("img1")){
			 $(".image-berlin").children().removeClass("shadow-picture")
		 }
		if(a.hasClass("img2")){
			 $(".image-jerusalem").children().removeClass("shadow-picture")
		 }
		
	},function(){
	//$(".more-informations").removeClass("more-informations-animation");
	$(".shadow-picture-recomandation").children(".img-title").removeClass("h4-opacity");	
	$(this).children().removeClass("shadow-picture-recomandation");
		$(".title-recomandation").css({"opacity": "1"});
	  $(".image-berlin").children().addClass("shadow-picture");
		 $(".image-jerusalem").children().addClass("shadow-picture");
	})
	
	 
});
				
	
	
	
	 

	

















	
