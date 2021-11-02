const special = document.querySelector('#speical')
const DOMRect = special.getBoundingClientRect();


special.addEventListener('click', event => {
  console.log(DOMRect);
  console.log(`client : ${event.clientX}, ${event.clientY}`);
  console.log(`page: ${event.pageX}, ${event.pageY}`);
});


const scrollBy = document.querySelector('.button1');
const scrollTo = document.querySelector('.button2');
const scrollInto = document.querySelector('.button3');

/////

scrollBy.addEventListener('click', () => {
  window.scrollBy(0, 100);
});
scrollTo.addEventListener('click', () => {
  window.scrollTo(0, 100);
});
scrollInto.addEventListener('click', () => {
  special.scrollIntoView();
});