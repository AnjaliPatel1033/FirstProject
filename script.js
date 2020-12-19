const btn=document.querySelector('.burgar');
const navlinks=document.querySelector('.navbar-links');
const toparrow=document.querySelector('.fab');
btn.addEventListener('click',()=>{
    btn.classList.toggle('toggle')
    navlinks.classList.toggle('show-nav')
})