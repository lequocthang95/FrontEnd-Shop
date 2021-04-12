var slideN = 0;
showImgs(slideN)

function currentImg(n) {
  showImgs(slideN = n);
}

function showImgs(n) {
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

var amount = document.querySelector('.amount_present input');
function amountChange(n){
  var btnReduc = document.querySelector('.amount_reduc');
  amount.value = parseInt(amount.value) + n;
  if ( parseInt(amount.value) <= 0){
      btnReduc.setAttribute("disabled","disabled")
      amount.value= 1;
  }
}

showItems(slideN);
function currentItem(n) {
  showItems(slideN = n);
}
function showItems(n) {
  var i;
  var x = document.getElementsByClassName("detail_slide-show");
  var dots = document.getElementsByClassName("detail_slide-item");
  if (n > x.length) {slideN = 0}    
  if (n < 0) {slideN = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("orange");
  }
  if (n = 1){dots[slideN].classList.add("orange")}
  x[slideN].style.display = "flex";
}