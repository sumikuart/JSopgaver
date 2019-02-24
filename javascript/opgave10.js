

window.onload = function () {

    var currentposy = document.getElementById("pacman").offsetTop;
    var currentposx = document.getElementById("pacman").offsetLeft;


    document.getElementById("op").addEventListener("click", function () {

            currentposx = currentposx;
            currentposy = currentposy - 10;
            console.log(currentposy);

            if (currentposy < 0) {
                currentposy = 230;
                document.getElementById("board").style.cssText = "background-color:" + getRandomColor();    
        }


            document.getElementById("pacman").style.cssText = "left: " + currentposx + "px; top:" + currentposy + "px;transform: rotate(270deg);"
        


    });


    document.getElementById("ned").addEventListener("click", function () {

        if (currentposy < 230) {
            currentposx = currentposx;
            currentposy = currentposy + 10;
            console.log(currentposy);

            if (currentposy > 230) {
                currentposy = 0;
                document.getElementById("board").style.cssText = "background-color:" + getRandomColor();
        }

            document.getElementById("pacman").style.cssText = "left: " + currentposx + "px; top:" + currentposy + "px; transform: rotate(90deg);"

        }
        


    });

    document.getElementById("hoejre").addEventListener("click", function () {



            currentposx = currentposx + 10;
            currentposy = currentposy;
            console.log(currentposx);

            if (currentposx > 430) {
                currentposx = 0;
                document.getElementById("board").style.cssText = "background-color:" + getRandomColor();
        }
            document.getElementById("pacman").style.cssText = "left: " + currentposx + "px; top:" + currentposy + "px; transform: rotate(0deg);"
        

    });

    document.getElementById("venstre").addEventListener("click", function () {
   
            currentposx = currentposx - 10;
            currentposy = currentposy;
            console.log(currentposx);
            if (currentposx < 0) {
                currentposx = 430;
                document.getElementById("board").style.cssText = "background-color:" + getRandomColor();
        }
            document.getElementById("pacman").style.cssText = "left: " + currentposx + "px; top:" + currentposy + "px;  transform: scaleX(-1)"
        
    });




    document.addEventListener("keydown", presskeydown);

    function presskeydown(e) {
        var keyCode = e.keyCode;
        if (keyCode == 40) {

            e.preventDefault()
            currentposx = currentposx;
            currentposy = currentposy + 5;
            console.log(currentposy);
            if (currentposy > 230) {
                currentposy = 0;
                document.getElementById("board").style.cssText = "background-color:" + getRandomColor();
            }

            document.getElementById("pacman").style.cssText = "left: " + currentposx + "px; top:" + currentposy + "px; transform: rotate(90deg);"
         


        }


        if (keyCode == 38) {
            e.preventDefault()
                currentposx = currentposx;
                currentposy = currentposy - 5;
                console.log(currentposy);

                if (currentposy < 0) {
                    currentposy = 230;
                    document.getElementById("board").style.cssText = "background-color:" + getRandomColor();
            }


                document.getElementById("pacman").style.cssText = "left: " + currentposx + "px; top:" + currentposy + "px;transform: rotate(270deg);"
                
              
        }


        if (keyCode == 39) {
           
                currentposx = currentposx + 5;
                currentposy = currentposy;
                console.log(currentposx);


                if (currentposx > 430) {
                    currentposx = 0;
                    document.getElementById("board").style.cssText = "background-color:" + getRandomColor();
            }
                document.getElementById("pacman").style.cssText = "left: " + currentposx + "px; top:" + currentposy + "px; transform: rotate(0deg);"
           
        }

        if (keyCode == 37) {



                currentposx = currentposx - 5;
                currentposy = currentposy;
                console.log(currentposx);

                if (currentposx < 0) {
                    currentposx = 430;
                    document.getElementById("board").style.cssText = "background-color:" + getRandomColor();
            }
                document.getElementById("pacman").style.cssText = "left: " + currentposx + "px; top:" + currentposy + "px;  transform: scaleX(-1)"
               
        }



    }

}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  