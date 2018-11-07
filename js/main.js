// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLeft = document.querySelector('.menu-left');
const menuRight = document.querySelector('.menu-right');
const menuItems = document.querySelector('.menu-items');

// Set Initial State of the Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close'); 
        menu.classList.add('show'); 
        menuLeft.classList.add('show');
        menuRight.classList.add('show'); 
        menuItems.classList.add('show');
        
        //SET MENU STATE
        showMenu = true; 
        
        document.getElementsByClassName('btn-line')[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        document.getElementsByClassName('btn-line')[1].style.display = "none";
        document.getElementsByClassName('btn-line')[2].style.transform = "rotate(-45deg) translate(1px, -1px)";
        
        menuItems.children[0].style.animationName = "fromRight";
        menuItems.children[0].style.animationDuration = ".5s";
        
        menuItems.children[1].style.animationName = "fromRight";
        menuItems.children[1].style.animationDuration = ".8s";
        
               
    } else {
        menuBtn.classList.remove('close'); 
        menu.classList.remove('show'); 
        menuLeft.classList.remove('show');
        menuRight.classList.remove('show'); 
        menuItems.classList.remove('show');
        
        menuItems.children[0].style.animationName = "toRight";
        menuItems.children[0].style.animationDuration = ".5s";
        
        menuItems.children[1].style.animationName = "toRight";
        menuItems.children[1].style.animationDuration = ".8s";
        
        //SET MENU STATE
        showMenu = false;
        
        document.getElementsByClassName('btn-line')[0].style.transform = "none";
        document.getElementsByClassName('btn-line')[1].style.display = "block";
        document.getElementsByClassName('btn-line')[2].style.transform = "none";  
        
    }
}