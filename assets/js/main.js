$(function(){"use strict";$(window).on('load',function(event){$('#preloader').delay(500).fadeOut(500);});$(window).on('scroll',function(event){var scroll=$(window).scrollTop();if(scroll<20){$(".navbar-area").removeClass("sticky");}else{$(".navbar-area").addClass("sticky");}});var scrollLink=$('.page-scroll');$(window).scroll(function(){var scrollbarLocation=$(this).scrollTop();scrollLink.each(function(){var sectionOffset=$(this.hash).offset().top-73;if(sectionOffset<=scrollbarLocation){$(this).parent().addClass('active');$(this).parent().siblings().removeClass('active');}});});$(".navbar-nav a").on('click',function(){$(".navbar-collapse").removeClass("show");});$(".navbar-toggler").on('click',function(){$(this).toggleClass("active");});$(".navbar-nav a").on('click',function(){$(".navbar-toggler").removeClass('active');});var subMenu=$(".sub-menu-bar .navbar-nav .sub-menu");if(subMenu.length){subMenu.parent('li').children('a').append(function(){return '<button class="sub-nav-toggler"> <i class="lni-chevron-down"></i> </button>';});var subMenuToggler=$(".sub-menu-bar .navbar-nav .sub-nav-toggler");subMenuToggler.on('click',function(){$(this).parent().parent().children(".sub-menu").slideToggle();return false});}
$('.container').imagesLoaded(function(){var $grid=$('.grid').isotope({transitionDuration:'1s'});$('.portfolio-menu ul').on('click','li',function(){var filterValue=$(this).attr('data-filter');$grid.isotope({filter:filterValue});});$('.portfolio-menu ul li').on('click',function(event){$(this).siblings('.active').removeClass('active');$(this).addClass('active');event.preventDefault();});});$('.image-popup').magnificPopup({type:'image',gallery:{enabled:true}});$('.testimonial-active').slick({infinite:true,slidesToShow:2,slidesToScroll:1,speed:800,arrows:false,dots:true,autoplay:true,autoplaySpeed:5000,responsive:[{breakpoint:1200,settings:{slidesToShow:2,}},{breakpoint:992,settings:{slidesToShow:2,}},{breakpoint:768,settings:{slidesToShow:1,}},{breakpoint:576,settings:{slidesToShow:1,arrows:false,}}]});$(window).on('scroll',function(event){if($(this).scrollTop()>900){$('.back-to-top').fadeIn(200)}else{$('.back-to-top').fadeOut(200)}});$('.back-to-top').on('click',function(event){event.preventDefault();$('html, body').animate({scrollTop:0,},1500);});});