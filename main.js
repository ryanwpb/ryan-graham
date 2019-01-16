var btn = document.getElementById('menu-burger');
var menu = document.getElementById('mobile-nav');
var overlay = document.getElementById('overlay');

btn.onclick = () => {
  menu.style.width = "250px";
};

overlay.onclick = () => {
  menu.style.width = "0px";
};
