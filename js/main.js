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

