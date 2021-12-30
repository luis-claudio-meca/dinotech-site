// This file is intentionally blank
// Use this file to add JavaScript to your project
if(document.getElementById('button-newsletter'))
document.getElementById('button-newsletter').addEventListener('click', ()=>{
    location.replace('contact.html');
})

if(document.getElementById('whatsapp'))
document.getElementById('whatsapp').addEventListener('click', ()=>{
    location.replace('https://api.whatsapp.com/send/?phone=5592984552589&text&app_absent=0');
})

if(document.getElementById('instagram'))
document.getElementById('instagram').addEventListener('click', ()=>{
    location.replace('https://www.instagram.com/dinotechsw/');
})