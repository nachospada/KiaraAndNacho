// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLeft = document.querySelector('.menu-left');
const menuRight = document.querySelector('.menu-right');
const menuItems = document.querySelector('.menu-items');

// Set Initial State of the Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('mouseover', hoverOn);
menuBtn.addEventListener('mouseout', hoverOff);

function hoverOn() {
    document.getElementsByClassName('btn-line')[0].style.background = "#fff";
    document.getElementsByClassName('btn-line')[1].style.background = "#fff";
    document.getElementsByClassName('btn-line')[2].style.background = "#fff";
}

function hoverOff() {
    document.getElementsByClassName('btn-line')[0].style.background = "var(--secondary-color)";
    document.getElementsByClassName('btn-line')[1].style.background = "var(--secondary-color)";
    document.getElementsByClassName('btn-line')[2].style.background = "var(--secondary-color)";
}


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
    } else {
        menuBtn.classList.remove('close'); 
        menu.classList.remove('show'); 
        menuLeft.classList.remove('show');
        menuRight.classList.remove('show'); 
        menuItems.classList.remove('show');
        
        //SET MENU STATE
        showMenu = false;
        
        document.getElementsByClassName('btn-line')[0].style.transform = "none";
        document.getElementsByClassName('btn-line')[1].style.display = "block";
        document.getElementsByClassName('btn-line')[2].style.transform = "none";          
    }
}