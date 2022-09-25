//A função abrir_menu serve para abrir e fechar o menu lateral
validar = false;
// a variável validar, tem a finalidade de verificar se está aberto ou fechado o menu

function abrir_menu() {
    let BarraMenuAberto = document.getElementById ('barra-menu');
    
    if (validar === false){
        BarraMenuAberto.style.width = "180px";
        validar = true;
    }else{
        BarraMenuAberto.style.width = "0px";
        validar = false;
    }
    
}



$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Desenvolvedor",  "Freelancer", "Técnico em Informática"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
           
        }
    });
});