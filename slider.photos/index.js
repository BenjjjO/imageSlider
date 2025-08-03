let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");



let timeRunning = 5000;
let timeAutoRun = 7000;
let runTimeOut;
let runAutoRun;


function resetAutoRun() {
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
      nextDom.click();
    }, timeAutoRun);
  }
  resetAutoRun();
  nextDom.onclick = function () {
    showSlider("next");
  };
  prevDom.onclick = function () {
    showSlider("prev");
  };


function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add('prev')
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() =>{
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);
  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoRun);
    resetAutoRun();
}
document.addEventListener("DOMContentLoaded", function () {
  const mainImageContainer = document.querySelector(".carousel .list");
  const thumbnails = document.querySelectorAll(".thumbnail .item img");

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", function () {
          
          const mainItems = document.querySelectorAll(".carousel .list .item");
          const newSrc = this.src;

                    mainItems.forEach(item => {
              const img = item.querySelector("img");
              if (img.src.includes(newSrc)) {
                 
                  mainImageContainer.prepend(item);
                  
              }
          });
      });
  });
});
