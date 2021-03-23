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
                // .then(()=>{
                //     return new Promise((resolve) =>{
                //         cartInfor.style="animation: removeItem 0.3s linear";
                //         setTimeout(resolve,300)
                //     })
                // })
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
        prevArrow: '<button style="padding: 0;"><img class="product_icon-left" src="./assets/image_page/icon-1/01_home-left.png" alt=""></button>',
        nextArrow: '<button style="padding: 0;"><img class="product_icon-right" src="./assets/image_page/icon-1/01_home-right.png" alt=""></button>',
        autoplay: true,
    });
});

// header support languages
$.fn.selectpicker.Constructor.BootstrapVersion = '4';
$.fn.selectpicker.Constructor.DEFAULTS.multipleSeparator = ' | ';

$(function(){
    $('.my_select').selectpicker();
});



