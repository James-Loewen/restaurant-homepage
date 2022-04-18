import './style.css';
import generateHome from './home';
import generateMenu from './menu';

const content = document.querySelector('#content');
const btns = document.querySelectorAll('button');
const homeTab = document.querySelector('#home-tab');
const menuTab = document.querySelector('#menu-tab');
const contactTab = document.querySelector('#contact-tab');

const tabIds = {
  'home-tab': generateHome(),
  'menu-tab': generateMenu(),
}

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    btns.forEach(btn => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    content.innerHTML = '';
    tabIds[e.target.id].forEach(elem => content.appendChild(elem));
    console.log(e.target.id);
  });
});

generateHome().forEach(elem => content.appendChild(elem));