var priceOne = document.querySelector('.price_one').innerText;
var amount = document.querySelector('.amount_present');
var priceTotal = document.querySelector('.price_total')
var x = priceOne.replace("$","");
var y = x.replace(",","");
var z = parseInt(y)
var p=1;
var a = "$"
var b = ".00"

// insert character coppy from https://stackoverflow.com/questions/4313841/insert-a-string-at-a-specific-index
if (!String.prototype.splice) {
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}
String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
total(p)
function total() {
    amount.innerText = (p);
    var c = z*p.toString();
    var d = a.concat(c,b);
    priceTotal.innerText =  d.splice(d.length-6,0, "," )
}

function amountChane(n){
    var btnReduc = document.querySelector('.amount_reduc');
    p = p +n;
    switch(p){
        case 0:
            btnReduc.setAttribute("disabled","disabled")
            p = 1;
            break;
    }
    total(p) 
}

