(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(200);
		}
	}
	
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			
			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(50);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(50);
			}
			
		}
	}
	
	headerStyle();
	
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa-solid fa-chevron-down fa-fw"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		$('.xs-sidebar-group .close-button').on('click', function(e) {
			$('.xs-sidebar-group.info-group').removeClass('isActive');
		});
		
	}
	
	
	// Add Current Class Auto
	function dynamicCurrentMenuClass(selector) {
		let FileName = window.location.href.split("/").reverse()[0];

		selector.find("li").each(function () {
			let anchor = $(this).find("a");
			if ($(anchor).attr("href") == FileName) {
				$(this).addClass("current");
			}
		});
		// if any li has .current elmnt add class
		selector.children("li").each(function () {
			if ($(this).find(".current").length) {
				$(this).addClass("current");
			}
		});
		// if no file name return
		if ("" == FileName) {
			selector.find("li").eq(0).addClass("current");
		}
	}
	
	
	
	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		//$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Hide / Show Submenu
		$('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var target = $(this).parent('li').children('ul');
			
			if ($(target).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(target).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown').children('ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//3rd Level Nav
		$('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var targetInner = $(this).parent('li').children('ul');
			
			if ($(targetInner).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(targetInner).slideUp(500);
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');

		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
		});

		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
				$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
        	}
	    });
		
	}
	
	
	
	
	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-4').length){
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	
	
	
	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}
	
	
	
	
	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	
	
	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		var slider = $('.single-item-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		}).on('changed.owl.carousel', function(event) {
			if(document.querySelector("#nombre-servicio")){
				cargarInformacionServicio(event.item.index);
			}
		});

		$('.fluid-one').on('mouseleave', function() {
			slider.trigger('play.owl.autoplay');
		});
		$('.fluid-one').on('mouseenter', function() {
			slider.trigger('stop.owl.autoplay');
		});
	}
	
	
	// Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				650:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});
	}
	
	
	
	// Services Carousel
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
	}
	
	
	// Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});
	}
	
	
	
	// Case Carousel
	if ($('.case-carousel').length) {
		var slider = $('.case-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			//autoHeight: true,
			autoplaySpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});
		$('.case-carousel').on('mouseleave', function() {
			slider.trigger('play.owl.autoplay');
		});
		$('.case-carousel').on('mouseenter', function() {
			slider.trigger('stop.owl.autoplay');
		});

		$('#btn-slider-anterior').on("click", function(){
			slider.trigger("prev.owl.carousel");
		})

		$('#btn-slider-posterior').on("click", function(){
			slider.trigger("next.owl.carousel");
		})
	}
	
	
	
	
	// Case Carousel Two
	if ($('.case-carousel-two').length) {
		$('.case-carousel-two').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			//center:true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}
	
	
	
	
	// News Carousel
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});
	}
	
	
	
	
	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:2
				},
				480:{
					items:3
				},
				600:{
					items:3
				},
				800:{
					items:5
				},
				1024:{
					items:5
				}
			}
		});    		
	}
	
	
	// Sponsors Carousel Two
	if ($('.sponsors-carousel-two').length) {
		$('.sponsors-carousel-two').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:2
				},
				480:{
					items:3
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:4
				}
			}
		});    		
	}
	
	
	
	
	
	// Odometer
	if ($(".odometer").length) {
		$('.odometer').appear();
		$('.odometer').appear(function(){
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.odometerOptions = {
				format: 'd',
			};
		});
	}
	
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	
	//Header Search
	if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}
	
	
	
	// LightBox Image
	if($('.lightbox-image').length) {
		$('.lightbox-image').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	}
	
	
	
	//LightBox Video
	if($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
	      // disableOn: 700,
	      type: 'iframe',
	      mainClass: 'mfp-fade',
	      removalDelay: 160,
	      preloader: false,
	      iframe:{
	        patterns:{
	          youtube:{
	          index: 'youtube.com',
	          id: 'v=',
	          src: 'https://www.youtube.com/embed/%id%'
	        },
	      },
	      srcAction:'iframe_src',
	    },
	      fixedContentPos: false
	    });
	}
	
	
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				phone: {
					required: true
				},
				services: {
					required: true
				},
				email: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);

function desplegarMenu(){
	let elemento= document.querySelector(".menu-box");
	if(elemento.style.visibility=="visible"){
		elemento.style.left="-400px";
		elemento.style.visibility="hidden";
	}else{
		elemento.style.left="0px";
		elemento.style.visibility="visible";
	}
} 

function centrarIconoMenu(){
	if(document.querySelector(".menu-desplegable")){
		let elemento = document.querySelector(".menu-desplegable");
		if(window.scrollY > 0){
			elemento.style.top = "40px";
		}else{
			elemento.style.top = "80px";
		}
	}
}

function llevar(seccion){
	let altura = document.querySelector(".sticky-header").offsetHeight;
	let elemento = document.getElementById(seccion);
	let posicion = elemento.getBoundingClientRect().top;
	window.scrollBy(0,posicion-altura);

}

document.addEventListener("scroll",()=>{centrarIconoMenu()});

function cargarInformacionServicio(servicio){
	let titulo = document.querySelector("#nombre-servicio");
	let descripcion = document.querySelector("#descripcion-servicio");

	setTimeout(() => {
		titulo.style.opacity=0;
		descripcion.style.opacity = 0;
		setTimeout(() => {
			switch (servicio) {
				case 3:
					titulo.innerHTML = "Desarrollo de <span class='theme_color'>Software</span><br>";
					descripcion.innerHTML =`<p>Transformamos ideas en soluciones de software para escritorio, web y móvil, 
					trabajamos con los mejores estándares y buenas practicas exigidas por el mercado.<br> Contamos con un 
					equipo de desarrolladores en constante capacitación para poder atender las solicitudes y desafíos más 
					exigentes.</p>`;
				break;
				case 4:
					titulo.innerHTML = "Mesa de Ayuda";
					descripcion.innerHTML =`<p>Brindamos asistencia 24/7 en las soluciones implementadas, nuestro trabajo exige 
					modalidades presencial y remota según los tipos y escalados de Incidentes reportados. Contamos con personal 
					altamente capacitado que sabrá brindar las respuestas en los tiempos exigidos por el negocio.</p>`;
				break;
				case 5:
					titulo.innerHTML = "Facturación <span class='theme_color'>Electrónica</span><br>";
					descripcion.innerHTML =`<p>Brindamos el servicio de transporte y validación de comprobantes electrónicos 
					con las mejores tarifas del mercado. Nuestro servicio diferencia de otros por la validación e informe 
					de los sucesos (control de estados de comprobantes electrónicos) en los tiempos establecidos por SUNAT. 
					<br> Trabajamos con nuestro aliado estratégico NUBEFACT para servicios OSE / PSE. También hacemos el 
					envío directo de los comprobantes a través del FACTURADOR SUNAT, para cualquiera de los dos servicios 
					nuestro personal hace la validación e informa de los sucesos para las acciones correctivas.</p>`;
				break;
				case 6:
					titulo.innerHTML = "Hardware de <span class='theme_color'>Cómputo</span><br>";
					descripcion.innerHTML =`<p>Vendemos equipos de computo como; Pc para puntos de ventas, Pc para oficina 
					(trabajos administrativos), servidores de datos, equipos AIO, equipos GAMER, impresoras para oficina, 
					impresoras térmicas para punto de venta, monitores, mouse, teclados, cargadores, UPS, estabilizadores, 
					router, switch, cámaras de seguridad, según las características y necesidades exigidas.</p>`;
				break;
				case 7:
					titulo.innerHTML = "Consultoría en <span class='theme_color'>TI</span><br>";
					descripcion.innerHTML =`<p>Brindamos asesoría en innovación de herramientas y recursos tecnológicos como, 
					sistemas de control de inventarios, sistemas contables, control de flotas, hardware para automatizaciones 
					del negocio.</p>`;
				break;
			}
			setTimeout(() => {
				titulo.style.opacity=1;
				descripcion.style.opacity = 1;
			}, 10);
		}, 400);
	}, 10);
}

function mostrarLocalMapa(valor){
	let mapa = document.querySelector("#mapa-locales");

	if(valor == 1){
		mapa.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.5525777121547!2d-76.71692755120276!3d-11.936194318367427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e5f58bed000f%3A0xf217dfedeb919194!2sC.%20los%20Precursores%2C%20Lurigancho-Chosica%2015468!5e0!3m2!1ses-419!2spe!4v1709239545082!5m2!1ses-419!2spe");
	}else{
		mapa.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.3276356963357!2d-75.19765563048907!3d-12.090880187904428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e97030d0d43b3%3A0x15a65c8004d91280!2sLa%20Union%20Azapampa%20814%2C%20Huancayo%2012003!5e0!3m2!1ses!2spe!4v1709153145362!5m2!1ses!2spe");
	}
}

function ubicarControlesSliderCasos(){
	if(document.querySelector("#slider-sistemas")){
		let btnAnterior = document.querySelector("#btn-slider-anterior");
		let btnPosterior = document.querySelector("#btn-slider-posterior");
		let slider = document.querySelector("#slider-sistemas");
	
		let medidas = slider.getBoundingClientRect();
		btnAnterior.style.left = (medidas.left - 90) + "px";
		btnPosterior.style.left = (medidas.right + 30) + "px";
	}
}

window.addEventListener("resize", ()=>{
	ubicarControlesSliderCasos();
});
// SLIDER SISTEMAS
function activarControlesNavegacion(){
let btnAnterior= document.querySelector("#btn-slider-anterior");
let btnPosterior= document.querySelector("#btn-slider-posterior");
}

function enviarCorreo(){
	// Obtener el input por su id
var nombres = document.getElementById('nombres');
var apellidos = document.getElementById('apellidos');
var telefono = document.getElementById('telefono');
var empresa = document.getElementById('empresa');
var ruc = document.getElementById('ruc');
var ciudad = document.getElementById('ciudad');
var correo = document.getElementById('correo');
var mensaje = document.getElementById('mensaje');

console.log(nombres.value)
console.log(apellidos.value)
console.log(telefono.value)
console.log(empresa.value)
console.log(ruc.value)
console.log(ciudad.value)
console.log(correo.value)
console.log(mensaje.value)
// Cambiar el valor del input
nombres.value = '';
apellidos.value = '';
telefono.value = '';
empresa.value = '';
ruc.value = '';
ciudad.value = '';
correo.value = '';
mensaje.value = '';

}