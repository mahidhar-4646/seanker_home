let wrapper = document.querySelector(".sliderWrapper");
let menuItems = document.querySelectorAll(".menuItem");
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];
let choosen = products[0];
let currentProductImg = document.querySelector(".productImg");
let currentProductTitle = document.querySelector(".productTitle");
let currentProductPrice = document.querySelector(".productPrice");
let currentProductColors = document.querySelectorAll(".color");
let currentProductSizes = document.querySelectorAll(".size");
menuItems.forEach((item,idx)=>{
  item.addEventListener("click",()=>{
    //change the slide
    wrapper.style.transform = `translateX(${-100 * idx}vw)`;
    //change the choose product
    choosen = products[idx];

    // change details of the cyrrr product
    currentProductTitle.textContent=choosen.title;
    currentProductPrice.textContent = "$"+choosen.price;
    currentProductImg.src = choosen.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosen.colors[index].code;
    });
  });
});
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosen.colors[index].img;
  });
});

currentProductSizes.forEach((size,idx)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white";
       size.style.color="black";
     });
    size.style.backgroundColor="black";
    size.style.color="white";
  });
})

