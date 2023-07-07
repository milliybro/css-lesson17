AOS.init({
   duration: 2000,
});

$('.owl-carousel').owlCarousel({
   center: true,
   items:3,
   loop:false,
   margin:10,
   nav: true,
   responsive:{
      0: {
         items: 1,
       },
       500: {
         items: 2,
       },
       1200: {
         items: 3,
       },
   }
});


window.addEventListener("scroll", function () {
   shrink();
 });
 
 let navbar = document.getElementById("navbar");
 
 function shrink() {
   if (scrollY > 100) {
     navbar.classList.add("navbar-shrink");
   } else {
       navbar.classList.remove("navbar-shrink");
    }
 }

 
function openNavbar() {
   document.getElementById("navbar-responsive").style.left = "0";
   // document.getElementById("navbar-responsive").style.top = "0";
 }
 function closeNavbar() {
   document.getElementById("navbar-responsive").style.left = "-100%";
   // document.getElementById("navbar-responsive").style.top = "-100%";
 }
 
 document.getElementById("navbar-open").addEventListener("click", openNavbar);
 document.getElementById("navbar-close").addEventListener("click", closeNavbar);
 
 
 window.addEventListener("scroll", function () {
   toggleBacktop();
 });


 let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    console.log("light");
    this.firstElementChild.src = "../assets/images/light.svg";
  } else {
    console.log("dark");
    this.firstElementChild.src = "../assets/images/night.svg";
  }
  document.body.classList.toggle("light");
});