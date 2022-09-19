$(document).ready(function (){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        smartSpeed:1500,

        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
        }
    });
});

