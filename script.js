let menu = document.querySelector('.icon');
let nav = document.querySelector('.nav');

function menuClick(){
    nav.classList.toggle('nav2');
    menu.classList.toggle('icon2');
}

gsap.from('ul li',{ opacity:0, x:-20, duration:1.5,  stagger:0.5 })

gsap.from('.work, .name, .hello', {opacity:0, duration:1.5,scale:0.5,  stagger:1 })


let subm = document.querySelector('.feedback-input')

function sub(){
    alert('thanks for visiting my website' + ' ' + subm.value);
}
