// Your code goes here
//mouseover
let links = document.querySelectorAll(".nav-link");
links.forEach(cv => cv.addEventListener('mouseover', (e) => {
    e.preventDefault();
    cv.style.color="blue";
}))

//keydown
let logoHeader = document.querySelector(".logo-heading");
document.addEventListener('keydown', (e) => {
    logoHeader.style.color="red";
})

//keyup
document.addEventListener('keyup', () => {
    logoHeader.style.color="black";
})


//click
let mainImg = document.querySelector(".intro img");
mainImg.addEventListener('click', () => {
    mainImg.style.display="none";
})



//mouseenter
let contentImg = document.querySelector(".img-content img");
contentImg.addEventListener('mouseenter', () => {
    contentImg.style.transform="scale(1.2)"
})
//mouseleave
contentImg.addEventListener('mouseleave', () => {
    contentImg.style.transform="scale(1)"
})
//resize
window.addEventListener('resize', () => nav.style.background="gray");
//scroll
let nav = document.querySelector('.main-navigation');
window.addEventListener('scroll', () => {
    nav.style.background="lightgray";
})

//select
let mainHeader = document.querySelector(".intro h2");
mainHeader.addEventListener('select', () => mainHeader.style.color="red");

//dblclick
contentImg.addEventListener('dblclick', () => contentImg.style.display="none")


//mousedown/up
let btn = document.querySelectorAll(".btn");
btn.forEach(cv => cv.addEventListener('mousedown', () => {
    cv.textContent = "SIGN UP TODAY"
}))
btn.forEach(cv => cv.addEventListener('mouseup', () => {
    cv.textContent = "Sign Me Up!"
}))


//gasp 
btn.forEach(cv => cv.addEventListener('mouseenter', () => {
    TweenMax.to(cv, 2, {boxShadow:"0px 0px 10px blue"});
}))




//event propagation
let body = document.querySelector('body');
body.addEventListener('click', () => {
    body.style.background="lightgray";
})
let intro = document.querySelector('.intro');
intro.addEventListener('click', (e) => {
    intro.style.background="purple";
    e.stopPropagation();
})
