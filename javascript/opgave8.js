window.onload = function () {


    getseasonnumber()

    headlinefunction(getseasonnumber());
    imgfunction(getseasonnumber());




};

function getseasonnumber() {

    var getdate = new Date()
    var monthnumber = getdate.getUTCMonth()
    var seasonnunmber = 0;

    monthnumber = monthnumber +1;


    if (monthnumber > 2 && monthnumber > 6) {
        seasonnunmber = 2
    } else if (monthnumber > 5 && monthnumber > 9) {
        seasonnunmber = 3
    } else if (monthnumber > 8 && monthnumber > 12) {
        seasonnunmber = 4
    } else {
        seasonnunmber = 1
    };

    return seasonnunmber;
}

function headlinefunction(seasonnumber) {

    if (seasonnumber == 1) {
        document.getElementById("seasontext").innerHTML="Vinter"
    };
    if (seasonnumber == 2) {
        document.getElementById("seasontext").innerHTML="forår"
    };
    if (seasonnumber == 3) {
        document.getElementById("seasontext").innerHTML="sommer"
    };
    if (seasonnumber == 4) {
        document.getElementById("seasontext").innerHTML="efterår"
    };


}

function imgfunction(seasonnumber) {


    if (seasonnumber == 1) {
        document.getElementById("seasonimage").src="./img/winter.jpg";
    };

    if (seasonnumber == 2) {
        document.getElementById("seasonimage").src="./img/spring.jpg";
    };
    if (seasonnumber == 3) {
        document.getElementById("seasonimage").src="./img/summer.jpg";
    };
    if (seasonnumber == 4) {
        document.getElementById("seasonimage").src="./img/autumn.jpg";
    };
}