const slider = document.querySelector('.slider')
const after = document.querySelector('.slider-after')
const line = document.querySelector('.line')


line.onpointerdown = function(event) {

  event.preventDefault();
  let shiftX = event.clientX - line.getBoundingClientRect().left;

  document.addEventListener('pointermove', onPointerMove);
  document.addEventListener('pointerup', onPointerUp);

  function onPointerMove(event) {
    document.body.style.overflow = 'hidden'

    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }

    let rightEdge = slider.offsetWidth - line.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
  
    line.style.left = newLeft + 'px';
    after.style.width = newLeft + 'px'; 
  }

  function onPointerUp() {
    document.body.style.overflow = ''
    document.removeEventListener('pointerup', onPointerUp);
    document.removeEventListener('pointermove', onPointerMove);
  }

};

line.ondragstart = function() {
  return false;
};