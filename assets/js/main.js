let root = document.querySelector(":root");
let rs = getComputedStyle(root);
let color = rs.getPropertyValue("--color");
$("#carouselExampleSlidesOnly").on("slide.bs.carousel", function(){
    let active = document.querySelector(".carousel-item.active");
    let newColor = active.getAttribute("data-color");
    root.style.setProperty("--color",newColor); 
    console.log(newColor)
})
// control arrivals slides by swiper jz
var swiper = new Swiper(".swiper-container",{
  effect:"coverflow",
  grapCursor:true,
  centerdSlides:true,
  slidesPerView:"auto",
  coverflowEffect:{
    rotate:0,
    stretch:100,
    depth:200,
    modifier:1,
    slideShadows:true,
  },
  loop:true,
  }
);
// show cart
let cart = document.querySelector(".my-cart");
let login = document.querySelector(".login");
let user = document.querySelector("#user");
let shopping = document.querySelector("#shopping");
let bars = document.querySelector("#bars");
let navbar = document.querySelector(".navbar-nav");
let close1 = document.querySelectorAll(".fas.fa-times");
user.onclick = ()=>{
    login.classList.remove("hide-r");
    login.classList.add("end-0");
}
shopping.onclick = ()=>{
    cart.classList.remove("hide-r");
    cart.classList.add("end-0");
}
close1.forEach((x)=>{
    x.onclick=()=>{
        cart.classList.add("hide-r");
        cart.classList.remove("end-0");
        login.classList.add("hide-r");
        login.classList.remove("end-0");
    }
}
)
window.onscroll=()=>{
    cart.classList.add("hide-r");
    cart.classList.remove("end-0");
    login.classList.add("hide-r");
    login.classList.remove("end-0");
}