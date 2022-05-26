
var owl = $('.owl-carousel-b');
owl.owlCarousel({
    loop:true,
    nav:true,
    navText: ["<span class='myspan'><i class='fa fa-angle-left carusel-1-left'></i></span>","<span class='myspan'><i class='fa fa-angle-right carusel-1-right'></i></span>"],
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:3
        },
        1200:{
            items:4
        }
    }
});


// --------------------------------------------------------

let atag = document.querySelectorAll('.cat-2-link');
for (let index = 0; index < atag.length; index++) {
     atag[index].addEventListener("click", changeColor)
}
function changeColor(e) {
    for (let index = 0; index < atag.length; index++) {
       atag[index].classList.remove('bg_blue');  
   }
   
    this.classList.add('bg_blue');
}
// ------------------------------------------------------------

var owl = $('.owl-carousel-a');
owl.owlCarousel({
    loop:true,
    nav:true,
    navText: ["<span class='myspan'><i class='fa fa-angle-left carusel-2-left'></i></span>","<span class='myspan'><i class='fa fa-angle-right carusel-2-right'></i></span>"],
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:4
        },
        1200:{
            items:6
        }
    }
});

let scrollmenu = document.getElementById('navblock');
     
document.addEventListener('scroll' , function(){
    
    if(scrollmenu){
    if (window.scrollY > 400 && window.scrollY < 1700 ) {
         let width = scrollmenu.parentElement.getBoundingClientRect().width;
         scrollmenu.style.width = width - 30 + "px";
       scrollmenu.classList.add('fixed');
      

        // alert('0')
    }else{
        scrollmenu.classList.remove('fixed');
        scrollmenu.removeAttribute('style');
        // alert('1')
    }
    }
})
// --------scroll count-------------
    // window.onscroll = function (e) {
    // console.log(window.scrollY);
    // };
// -----------------------------------

var owl = $('.owl-carousel-c');
owl.owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    navText: ["<span class='myspan'><i class='fa fa-angle-left carusel-1-left'></i></span>","<span class='myspan'><i class='fa fa-angle-right carusel-1-right'></i></span>"],
    margin:10,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:3
        },
        1200:{
            items:3
        }
    }
});

var owl = $('.owl-carousel-contact');
owl.owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    // navText: ["<span class='myspan'><i class='fa fa-angle-left carusel-1-left'></i></span>","<span class='myspan'><i class='fa fa-angle-right carusel-1-right'></i></span>"],
    margin:10,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:6
        }
    }
});

let buttons = document.querySelectorAll('.cat-2-link')
let divs = document.querySelectorAll('.card-frame')

for (let index = 0; index < buttons.length; index++) {
      buttons[index].addEventListener('click', filterdiv);
    
}

function filterdiv(){
    let id = this.getAttribute('data-category');


  for (let index = 0; index < divs.length; index++) {


    if( divs[index].getAttribute('data-category') == id || id == 0){
      divs[index].parentElement.style.display = "block"
  }else{
      
      divs[index].parentElement.style.display = "none"
  }
}
}

