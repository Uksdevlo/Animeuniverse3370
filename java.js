const search = document.querySelector('.search');
const input = document.querySelector('.input');
search.addEventListener('click',()=>{
    if(!input.classList.contains('input-open')){
        input.classList.add('input-open');
        search.innerHTML = "<img src='/icons/search.png'>";
    }
    else{
        input.classList.remove('input-open');
        search.innerHTML = "<img src='icons/search.png'>";
    }
})




let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr = ScrollReveal({
    distance:'65',
    duration: 2600,
    delay: 400,
    reset:true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});



function login() {
    document.getElementById('popup').style.display = 'flex';
}
function login() {
    document.getElementById('popup').style.display = 'flex';
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


