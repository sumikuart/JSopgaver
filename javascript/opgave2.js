
window.onload = function() {
    

    document.getElementById('knap').onclick = function(){skiftitalic()};


    

};


function skiftitalic() {

    document.getElementById("teksten").style.color = "#ff0000";
    document.getElementById("teksten").style.backgroundColor = "black";
    document.getElementById("teksten").style.fontStyle = "italic";

    //document.querySelector("h2").style.color = "#ff0000";


}