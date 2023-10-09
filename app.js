// DOM Elements

const blob = document.getElementById('blob');
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}
document.body.onpointermove = event => {
  const {clientX, clientY} = event;

  blob.animate({
    left :`${clientX}px`,
    top :`${clientY}px`
  }, {duration: 3000, fill: "forwards" });
}