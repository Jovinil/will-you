let btn = document.querySelector("h1");
let main = document.querySelector("main");

let container = document.createElement("div");
let h1 = document.createElement("h1");
h1.textContent = "Dear Rutrut,";
let p = document.createElement("p");
p.textContent = "Hi my sunflower, I just want you to know that if heaven was a place on Earth it would be in your arms as you gently hold me. We've been through a lot of fun, adventurous, saddening, and sometimes dissapointing endeavors. No matter the outcome I'd still end up enjoying it as long as you're beside me. You've also been through a lot, which I am so proud of you for always persevering. Through laughter or tears, alignment of thoughts or misunderstandings, and be it rock bottom or the peak. Thank you for always being you my love. Your smile's worth will always be immeasurable my love.";
let h2= document.createElement("h2");
h2.textContent = "Yours always, Jovinil";

function showFull(){
    main.style.height = "fit-content";
    main.innerHTML = "";
    container.append(h1, p, h2);
    main.append(container);
}

function showIntro(){
    main.innerHTML = "";
    container.append(h1);
    main.append(container);
}

function output(){
    showIntro();
    setInterval(showFull, 1000);
}

btn.addEventListener("click", Event => {
    
    output();
});
