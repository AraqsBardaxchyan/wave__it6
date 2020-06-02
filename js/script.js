let openMenu = false,
nabvarMenyu =  document.querySelector('.navbar'),
navbarHamburger = document.querySelector('#navbarHamburger')
function toggleMenu (){
    openMenu =! openMenu;
    openMenu? nabvarMenyu.style.height = '200px': nabvarMenyu.style.height = null
}
navbarHamburger.addEventListener('click',()=>toggleMenu())
