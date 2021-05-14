// slick product slide
$(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="btn product_btn1" onclick="plusDivs(-1)" style="padding: 0;"><img class="product_icon-left" src="./assets/image_page/icon-1/01_home-left.png" alt=""></button>',
        nextArrow: '<button class="btn product_btn2" onclick="plusDivs(1)" style="padding: 0;"><img class="product_icon-right" src="./assets/image_page/icon-1/01_home-right.png" alt=""></button>',    
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    var btnProduct1 = document.querySelector('.product_btn1');
    var btnProduct2 = document.querySelector('.product_btn2');
    var promise = Promise.resolve();
    promise
        .then(()=>{
            slideIndex = slideIndex + n;
            switch(slideIndex) {
                case 3:
                    slideIndex = 0;
                break;
                case -1:
                    slideIndex = 2;
                break;    
            } 
            btnProduct1.setAttribute("disabled","disabled");
            btnProduct2.setAttribute("disabled","disabled");
            return slideIndex;
        })
        .then(()=>{
            return new Promise((resolve) =>{
                showDivs(slideIndex);
                setTimeout(resolve,600)
            })
        })
        .then(()=>{ 
            btnProduct1.removeAttribute("disabled","disabled");  
            btnProduct2.removeAttribute("disabled","disabled");
        })       
}
function currentDiv(n) {
  showDivs(slideIndex = n);
}
function showDivs(n) {   
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("product_slide-item");
  if (n > x.length) {slideIndex = 0}    
  if (n < 0) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("orange");
  }
  if (n = 1){ dots[slideIndex].classList.add("orange")}
  x[slideIndex].style.display = "flex";
  dots[slideIndex + 3].classList.add("orange")  
  if (dots.length > 6){
    dots[slideIndex + 6].classList.add("orange")   
    dots[slideIndex + 9].classList.add("orange")  
  }
}



