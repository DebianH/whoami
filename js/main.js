const grid = new Muuri('.grid', {
	layout: {
			rounding: false
		}
});
window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');
	//Agregamos listener para filtrar por categoria
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach( (elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');
			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'all' ? grid.filter('[data-categoria]') :	grid.filter(`[data-categoria="${categoria}"]`);
		});
	});
	//Agregamos listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});
	// Agregamos listener para las imagenes
		const overlay = document.getElementById('overlay');
		document.querySelectorAll('.grid .item img').forEach((elemento) => {
			elemento.addEventListener('click', () => {
				const ruta = elemento.getAttribute('src');
				const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
				overlay.classList.add('activo');
				document.querySelector('#overlay img').src = ruta;
				document.querySelector('#overlay .descripcion').innerHTML = descripcion;
			});
		});
		// Eventlistener del boton de cerrar
		document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
			overlay.classList.remove('activo');
		});
		// Eventlistener del overlay cerrar desde bordes
		overlay.addEventListener('click', (evento) => {
			evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
		});
});
particlesJS(
	{
	  "particles": {
	    "number": {
	      "value": 90,
	      "density": {
	        "enable": true,
	        "value_area": 800
	      }
	    },
	    "color": {
	      "value": "#fff"
	    },
	    "shape": {
	      "type": "circle",
	      "stroke": {
	        "width": 0,
	        "color": "#fff"
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
	      "value": 4,
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
	      "color": "#fff",
	      "opacity": 0.4,
	      "width": 2
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
	        "mode": "repulse"
	      },
	      "onclick": {
	        "enable": true,
	        "mode": "push"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
	        "distance": 400,
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
	}
);