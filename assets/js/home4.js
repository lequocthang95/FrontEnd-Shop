var slideN = 0;
showItems(slideN);
function currentItem(n) {
  showItems(slideN = n);
}

function showItems(n) {
    var i;
    var x = document.getElementsByClassName("cart_slide-show");
    var dots = document.getElementsByClassName("home4_slide-top");
    if (n > x.length) {slideN = 0}    
    if (n < 0) {slideN = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("slide-active");
    }
    if (n = 1){ dots[slideN].classList.add("slide-active")}
    x[slideN].style.display = "flex";
}

var slideN = 0;
showDiv(slideN);
function currentDiv(n) {
  showDiv(slideN = n);
}
function plusDiv(n) {
    slideN += n;
    switch(slideN) {
        case 5:
            slideN = 0;
        break;
        case -1:
            slideN = 4;
        break;    
    }
  showDiv(slideN);
}
function showDiv(n) {
    var i;
    var x = document.getElementsByClassName("home4_slide-show");
    var dots = document.getElementsByClassName("home4_slide-end");
    if (n > x.length) {slideN = 0}    
    if (n < 0) {slideN = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("slide-active");
    }
    if (n = 1){ dots[slideN].classList.add("slide-active")}
    x[slideN].style.display = "flex";
}