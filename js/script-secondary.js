const container = document.querySelector(".nav");
const sectionOne = document.querySelector(".banner");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        container.classList.add("nav__scrolled");
      } else {
        container.classList.remove("nav__scrolled");
      }
    });
  },
  sectionOneOptions);

sectionOneObserver.observe(sectionOne);



// gallery 

let galleryImages = document.querySelectorAll(".gallery_img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImgUrl.split("/img/thum/");
      let setNewImgUrl = getImgUrlPos[1].replace('")', '');

      getLatestOpenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img_window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "img/gallery/" + setNewImgUrl);
      newImg.setAttribute("id", "current_img");


      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("Next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img_btn_next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right: "+calcImgToEdge+ "px;";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("Prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img_btn_prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText = "left: "+calcImgToEdge+ "px;";
      }
    }
  });
}

function closeImg() {
  document.querySelector(".img_window").remove();
  document.querySelector(".img_btn_next").remove();
  document.querySelector(".img_btn_prev").remove();
}
function changeImg(changeDir){
  document.querySelector("#current_img").remove();

  let getImgWindow = document.querySelector(".img_window");
  let newImg =document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if(changeDir === 1){
    calcNewImg = getLatestOpenedImg + 1;
    if(calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  }
  else if(changeDir === 0){
      calcNewImg = getLatestOpenedImg - 1;
      if(calcNewImg < 1) {
        calcNewImg = galleryImages.length;
      }
  }

  newImg.setAttribute("src","img/gallery/img" + calcNewImg + ".jpg");
  // newImg.setAttribute("src","img/gallery/img" + calcNewImg + ".png");
  newImg.setAttribute("id","current_img");

  getLatestOpenedImg = calcNewImg;
  
  newImg.onload = function(){
    let imgWidth = this.width;
    let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

    let nextBtn = document.querySelector(".img_btn_next");
    nextBtn.style.cssText = "right: "+calcImgToEdge+ "px;";

    let prevBtn = document.querySelector(".img_btn_prev");
    prevBtn.style.cssText = "left: "+calcImgToEdge+ "px;";

  }

}