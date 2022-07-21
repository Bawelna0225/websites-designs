let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

// =============DARK MODE===============
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {

  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

  document.body.classList.remove('darkmode'); 
  localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode();
  }
});


//=================== MOBILE NAV ==========================
window.addEventListener("click", function (e) {
  if (
    !document.getElementById("toggle-menu").contains(e.target) &&
    !document.getElementById("side-nav").contains(e.target)
  ) {
    // if user clicks outside sidenav content close sidenav
    document.getElementById("side-nav").classList.add("hide");
  }
  let hide = document.querySelector(".hide");
  let wrapperMenu = document.querySelector(".wrapper-menu");

  if (document.getElementById("side-nav").contains(hide)) {
    wrapperMenu.classList.remove("open");
  } else {
    wrapperMenu.classList.add("open");
  }
});

const toggleSideMenu = () => {
  document.querySelector(".nav").classList.toggle("hide");
};