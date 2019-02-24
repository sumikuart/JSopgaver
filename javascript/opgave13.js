var ekkoShortlist = [
    {titel: "GR4DE", instruktor: "Aske Sørensen", shortlist: 1},
    {titel: "Esther, min elskede", instruktor: "Julius Lagoutte Larsen", shortlist: 4},
    {titel: "Cathrine Dufour the Story", instruktor: "Tobias Damkjær", shortlist: 3},
    {titel: "Den apokryfe prins", instruktor: "Anton Isbrand", shortlist: 2}
];

window.onload = function () {
    

    document.getElementById('knap').onclick = function(){getitem(0)};
}


function getitem(index) {
    
    document.getElementById("foerste").innerHTML = ekkoShortlist[0].titel + " " +ekkoShortlist[0].instruktor +" "+ekkoShortlist[0].shortlist;    



    var i; 
    for (i=0; i < ekkoShortlist.length; i++ ) 
    {

        document.getElementById("alle").innerHTML += "<ul>"
        document.getElementById("alle").innerHTML += "<li>" + ekkoShortlist[i].titel + " " +ekkoShortlist[i].instruktor +" "+ekkoShortlist[i].shortlist + "</li>";    
        document.getElementById("alle").innerHTML  += "</ul>"
    }


};