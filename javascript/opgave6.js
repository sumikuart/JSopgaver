window.onload = function () {

    
    var knaptime = 0;
        

    document.getElementById('img').onmouseenter = function () {

            enterfunction()


    };
        document.getElementById('img').onmouseleave = function () {

            leavefunction()


    };





};


function enterfunction() {

document.getElementById("img").src="./img/tt2.gif";

}

function leavefunction() {

    document.getElementById("img").src="./img/tt1.gif";
    
    }
    