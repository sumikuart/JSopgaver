
window.onload = function() {
    

    document.getElementById('knap').onclick = function(){myfunction()};


    

};


function myfunction() {

    document.getElementById("wrapper").style.backgroundColor = " #D1E3B9";


    document.getElementById("knap").disabled = true;

    document.getElementById("knap").style.cssText = "color: white; background-color: lightblue";

    //document.querySelector("h2").style.color = "#ff0000";


}