
let blocks = document.querySelector(".blocks");
let block = document.querySelectorAll(".block");
let globalOrder = 1;
let globalLeft = 0;
let timer;


blocks.style.flexDirection="column-reverse";

block.forEach(cv => cv.addEventListener('click', ()=>{
    cv.style.order = globalOrder += 1;
}))

block.forEach(cv => cv.style.position="relative");

block.forEach(cv => cv.addEventListener('mousedown', () => {
    timer = setInterval(function(){globalLeft += 10;
        cv.style.left = globalLeft + "px";
    }, 100)
}))

block.forEach(cv => cv.addEventListener('mouseup', () => {
    if(timer) {
        clearInterval(timer);
        globalLeft = 0;
        cv.style.left = globalLeft + "px";
    };
}))
