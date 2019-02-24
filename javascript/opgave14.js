

window.onload = function () {
    


    document.getElementById('knap').onclick = function(){udregncomplete()};



}




function    udregncomplete() {

    var n1 = document.getElementById("tal1").value;
    var n2 = document.getElementById("tal2").value;


    var realn1 =  Number(n1);
    var realn2 =  Number(n2);

  
    if (realn1 =="" || realn2=="") {
        alert("missing numbers")
    } else {
        document.getElementById("plus").innerHTML = plus(realn1,realn2);
      
        document.getElementById("minus").innerHTML = minus(realn1,realn2);
          
        document.getElementById("gange").innerHTML = gange(realn1,realn2);
          
        document.getElementById("dividere").innerHTML = dividere(realn1,realn2);
    }
  
}



function plus(nr1,nr2) {

var resultat = nr1 + nr2
    return resultat;

}
function minus(nr1,nr2) {

    var resultat = nr1 - nr2
    return resultat;
}

function gange(nr1,nr2) {

    var resultat = nr1 * nr2
    return resultat;
}

function dividere(nr1,nr2) {
    var resultat = nr1 / nr2
    return resultat;

}