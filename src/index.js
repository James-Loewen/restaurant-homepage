import './style.css';

const homeTab = document.querySelector('#home-tab');
const menuTab = document.querySelector('#menu-tab');
const contactTab = document.querySelector('#contact-tab');

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.id);
  })
})

// homeTab.addEventListener('click', (e) => alert(e.target.id));