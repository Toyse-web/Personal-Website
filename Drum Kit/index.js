
let allDrums = document.querySelectorAll(".drum").length;

for (i = 0; i < allDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        let buttonInner = this.innerHTML;

        makeSound(buttonInner);
    })
}

function makeSound(key) {
    switch (key) {
        case "w" :
        let tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            
            break;
    
        case "s" :
        let tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
                    
            break;
    
        default:
            break;
    }
}