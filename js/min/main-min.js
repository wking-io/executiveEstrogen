$(document).ready(function(){$(".nav__icon").click(function(){$(this).toggleClass("open"),$("#menu").toggleClass("menu-open")}),$("#mobile-about, #mobile-services, #mobile-testimonials, #mobile-contact").click(function(){$(".nav__icon").toggleClass("open"),$("#menu").toggleClass("menu-open")}),$(".gallery__images").slick({dots:!1,autoplay:!0,autoplaySpeed:0,infinite:!0,speed:9e3,slidesToShow:1,centerMode:!0,variableWidth:!0})});