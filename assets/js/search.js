
var removes = document.querySelectorAll('.fa-times')
removes.forEach((remove) => {
    remove.onclick = () => {
        var slide = remove.parentElement;
        slide.parentElement.style.display = 'none';
    }
})