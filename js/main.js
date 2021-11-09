// sticky navbar
let header = document.querySelector('header');
let menu = document.querySelector('.menu-bar');
let nav = document.querySelector('.nav-bar');

window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
});
// menu bar
menu.onclick = () => {
    nav.classList.toggle('active');
}
window.onscroll = () => {
    nav.classList.remove('active');
}
// dark mode
let darkmode = document.querySelector("#dark-mode");
darkmode.onclick = () => {
    if (darkmode.classList.contains('fa-moon')){
        darkmode.classList.replace('fa-moon','fa-sun');
        document.body.classList.add('active');
    }else {
        darkmode.classList.replace('fa-sun','fa-moon');
        document.body.classList.remove('active');
    }
}
