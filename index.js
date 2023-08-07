//  detecting button press
var NumberofdrumButtons = document.querySelectorAll(".drum").length;

for( var i=0; i<NumberofdrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var numberofbuttons = this.innerHTML;
        makesound(numberofbuttons);

        buttonAnimation(numberofbuttons)

    });
}

// Detecting keyword press
document.addEventListener("keydown",function(event){
       makesound(event.key);
       buttonAnimation(event.key);
});



function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;    

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break; 
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break; 
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break; 
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break; 
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break; 
    }
}



function buttonAnimation(cuurentkey){
    var Activebutton = document.querySelector("."+cuurentkey);

    Activebutton.classList.add("pressed");

    setTimeout(function(){
        Activebutton.classList.remove("pressed");
    },100);
}


