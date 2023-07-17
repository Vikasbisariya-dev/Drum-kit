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

// //  Engineer is an object which has properties and methods
// var Engineer = {
//     // Properties
//     Name : "vikas bisariya",
//     Age : 22,
//     WOrkofhours : "8 hours",
//     Experience : "No experience",

//     // method

//    viaks : function(){
//      return ("my name is: " + Engineer.Name +" and "+ "my age is: " + Engineer.Age +" "+"i have "+ Engineer.WOrkofhours + "work everyday with "+ Engineer.Experience);
//   }
// };

// // var Engineer;
// console.log(Engineer.viaks());
// // console.log( "my name is: " + Engineer.Name +"and"+ "my age is: " + Engineer.Age +" "+"i have "+ Engineer.WOrkofhours + "work everyday with "+ Engineer.Experience);



// //  Constructor function and initilising object

 

// function Person(name, age){
//     this.name = name;
//     this.age = age;

//    this.aboutu = function() {
//         console.log("my name is " + this.name + "and i am " + this.age +" years old")
//    };
// }


// const person1 = new Person("viaks",23);
// person1.aboutu();

// const person2 = new Person("naveen", 4);
// person2.aboutu();


// var Housekeeper = function(name,age){
//     this.name= name;
//     this.age = age;

//     this.clean = function(){
//         alert("cleaning in process");
//     }
// }

// const Housekeeper1 = new Housekeeper("viaks",34);

// Housekeeper1.clean();
