(function ($) {
    "use strict"

    // Preloader
    $(window).on('load', function () {
        $("#preloader").delay(600).fadeOut();
    });

    // Mobile Toggle Btn
    $('.navbar-toggle').on('click', function () {
        $('#header').toggleClass('nav-collapse');
    });

    // Fixed Nav
    $(window).on('scroll', function () {
        var wScroll = $(this).scrollTop();
        wScroll > $('.banner-area').height() ? $('#header').addClass('fixed') : $('#header').removeClass('fixed');
    });

    // Banner Area Height
    function bannerHeight() {
        $('.banner-area').css({
            'paddingTop': $('#header').height() + 30
        });
    }
    $(window).on('resize', function () {
        bannerHeight();
    });
    bannerHeight();

    // Galery Slider
    $('#galery').owlCarousel({
        items: 2,
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

})(jQuery);

/*$('a#menu1').click(function(e) {
    e.preventDefault();
    $("#menu2).load("menu1.html", function() {
      $("#menu1").hide();
      $(this).show();
    });        
});

$('a#Menu1').click(function(e) {
   e.preventDefault();
   $("#menu1").load("y.html", function() {
     $("#home").hide();
     $(this).show();
   })       
});*/

/*var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#f44336'); */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
