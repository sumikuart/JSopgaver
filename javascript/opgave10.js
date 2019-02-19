window.onload = function () {


    var currentposy = 50;
    
    document.getElementById("op").addEventListener("click", function (currentposy) {
        moveup(currentposy);
    });


console.log ( moveup(currentposy)); 
}



function moveup(currentposy){
    currentposy = currentposy - 10;

    return currentposy;
}