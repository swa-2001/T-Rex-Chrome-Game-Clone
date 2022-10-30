const dino = document.getElementById("dino");
const cactus=document.getElementById("cactus");
function jump(){
    if(dino.classList!="jump1"){

    
    dino.classList.add("jump1"); //jump1 is a class 
    setTimeout(function(){
        dino.classList.remove("jump1");
    },300);
}
}

let isAlive=setInterval(function(){
    //get y position of dinosaur
    let dinoTop =parseInt( window.getComputedStyle(dino).getPropertyValue("top"));
    //get x position of cactus
    console.log(dinoTop);
    let cactusleft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //check collision
    if(cactusleft<50&&cactusleft>0&&dinoTop>=140){
        //collision
        alert("game over");
    }


},10);


document.addEventListener("keydown",function(event)
{
    jump();
});