/* card sliders */

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtn = [...document.querySelectorAll('.flecha-izq')];
let nxtBtn = [...document.querySelectorAll('.flecha-der')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width

    nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth - 200;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
      })
})


let imgs = ['img/movie1.jpg', 'img/movie3.jpg', 'img/movie4.jpg', 'img/movie5', 'img/movie6.jpg'];
cont = 0;

function carousel(cardContainer){
  cardContainer.addEventListener('click', e => {
    let preBtn = cardContainer.querySelector('.flecha-izq');
    nxtBtn = cardContainer.querySelector('.flecha-der');
    imgs = cardContainer.querySelector('img');
    tgt = e.target;
s
    if(tgt == preBtn){
      if(cont > 0){
        imgs.src = imgs[cont -1];
        cont--;
      }else{
        img.src = imgs[imgs.length - 1 ];
        cont = imgs.length - 1;
      }
    }else if(tgt == nxtBtn){
      if(cont < imgs.length - 1){
        img.src = imgs[cont + 1];
        cont++;
      }else{
        imgs.src = imgs[ 0 ];
        cont = 0;
    }
  }})
  

document.addEventListener("DOMContentLoaded", () => {
  let cardContainer = document.querySelector('.cardContainer');
  carousel(cardContainer);
})
}