window.onload = function () {

    


    document.getElementById('knap').onclick = function () {

            myfunction()


    };




};


function myfunction() {

    var resulttxt = ""
    var txt = " Øller"
    var i

    for (i=0; i < 5; i++ ) {


        resulttxt += txt

    }
    document.getElementById("svar").innerHTML = resulttxt;




}
