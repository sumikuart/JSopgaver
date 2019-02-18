window.onload = function () {

    
    var knaptime = 0;
        

    document.getElementById('knap').onclick = function () {


        if (knaptime == 0) {
            myfunctionone()
            knaptime = 1;

        } else {
            myfuntciontwo()
            knaptime = 0;
        };


    };




};


function myfunctionone() {



    document.getElementsByTagName("h2")[0].innerHTML = "En ny overskrift";


    //document.querySelector("h2").style.color = "#ff0000";


}

function myfuntciontwo() {



    document.getElementsByTagName("h2")[0].innerHTML = "Underoverskrift af en slags";


    //document.querySelector("h2").style.color = "#ff0000";


}