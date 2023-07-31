$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
loop:false,
margin:10,
nav:true,
responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:4
    }
}
})
});

function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }