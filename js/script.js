let sliderItem = document.getElementById("slider-item"),
  prevBtnSlider = document.getElementById("slider-prev"),
  nextBtnSlider = document.getElementById("slider-next");
let sliderNavDots = document.getElementsByClassName("slider-nav__item");
let sliderNavTopItems = document.getElementsByClassName("slider-nav__top-item");
let cityText = document.getElementById("city-text");
let apartmentText = document.getElementById("apartment-text");
let repairTimeText = document.getElementById("repair-time-text");
let repairCostText = document.getElementById("repair-cost-text");

let data = [
  {
    city: "Rostov-on-Don, Admiral",
    apartment: "81 m2",
    repairTime: "3.5 months",
    repairCost: "Upon request",
    imgUrl: "images/chairs.jpg",
  },
  {
    city: "Sochi Thieves",
    apartment: "105 m2",
    repairTime: "4 months",
    repairCost: "Upon request",
    imgUrl: "images/tele.jpg",
  },
  {
    city: "Rostov-on-Don Patriotic",
    apartment: "93 m2",
    repairTime: "3 months",
    repairCost: "Upon request",
    imgUrl: "images/living_room.jpg",
  },
];

let setSlider = (index) => {
  sliderItem.innerHTML = `<img src=${data[index].imgUrl} class="pict-slider" />`;
  cityText.innerHTML = data[index].city;
  apartmentText.innerHTML = data[index].apartment;
  repairTimeText.innerHTML = data[index].repairTime;
  repairCostText.innerHTML = data[index].repairCost;
};

let setACtiveDot = (index) => {
  for (let index = 0; index < sliderNavDots.length; index++) {
    sliderNavDots[index].classList.remove("slider-nav__item-active");
    sliderNavTopItems[index].classList.remove("slider-nav__top-item-active");
  }
  sliderNavDots[index].classList.add("slider-nav__item-active");
  sliderNavTopItems[index].classList.add("slider-nav__top-item-active");
};

let currentIndex = 0;

for (let index = 0; index < sliderNavDots.length; index++) {
  sliderNavDots[index].addEventListener("click", () => {
    currentIndex = index;
    setSlider(index);
    setACtiveDot(index);
  });
  sliderNavTopItems[index].addEventListener("click", () => {
    currentIndex = index;
    setSlider(index);
    setACtiveDot(index);
  });
}

setSlider(currentIndex);
setACtiveDot(currentIndex);

prevBtnSlider.addEventListener("click", () => {
  currentIndex === 0 ? (currentIndex = data.length - 1) : (currentIndex -= 1);
  setSlider(currentIndex);
  setACtiveDot(currentIndex);
});
nextBtnSlider.addEventListener("click", () => {
  currentIndex === data.length - 1 ? (currentIndex = 0) : (currentIndex += 1);
  setSlider(currentIndex);
  setACtiveDot(currentIndex);
});
