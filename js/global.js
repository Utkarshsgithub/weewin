// I N I T I A L I Z I N G   A O S   L I B R A R Y 

AOS.init();

// R E S P O N S I V E   N A V B A R   M E N U 

// let links = document.getElementById('menu__links')
const menu = document.getElementById("menu");
const button = document.getElementById("button");
let menuOpen = false;

// function disableScroll() {
//     // Get the current page scroll position
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

//         // if any scroll is attempted, set this to the previous value
//         window.onscroll = function() {
//             window.scrollTo(scrollLeft, scrollTop);
//         };
// }

// function enableScroll() {
//     window.onscroll = function() {};
// }

button.addEventListener("click", () => {
  if (!menuOpen) {
    button.classList.add("open");
    menuOpen = true;
    menu.style.transform = "translateY(0%)";
    // links.style.transform = 'translateY(0%)';
    // links.style.display = 'flex'
    // disableScroll();
  } else {
    button.classList.remove("open");
    menuOpen = false;
    menu.style.transform = "translateY(-100%)";
    // links.style.transform = 'translateY(-100%)'
    // enableScroll();
    // links.style.display = 'none'
  }
});
