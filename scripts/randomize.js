let no = document.querySelector(".random");

function randomize(){
    let randomX = Math.floor(Math.random() * 10 + 1);
    let randomY = Math.floor(Math.random() * -15 + 1);
    absolute(randomX, randomY);
}

function absolute(x, y){
    no.style.position = "absolute";
    no.style.transform = `translate(${x}rem,${y}rem)`;
}

no.addEventListener("click", Event => {
    randomize();
});