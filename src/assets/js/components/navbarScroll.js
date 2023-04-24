//Causes the adding class of appearing
function ShowNavBackground(){
    const navEl = document.querySelector('.navbar');
    navEl.classList.add('navbar-scrolled')
}
//Causes the removing class appearing
function HideNavBackground(){
    const navEl = document.querySelector('.navbar');
    navEl.classList.remove('navbar-scrolled')
}
//Listener, that reacts of scrolling
window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 685){
        ShowNavBackground()
    }
    else if (window.scrollY < 685){
        HideNavBackground()
    }
})
