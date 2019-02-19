window.onload = function () {

    


    document.getElementById('knap').onclick = function () {

            myfunction()


    };




};


function myfunction() {

var completedato = new Date();


var dagnr = completedato.getUTCDay();

var dagenavne = [6];


dagenavne[0] = "søndag";
dagenavne[1] = "mandag";
dagenavne[2] = "tirsdag";
dagenavne[3] = "onsdag";
dagenavne[4] = "torsdag";
dagenavne[5] = "fradag";
dagenavne[6] = "lørdag";



document.getElementById("dato").innerHTML= document.getElementById("dato").innerHTML + " " +dagenavne[dagnr];

if (dagnr > 0 && dagnr <5) {
    document.getElementById("slagsdag").innerHTML= document.getElementById("slagsdag").innerHTML + " Øv det er hverdag";
} else if (dagnr == 5){
    
    document.getElementById("slagsdag").innerHTML= document.getElementById("slagsdag").innerHTML + " Hverdag men NÆSTEN weekend";
} else {
    document.getElementById("slagsdag").innerHTML= document.getElementById("slagsdag").innerHTML + " Hurra - det er weekend"
}

}
