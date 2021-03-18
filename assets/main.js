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
                        removeBtn.style="animation: removeItem 0.3s linear";
                        setTimeout(resolve,300)
                    })
                })
                .then(()=>{
                    return new Promise((resolve) =>{
                        removeBtn.style="display:none"
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
document.querySelector('.menu_icon-list').onclick = () =>{
    list.style.display="block";
    listActive.style.display="block";
}
var listClose = document.querySelector('.list_close')
listClose.onclick = () =>{
    list.style.display="none";
}
listActive.onclick = () =>{
    list.style.display="none";
}

// slick product slide
$(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button style="padding: 0;"><img class="product_icon-left" src="./assets/image_page/icon-1/01_home-left.png" alt=""></button>',
        nextArrow: '<button style="padding: 0;"><img class="product_icon-right" src="./assets/image_page/icon-1/01_home-right.png" alt=""></button>',
        autoplay: true,
    });
});

// header support languages
var deflang = document.getElementById('default')
var dropSelect = document.querySelector('.dropdown-select');
document.querySelector('.language-english').onclick = () => {
    var selectLans = document.querySelectorAll('.language');
    selectLans.forEach((lang) =>{
        lang.style.display="none";
    }
    )
    document.querySelector('.english').style.display="block";
    }
document.querySelector('.language-france').onclick = () => {
    var selectLans = document.querySelectorAll('.language');
    selectLans.forEach((lang) =>{
        lang.style.display="none";
    }
    )
    document.querySelector('.france').style.display="block";
}
document.querySelector('.language-german').onclick = () => {
    var selectLans = document.querySelectorAll('.language');
    selectLans.forEach((lang) =>{
        lang.style.display="none";
    }
    )
    document.querySelector('.german').style.display="block";
}
document.querySelector('.language-hindi').onclick = () => {
    var selectLans = document.querySelectorAll('.language');
    selectLans.forEach((lang) =>{
        lang.style.display="none";
    }
    )
    document.querySelector('.hindi').style.display="block";
}
dropSelect.onclick = () => {
    deflang.style.display="none";   
}
