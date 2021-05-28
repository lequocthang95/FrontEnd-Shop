var moveList = document.querySelectorAll('.fa-times')
moveList.forEach((move) => {
    move.onclick = () =>{
        var item = move.parentElement;
        item.parentElement.style.display = "none"
    }

})