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
        console.log(cartItem)
        var promise = Promise.resolve();
            promise
                .then(()=>{
                    return new Promise((resolve) =>{
                        cartItem.parentElement.style="animation: removeItem 1s linear";
                        setTimeout(resolve,1000)
                    })
                })
                .then(()=>{
                    console.log(cartItem.parentElement)
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

// slick product slide
$(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="btn product_btn1" onclick="plusDivs(-1)" style="padding: 0;"><img class="product_icon-left" src="./assets/image_page/icon-1/01_home-left.png" alt=""></button>',
        nextArrow: '<button class="btn product_btn2" onclick="plusDivs(1)" style="padding: 0;"><img class="product_icon-right" src="./assets/image_page/icon-1/01_home-right.png" alt=""></button>',    
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
  var btnProduct1 = document.querySelector('.product_btn1');
  console.log(btnProduct1)
}



// header support languages
$.fn.selectpicker.Constructor.BootstrapVersion = '4';
$.fn.selectpicker.Constructor.DEFAULTS.multipleSeparator = ' | ';

$(function(){
    $('.my_select').selectpicker();
});



