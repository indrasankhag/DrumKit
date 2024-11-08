var btnCount=document.getElementsByTagName("button").length;
for(var i=0;i<btnCount;i++){
    document.getElementsByTagName("button")[i].addEventListener("click",function eventHandler(){
        var letter=this.innerHTML;
        makeSound(letter);
        buttonAnimation(letter);
    });
    
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var crashAudio=new Audio("./sounds/crash.mp3"); 
            crashAudio.play();
            break;
        case "a":
            var baseAudio=new Audio("./sounds/kick-bass.mp3");
            baseAudio.play();
            break;
        case "s":
            var snareAudio=new Audio("./sounds/snare.mp3"); 
            snareAudio.play();
            break;
        case "d":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
    }       
}

function buttonAnimation(current_key){
    var activeBtn = document.querySelector("."+current_key);
    activeBtn.classList.add("pressed");

    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    },100)
}   


