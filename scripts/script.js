/*-------------------Slideshow 1-------------------*/
var slideIndexSimple = 1;
showDivsSimple(slideIndexSimple);

function plusDivsSimple(n) {
  showDivsSimple(slideIndexSimple += n);
}

function showDivsSimple(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesSimple");
  if (n > x.length) {slideIndexSimple = 1}
  if (n < 1) {slideIndexSimple = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexSimple-1].style.display = "block";
}
/*-------------------Slideshow 1-------------------*/

/*-------------------Slideshow 2-------------------*/
var slideIndexdbl = 1;
showDivsDbl(slideIndexdbl);

function plusDivsDbl(n) {
  showDivsDbl(slideIndexdbl += n);
}

function showDivsDbl(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesDoble");
  if (n > x.length) {slideIndexdbl = 1}
  if (n < 1) {slideIndexdbl = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexdbl-1].style.display = "block";
}
/*-------------------Slideshow 2-------------------*/

/*-------------------Slideshow 3-------------------*/
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesTriple");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex3-1].style.display = "block";
}
/*-------------------Slideshow 3-------------------*/

/*-------------------Slideshow 4-------------------*/
var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex4-1].style.display = "block";
}
/*-------------------Slideshow 4-------------------*/

/*-------------------Slideshow 5-------------------*/
var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("mySlides5");
  if (n > x.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex5-1].style.display = "block";
}
/*-------------------Slideshow 5-------------------*/

/*-------------------Slideshow 6-------------------*/
var slideIndex6 = 1;
showDivs6(slideIndex6);

function plusDivs6(n) {
  showDivs6(slideIndex6 += n);
}

function showDivs6(n) {
  var i;
  var x = document.getElementsByClassName("mySlides6");
  if (n > x.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex6-1].style.display = "block";
}
/*-------------------Slideshow 6-------------------*/

/*-------------------Slideshow 7-------------------*/
var slideIndex7 = 1;
showDivs7(slideIndex7);

function plusDivs7(n) {
  showDivs7(slideIndex7 += n);
}

function showDivs7(n) {
  var i;
  var x = document.getElementsByClassName("mySlides7");
  if (n > x.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex7-1].style.display = "block";
}
/*-------------------Slideshow 7-------------------*/

/*-------------------Slideshow 8-------------------*/
var slideIndex8 = 1;
showDivs8(slideIndex8);

function plusDivs8(n) {
  showDivs8(slideIndex8 += n);
}

function showDivs8(n) {
  var i;
  var x = document.getElementsByClassName("mySlides8");
  if (n > x.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex8-1].style.display = "block";
}
/*-------------------Slideshow 8-------------------*/

/*-------------------Slideshow 9-------------------*/
var slideIndex9 = 1;
showDivs9(slideIndex9);

function plusDivs9(n) {
  showDivs9(slideIndex9 += n);
}

function showDivs9(n) {
  var i;
  var x = document.getElementsByClassName("mySlides9");
  if (n > x.length) {slideIndex9 = 1}
  if (n < 1) {slideIndex9 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex9-1].style.display = "block";
}
/*-------------------Slideshow 9-------------------*/

function landing(){
  var lang = navigator.language.split("-");
  /*if(lang[0] === "es"){
    window.open("views/origen-ES.html", "_self");
  }else{
    window.open("views/origen-EN.html", "_self");
  }*/
  window.open("views/origen-ES.html", "_self");

}

function consultarDisponibilidad(){
  var cin = document.getElementById('datepickerCI');
  var cout = document.getElementById('datepickerCO');

  if(cin.value == "" || cout.value == ""){
    alert("Debe escoger una fecha valida.");
  }else{
    window.open("https://www.booking.com/hotel/co/origen-hostal.es.html?aid=304142;"+
    "label=gen173nr-1FCAEoggI46AdIM1gEaDKIAQGYAQq4ARfIAQ_YAQHoAQH4AQuIAgGoAgO4AtiUoOcFwAIB;"+
    "sid=c31549326f2b0aeb9446051c9da93d5c;all_sr_blocks=498846205_168368382_2_1_0;checkin="+cin.value+";"+
    "checkout="+cout.value+";dest_id=-591834;dest_type=city;dist=0;hapos=41;highlighted_blocks=498846205_168368382_2_1_0;"+
    "hpos=11;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1558710994;srpvid=883d6b692fe9009d;type=total;"+
    "ucfs=1&#availability_target", "_blank");
  }
}

/*function myMap() {
  myCenter=new google.maps.LatLng(41.878114, -87.629798);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}*/

$(
  function() {
    $( "#datepickerCI" ).datepicker({
      dateFormat: "yy-mm-dd"
    });
    $( "#datepickerCO" ).datepicker({
      dateFormat: "yy-mm-dd"
    });
  }
);
