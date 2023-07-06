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
