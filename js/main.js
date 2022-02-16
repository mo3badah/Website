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
// Validation of the data to be sent as an email
// 1: get the main fields.
let userName = document.getElementById('name');
let userMail = document.getElementById('mail');
let userText = document.getElementById('text');
// 2: Made the function to filter.
console.log(document.forms[0]);
document.forms[0].onsubmit = function (e){
    let nameValid = false;
    let mailValid = false;
    let textValid = false;

    //    2.1: Check the name is less than 30 characters and not empty filed.
    if (userName.value !== "" && userName.value.length <= 30){
        nameValid = true;
    }
    //    2.2: Check the mail not empty filed.
    if (userMail.value !== ""){
        mailValid = true;
    }
    //    2.3: Check the text message not empty filed.
    if (userText.value !== ""){
        textValid = true;
    }
    if (!nameValid || !mailValid || !textValid){
        e.preventDefault();
    }
}
let swiper2 = new Swiper(".swiper-container",{
    spaceBetween: 5,
    centeredSlides: true,
    // loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
    loop: true,
    slidesPerView: 'auto', /* Set me! */
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});
// preview projects
let projectContainer = document.querySelector('.all-projects');
let projects = document.querySelectorAll('.all-projects .details');
document.querySelectorAll('.portfolio .portfolio-content .portfolio-img').forEach(project =>{
    project.onclick = () =>{
        projectContainer.style.display = 'flex';
        let name = project.getAttribute('data-name');
        projects.forEach(details =>{
            let target = details.getAttribute('data-target');
            if (name === target){
                details.classList.add('active');
            }
        })
    }
});
projectContainer.querySelector('#close-preview').onclick = () =>{
    projectContainer.style.display = 'none';
    projects.forEach(close =>{
        close.classList.remove('active');
    })
}
