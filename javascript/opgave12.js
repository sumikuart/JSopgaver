var inventar = ["Reol", "Stol", "Bord", "Seng", "Skab", "Seng"];


window.onload = function () {
    

    document.getElementById('knap').onclick = function(){getitem(0)};
}

function getitem(index) {

    
    document.getElementById("foerste").innerHTML = inventar[index];


    
    document.getElementById("alle").innerHTML += "<ul>"
    var i; 
    for (i=0; i < inventar.length; i++ ) 
    {

    

        document.getElementById("alle").innerHTML += "<li> " + inventar[i] + "</li>";

    }
        
    document.getElementById("alle").innerHTML += "<ul>"

}