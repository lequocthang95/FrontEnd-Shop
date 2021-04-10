var slideN = 0;
showItems(slideN);

function currentItem(n) {
  showItems(slideN = n);
}

function showItems(n) {
    var i;
    var x = document.getElementsByClassName("details_img-big");
    var dots = document.getElementsByClassName("details_img-small");
    if (n > x.length) {slideN = 0}    
    if (n < 0) {slideN = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].style.border="none";
    }
    if (n = 1){ dots[slideN].style.border="1px solid #2a9cf5"}
    x[slideN].style.display = "flex";
}
