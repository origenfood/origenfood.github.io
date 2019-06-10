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
showDivsDbl(slideIndex3);

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
showDivsDbl(slideIndex4);

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
