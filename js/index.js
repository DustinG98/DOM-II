// Your code goes here
//mouseover
let links = document.querySelectorAll(".nav-link");
links.forEach(cv => cv.addEventListener('mouseover', () => {
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

//mouseout
let contentImg = document.querySelector(".img-content img");
contentImg.addEventListener('mouseout', () => {
    contentImg.style.border="2px solid blue";
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
