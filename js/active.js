AOS.init();
		/*-----------------------
		--> Off Canvas Menu
		-------------------------*/
		/*Variables*/
		var $offCanvasNav = $('.off-canvas-nav'),
			$offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

		/*Add Toggle Button With Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

		/*Close Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.slideUp();

		/*Category Sub Menu Toggle*/
		$offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
			var $this = $(this);
			if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
				e.preventDefault();
				if ($this.siblings('ul:visible').length) {
					$this.parent('li').removeClass('active');
					$this.siblings('ul').slideUp();
				} else {
					$this.parent('li').addClass('active');
					$this.closest('li').siblings('li').find('ul:visible').slideUp();
					$this.siblings('ul').slideDown();
				}
			}
		});

		// Off Canvas Open close
		$(".off-canvas-btn").on('click', function () {
			$(".off-canvas-wrapper").addClass('open');
		});

		$(".btn-close-off-canvas").on('click', function () {
			$(".off-canvas-wrapper").removeClass('open');
		});


$('document').ready(function(){

  //Toggle button fuctionality

  $("[class*='btn--toggle']").on('change',function(e){   
      var getTarget = $(this).attr('data-tab-target'); 
      var inpSelect = $(this).children().children('input[type="checkbox"]');

      if($(inpSelect).is(':checked')){
          if($(getTarget).hasClass('monthly')){
              $(getTarget).removeClass('monthly');
              $(getTarget).addClass('yearly');          
          }
      }else{
          if($(getTarget).hasClass('yearly')){
              $(getTarget).removeClass('yearly');
              $(getTarget).addClass('monthly');         
          }
      }    
  })
})


jQuery(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).load(function(){
    $('.preloader-wrap').fadeOut();
    $('body').removeClass('preloader-site');
});

/* ---- particles.js config ---- */
window.addEventListener('DOMContentLoaded', (event) => {
  /* ---- particles.js config ---- */
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 150,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 140,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	}, function(){alert("particle loaded")});
});
