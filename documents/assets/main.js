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

