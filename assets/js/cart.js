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
    productPriceText.innerText = parseInt(productPrice.value).toFixed(2)
    priceTotal.innerText = (parseInt(productPrice.value) * n).toFixed(2)
}
// function inputAmount(){
//     console.log(amount.value)
// }
function amountChange(n){
    var btnReduc = document.querySelector('.amount_reduc');
    amount.value = parseInt(amount.value) + n;
    if ( parseInt(amount.value) <= 0){
        btnReduc.setAttribute("disabled","disabled")
        amount.value= 1;
    }
    total(amount.value);
}

