const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');



setInterval(() => {
  p3.style.opacity = '0';
  p4.style.opacity = '0';
  setTimeout(() => {
    p3.style.opacity = '1';
    p4.style.opacity = '1';
  }, 1000);
  
}, 2000)