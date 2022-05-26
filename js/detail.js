// let play = document.querySelector('.detail-trailer-btn');
// let playvideo = document.querySelector('.hide-video');
// document.addEventListener('click' , function(){
//    if (play.click == true){
//    playvideo.classList.add('vision');
//    }
// })
let button3 = document.getElementById('youvideo')
let button = document.getElementById('playbutton')
let play = document.getElementById('videoplay')
button.addEventListener('click', changeclass)
function changeclass(){
     button3.setAttribute('src' , "https://www.youtube.com/embed/FUK2kdPsBws")
     play.classList.add('vision')
}
let button2 = document.getElementById('xbutton')
button2.addEventListener('click', delclass)
function delclass(){
   play.classList.remove('vision')
   button3.removeAttribute('src')
}

var owl = $('.owl-carousel-detail');
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
            items:2
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:5
        }
    }
});

