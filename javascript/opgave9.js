window.onload = function () {



   document.getElementById("alertclick").addEventListener("click", function (event) {
        event.preventDefault();
        alertfunction();
    });

    document.getElementById("alertclick").addEventListener("click", function (event) {
        event.preventDefault();
        alertfunction();
    });



    document.getElementById("confirmclick").addEventListener("click", function (event) {
        event.preventDefault();
        confirmfunction();
    });


};


function alertfunction() {

    alert("Du forlader nu siden, og går til google");
    window.location.replace("http://google.dk");

}

function confirmfunction() {

    var r = confirm("vil du forlade siden?");

    if (r) {

        window.location.replace("http://bing.com");
    }
}