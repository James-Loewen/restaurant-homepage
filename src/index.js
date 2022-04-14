import './style.css';

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    btns.forEach(btn => {
      btn.classList.remove('active');
    })
    e.target.classList.add('active');
    console.log(e.target.id);
  })
})

// homeTab.addEventListener('click', (e) => alert(e.target.id));