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
        document.getElementsByClassName('btn-line')[1].style.opacity = "0";
        document.getElementsByClassName('btn-line')[2].style.transform = "rotate(-45deg) translate(6px, -7px)"; 

    } else {
        menuBtn.classList.remove('close'); 
        menu.classList.remove('show'); 
        menuLeft.classList.remove('show');
        menuRight.classList.remove('show'); 
        menuItems.classList.remove('show');
        
        //SET MENU STATE
        showMenu = false;
        
        document.getElementsByClassName('btn-line')[0].style.transform = "none";
        document.getElementsByClassName('btn-line')[1].style.opacity = "1";
        document.getElementsByClassName('btn-line')[2].style.transform = "none";   
        
    }
}



// Set the date we're counting down to
var countDownDate = new Date("Jan 8, 2020 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
//  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//  + minutes + "m " + seconds + "s ";
    
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours; 
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);