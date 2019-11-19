

//var aa = document.getElementsByClassName("cities-wrapper")[0];
//var a1 = document.getElementsByClassName("cities-wrapper")[1]
//var imgSrc = ["assets/new-york2.jpg", "assets/rome.jpg"];
var list  = [
	{imgSrc: "assets/new-york2.jpg", alt: "new-york", location: "New-York", price: "1000$"},
	{imgSrc: "assets/rome.jpg", alt: "rome", location: "Rome", price: "300$"},
	{imgSrc: "assets/prague.jpg", alt: "prague", location: "Prague", price: "250$"},
	{imgSrc: "assets/tokyo.jpg", alt: "tokyo", location: "Tokyo", price: "1200$"},
	{imgSrc: "assets/dublin.jpg", alt: "Dublin", location: "Dublin", price: "700$"},
	{imgSrc: "assets/madrid.jpg", alt: "Madrid", location: "Madrid", price: "400$"},
	{imgSrc: "assets/Lisbon.jpg", alt: "Lisbon", location: "Lisbon", price: "300$"},
	{imgSrc: "assets/munich.jpg", alt: "Munich", location: "Munich", price: "500$"},
	{imgSrc: "assets/london.jpg", alt: "London", location: "London", price: "800$"},
];
var list2  = [
	{imgSrc: "assets/istanbul.jpg", alt: "istanbul", location: "Istanbul", price: "700$"},
	{imgSrc: "assets/vienna.jpg", alt: "vienna", location: "Viena", price: "400$"},
	{imgSrc: "assets/rio.jpg", alt: "Rio", location: "Rio", price: "550$"},
	{imgSrc: "assets/Los-Angeles.jpg", alt: "Los-Angeles", location: "Los-Angeles", price: "1400$"},
	{imgSrc: "assets/Amsterdam.jpg", alt: "Amsterdam", location: "Amsterdam", price: "600$"},
	{imgSrc: "assets/Budapest.jpg", alt: "Budapest", location: "Budapest", price: "200$"},
	{imgSrc: "assets/Chicago.jpg", alt: "Chicago", location: "Chicago", price: "1300$"},
	{imgSrc: "assets/Sydney.jpg", alt: "Sydney", location: "Sydney", price: "2000$"},
	{imgSrc: "assets/Cairo.jpg", alt: "Cairo", location: "Cairo", price: "900$"},
];
//var imgAlt = ["new-york", "rome"];
for(var x= 0; x< 2; x++){
for(var i = 0; i< list.length && i< list2.length; i++){
	
var aa = document.getElementsByClassName("cities-wrapper")[x];	
	      /////////////////////////////////////////Create-City-Wrapper///////////////////////////////////////////////////////////////////
var element = document.createElement("DIV");
aa.appendChild(element);
element.classList.add("city-wrapper");

	         /////////////////////////////////////////city-img-wrapper///////////////////////////////////////////////////////////////////
var cityImg = document.createElement("DIV");
cityImg.classList.add("city-img-wrapper");
element.appendChild(cityImg);
	////////////////////////////////////////////////////////Create Images/////////////////////////////////////////////
var img  = document.createElement("IMG");
cityImg.appendChild(img);

	            /////////////////////////////////////////price-wrapper///////////////////////////////////////////////////////////////////
var priceWrapper = document.createElement("DIV");
priceWrapper.classList.add("price-wrapper");
element.appendChild(priceWrapper);
var p1 = document.createElement("P");
var p2 = document.createElement("P");
p1.classList.add("location");
p2.classList.add("price");
priceWrapper.appendChild(p1);
priceWrapper.appendChild(p2);
if( x== 0){
img.src= list[i].imgSrc;	
img.alt = list[i].alt;
p1.innerHTML = list[i].location;
p2.innerHTML = list[i].price;		
}
	if(x == 1){
img.src= list2[i].imgSrc;	
img.alt = list2[i].alt;
p1.innerHTML = list2[i].location;
p2.innerHTML = list2[i].price;				
	}	
	
}
}
////////////////////////////////////////////////////////////Show-Images//////////////////////////////////////////////////////////////////









