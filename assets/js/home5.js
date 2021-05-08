var slideN = 0;
showItems(slideN);
function currentItem(n) {
  showItems(slideN = n);
}

function showItems(n) {
    var i;
    var x = document.getElementsByClassName("cart_slide-show");
    var dots = document.getElementsByClassName("cart_slide-item");
    if (n > x.length) {slideN = 0}    
    if (n < 0) {slideN = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("orange");
    }
    if (n = 1){ dots[slideN].classList.add("orange")}
    x[slideN].style.display = "flex";
}