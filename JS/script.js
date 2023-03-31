//////////////////////// 1) index.HTML ////////////////////////////////////////
if (window.location.pathname.endsWith('/')) {
    //////////////////////// Config particlesJS ///////////////////////////////////
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
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
    });
    //////////////////////// My code ////////////////////////////////////////
    var buttonBegin = document.getElementById("start");
    var welcomeMessage = document.getElementById("welcome");
    var linkToIntro = document.getElementById("intro");
    buttonBegin.addEventListener("click", function () {
        var nombre = preguntarNombre();
        if (nombre != null && nombre != "") {
            welcomeMessage.innerHTML = "¡Hola " + nombre + "!";
            welcomeMessage.classList.add("fade-in-animation");
            buttonBegin.disabled = true;
            linkToIntro.style.display = "flex";
            linkToIntro.classList.add("fade-in-animation");
        } else {
            window.alert("Ingresa un nombre válido");
        }
    });

    function preguntarNombre() {
        return prompt("Ingresa tu nombre");
    }
}

//////////////////////// 2) intro.HTML ////////////////////////////////////////
if (window.location.pathname.endsWith('intro.html')) {
    var button1 = document.querySelector('.next-section');
    var section2 = document.getElementById("section2ID");
    button1.addEventListener('click', function () {
        window.fullpage_api.moveSectionDown();
        var button3 = document.getElementById("boton3");
        button3.innerHTML = "<button type='button' id='cambiaDesc' class='prev-section'>Ver más</button>";
        button3.style.animationDelay = "1s";
        button3.classList.add("fade-in-animation");
        button3.addEventListener('click', function () {
            window.fullpage_api.moveSectionUp();
            var text = document.getElementById("text");
            var image = document.getElementById("image");
            text.innerHTML = "Si hay algo que ha conquistado al mundo entero en términos de cultura popular, sin duda es el anime y manga japonés. Con sus historias emocionantes, personajes carismáticos y estilos únicos, es fácil enamorarse de estas formas de arte. Desde el clásico Studio Ghibli hasta las últimas tendencias como Demon Slayer y Jujutsu Kaisen, el anime y manga están presentes en todas partes, desde la televisión hasta los videojuegos. <br><br>Pero no solo eso, la cultura popular japonesa también abarca el cosplay, la música, los festivales, la gastronomía y mucho más. Es un universo completo que ha ganado miles de seguidores en todo el mundo, y que sigue sorprendiendo con su creatividad y originalidad.";
            image.src = "../Media/img/miku.gif";
            button1.style.display = "none";
            section2.style.display = "none";
        });
    });

}

