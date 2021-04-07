var amount = document.querySelector('.amount_present input');
var productPrice = document.querySelector('.price_one input');
var productPriceText = document.querySelector('.price_one span');
var priceTotal = document.querySelector('.price_total')

// insert character coppy from https://stackoverflow.com/questions/4313841/insert-a-string-at-a-specific-index
if (!String.prototype.splice) {
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}
String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

total(amount.value);
function total(n) {
    var s = "$"
    var text = s.concat(parseInt(productPrice.value).toFixed(2).toString());
    if (text.length > 7){
        text = text.splice(text.length - 6, 0, ",")
    }
    if (text.length > 11){
        text = text.splice(text.length - 10, 0, ",")
    }
    if (text.length > 15){
        text = text.splice(text.length - 15, 0, ",")
    }
    if (text.length >= 22){
        text = text.splice(text.length - 21, 0, ",")
    }

    productPriceText.innerText = text;

    var text2 = s.concat((parseInt(productPrice.value) * n).toFixed(2).toString());
    if (text2.length > 7){
        text2 = text2.splice(text2.length - 6, 0, ",")
    }
    if (text2.length > 11){
        text2 = text2.splice(text2.length - 10, 0, ",")
    }
    if (text2.length > 15){
        text2 = text2.splice(text2.length - 14, 0, ",")
    }
    if (text2.length > 22){
        text2 = text2.splice(text2.length - 22, 0, ",")
    }
    priceTotal.innerText = text2;
}
function amountChange(n){
    var btnReduc = document.querySelector('.amount_reduc');
    amount.value = parseInt(amount.value) + n;
    if ( parseInt(amount.value) <= 0){
        btnReduc.setAttribute("disabled","disabled")
        amount.value= 1;
    }
    total(amount.value);
}


// // slide cart
// var slideN = 0;
// showItems(slideN);

// function plusItems(n) {
//     slideN += n;
//     switch(slideN) {
//         case 3:
//             slideN = 0;
//         break;
//         case -1:
//             slideN = 2;
//         break;    
//     }
//   showItems(slideN);
// }

// function currentItem(n) {
//   showItems(slideN = n);
// }

// function showItems(n) {
//     var i;
//     var x = document.getElementsByClassName("cart_slide-show");
//     var dots = document.getElementsByClassName("cart_slide-item");
//     if (n > x.length) {slideN = 0}    
//     if (n < 0) {slideN = x.length}
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].classList.remove("orange");
//     }
//     if (n = 1){ dots[slideN].classList.add("orange")}
//     x[slideN].style.display = "flex";
// }