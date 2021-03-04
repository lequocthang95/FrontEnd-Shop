// search active
var search = document.querySelector('.search_grid');
var searchActive = document.querySelector('.search_grid-active')
document.querySelector('.menu_icon-search').onclick = () =>{
    search.style.display="block";
    searchActive.style.display="block";
}

searchActive.onclick = () =>{
    search.style.display="none";
}

// cart active
var cart = document.querySelector('.cart_grid');
var cartActive = document.querySelector('.cart_grid-active')
console.log(cartActive)
document.querySelector('.menu_icon-cart').onclick = () =>{
    cart.style.display="block";
    cartActive.style.display="block";
}
var cartClose = document.querySelector('.cart_close')
cartClose.onclick = () =>{
    cart.style.display="none";
}
cartActive.onclick = () =>{
    cart.style.display="none";
}


// product slide
var iconLeft = document.querySelector('.product_icon-left')
var iconRight = document.querySelector('.product_icon-right')
var textArray = [];
var slideLeft = document.querySelector('.product_slide-left')
    var slideBetween = document.querySelector('.product_slide-between')
    var slideRight = document.querySelector('.product_slide-right')
iconLeft.onclick = () =>{
    var textArray = [];
    textArray.push(slideLeft,slideBetween,slideRight) 
    slideBetween.insertAdjacentElement("afterend",slideLeft);
    slideRight.insertAdjacentElement("afterend",slideLeft);
    slideLeft= textArray[1]
    slideBetween= textArray[2]
    slideRight= textArray[0];
}
iconRight.onclick = () =>{
    var textArray = [];
    textArray.push(slideLeft,slideBetween,slideRight)
    slideRight.insertAdjacentElement("afterend",slideBetween);
    slideRight.insertAdjacentElement("afterend",slideLeft);
    slideLeft= textArray[2]
    slideBetween= textArray[0]
    slideRight= textArray[1];
}
