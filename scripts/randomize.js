let images = ["img1.jpeg", "img2.jpg", "img3.jpeg"]; 

let no = document.querySelector(".random");

function randomize(){
    let randomX = Math.floor(Math.random() * 10 + 1);
    let randomY = Math.floor(Math.random() * -15 + 1);
    absolute(randomX, randomY);

    let randomImg = Math.floor(Math.random() * 4);
    let imgContainer = document.querySelector(".img-container");
    imgContainer.innerHTML = '';
    let img = document.createElement("img");
    img.src = `/images/${images[randomImg]}`;
    imgContainer.append(img);
}

function absolute(x, y){
    no.style.position = "absolute";
    no.style.transform = `translate(${x}rem,${y}rem)`;
}

no.addEventListener("click", Event => {
    randomize();
});