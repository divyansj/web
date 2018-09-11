/*var first = document.getElementById("lef");
var btns = document.getElementsByClassName("seconbutton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";  });
}
$('.section').hide().filter('#main').show();
$(function() {
  $('.seconbutton').click(function() {
    $('.seconbutton').removeClass('active').filter($(this)).addClass('active');
    (this.hash).show();
$(.sec).css({display:'block'});  })});


function myfunction(num) {

  $(function() {
    $('.seconbutton').click(function() {
      $('.seconbutton').removeClass('active').filter($(this)).addClass('active');
      $('.section').hide();
      $('#main' + num).show();
    });
  });
}

function showslides(dum) {

    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < square.length; i++) {
    square[i].className = square[i].className.replace(" showing", "");
  }
  slides[slideIndex - 1].style.display = "block";
  square[slideIndex - 1].className += " showing";
  revolve(0);

}
*/
var waitt = 0;
var rty;
var qwe;
var bum = 0;
var slideIndex = 0;
var slides, square;
revolve(slideIndex);
fun(1);

function myfunction(num,el) {
  $('.seconbutton').removeClass('active').filter($(el)).addClass('active');
  $('.section').hide();
  $('#main' + num).show();
}
//////////////////////////////////////////////////////////////////////////////////
function currentslide(tum) {
  slideIndex = tum;
  bum = 1;
  revolve(slideIndex);
}
//////////////////////////////////////////////////////////////////////////////////
function plusslide(slidenumchange) {
  slideIndex += slidenumchange;
  bum = 1;
  revolve(slideIndex);
}
//////////////////////////////////////////////////////////////////////////////////
/*function round(waitt) {
  if (waitt == 0) {
    bum = 0;
    revolve();
    qwe = setTimeout(revolve, 2000);
    clearTimeout(rty);
    round(0);
  } else {
    waitt = 0;
    bum = 1;
    revolve();
    rty = setTimeout(function(){}, 5000);
    clearTimeout(qwe);
    round(0);
  }
}*/
/////////////////////////////////////////////////////////////////////////////////
function revolve(slideIndex) {
  var i;
  slides = document.getElementsByClassName("mySlides");
  square = document.getElementsByClassName("squares");
  if (bum != 0) {
    clearTimeout(rty);
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (bum == 0) {
    slideIndex++;
    clearTimeout(qwe);
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < square.length; i++) {
    square[i].className = square[i].className.replace(" showing", "");
  }
  slides[slideIndex - 1].style.display = "block";
  square[slideIndex - 1].className += " showing";
  if (bum != 0) {
    bum = 0;
    qwe = setTimeout(revolve, 5000, slideIndex);
  } else {
    bum = 0;
    rty = setTimeout(revolve, 2000, slideIndex);
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function fun(num) {
  var acc = document.getElementsByClassName("accordion");
  var pan = document.getElementsByClassName("panel");
  var i;
  num--;
  for (i = 0; i < acc.length; i++) {
    acc[i].className = acc[i].className.replace(" open", "");
    if (pan[num].style.maxHeight) continue;
    else pan[i].style.maxHeight = null;
  }
  acc[num].className += " open";
  if (pan[num].style.maxHeight) {
    pan[num].style.maxHeight = null;
  } else {
    pan[num].style.maxHeight = pan[num].scrollHeight + "px";
  }
}
///////////////////////////////////////////////////////////////////////////////////
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var sub = document.getElementById('submitchange');
btn.onclick = function() {
  modal.style.display = "block";
  $('#changething').trigger("reset");
}
span.onclick = function() {
	if (((document.getElementById("headingchange").value) || (document.getElementById("parachange").value)) == "")
	document.getElementById("inputman").innerHTML = "Please enter both values";
	else {  modal.style.display = "none";}
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onload = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/*sub.onclick = function() {
  if(((document.getElementById("headingchange").value) || (document.getElementById("parachange").value) )=="")
  document.getElementById("#inputman").innerHTML="comeon man";
else
  modal.style.display = "none";

}*/
function changethings() {
  if (((document.getElementById("headingchange").value) || (document.getElementById("parachange").value)) == "")
	document.getElementById("inputman").innerHTML = "Please enter both values";
  else {
    document.getElementById("changehere").innerHTML = document.getElementById("headingchange").value;
    document.getElementById("bookpara").innerHTML = document.getElementById("parachange").value;
    modal.style.display = "none";
		document.getElementById("inputman").innerHTML = "";
  }
}
$("#changething").submit(function(e) {
  e.preventDefault();
});
//////////////////////////////////////////////////////////////////////////////////////////////////
function previewFile() {
  var preview = document.getElementById('bookimage');
  var file = document.getElementById('imagechange').files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    preview.src = reader.result;
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
/////////////////////////////////////////
