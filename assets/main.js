// search active
var search = document.querySelector('.search_grid');
var searchActive = document.querySelector('.search_grid-active')
var searchIcons = document.querySelectorAll('.menu_icon-search');
searchIcons.forEach((searchIcon) =>{
    searchIcon.onclick = () =>{
        search.style.display="block";
        searchActive.style.display="block";
    } 
})
searchActive.onclick = () =>{
    search.style.display="none";
}  

// cart active
var cart = document.querySelector('.cart_grid');
var cartActive = document.querySelector('.cart_grid-active')
var cartIcons = document.querySelectorAll('.menu_icon-cart');
cartIcons.forEach((cartIcon) =>{
    cartIcon.onclick = () =>{
        cart.style.display="block";
        cartActive.style.display="block";
    }
})
var cartClose = document.querySelector('.cart_close')
cartClose.onclick = () =>{
    cart.style.display="none";
}
cartActive.onclick = () =>{
    cart.style.display="none";
}
//remove product in cart shopping cart
var cartShopping = document.querySelector('.cart')
var removeBtns = document.querySelectorAll('.cart_item-remove')
removeBtns.forEach((removeBtn) =>{
    removeBtn.onclick = () => {
        var cartItem = removeBtn.parentElement;
        var promise = Promise.resolve();
            promise
                .then(()=>{
                    return new Promise((resolve) =>{
                        cartItem.parentElement.style="animation: removeItem 1s linear";
                        setTimeout(resolve,1000)
                    })
                })
                .then(()=>{
                    cartItem.parentElement.style.display="none";
                })
    } 
})

// list active
var list = document.querySelector('.list_grid');
var listActive = document.querySelector('.list_grid-active')
var listIcons = document.querySelectorAll('.menu_icon-list');
listIcons.forEach((listIcon) =>{
    listIcon.onclick = () =>{
        list.style.display="block";
        listActive.style.display="block";
    }
})
var listClose = document.querySelector('.list_close')
listClose.onclick = () =>{
    list.style.display="none";
}
listActive.onclick = () =>{
    list.style.display="none";
}

// menu responsive
var menu = document.querySelector('.respon_menu');
document.querySelector(".menu_btn").onclick = () =>{
    if (window.getComputedStyle(menu).display === "none") {
        menu.style.display="block";
    }
    else {
        menu.style.display="none";
    }
    
}

// header support languages
$.fn.selectpicker.Constructor.BootstrapVersion = '4';
$.fn.selectpicker.Constructor.DEFAULTS.multipleSeparator = ' | ';

$(function(){
    $('.my_select').selectpicker();
});

// TESTIMONIALS clients
$(function () {
    $('.clients').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      prevArrow: '<button class="prev" aria-label="Previous" type="button"></button>',
      nextArrow: '<button class="next" aria-label="Next" type="button"></button>',
      centerMode: true,
      centerPadding: '0',
    });
  });

  // slide cart , all show slide
var slideN = 0;
showItems(slideN);

function plusItems(n) {
    slideN += n;
    switch(slideN) {
        case 3:
            slideN = 0;
        break;
        case -1:
            slideN = 2;
        break;    
    }
  showItems(slideN);
}

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

 // slide cart , all show slide
var slideN = 0;
showItems(slideN);

function plusItems(n) {
    slideN += n;
    switch(slideN) {
        case 3:
            slideN = 0;
        break;
        case -1:
            slideN = 2;
        break;    
    }
  showItems(slideN);
}

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

 // slide cart , all show slide
 var slideN = 0;
 showDiv(slideN);
 
 function plusDiv(n) {
     slideN += n;
     switch(slideN) {
         case 3:
             slideN = 0;
         break;
         case -1:
             slideN = 2;
         break;    
     }
   showDiv(slideN);
 }
 
 function currentDiv(n) {
   showDiv(slideN = n);
 }
 
 function showDiv(n) {
     var i;
     var x = document.getElementsByClassName("slide_show");
     var dots = document.getElementsByClassName("cart_slide-div");
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

  // slide cart , all show slide
var slideN = 0;
showBox(slideN);

function plusBox(n) {
    slideN += n;
    switch(slideN) {
        case 3:
            slideN = 0;
        break;
        case -1:
            slideN = 2;
        break;    
    }
  showBox(slideN);
}

function currentBox(n) {
  showBox(slideN = n);
}

function showBox(n) {
    var i;
    var x = document.getElementsByClassName("slide_show-box");
    var dots = document.getElementsByClassName("cart_slide-box");
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