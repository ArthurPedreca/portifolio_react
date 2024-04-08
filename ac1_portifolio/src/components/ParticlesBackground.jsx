import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import './particles.css'

const Background = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "background": {
                  "color": {
                    "value": "#161616"
                  }
                },
                "fpsLimit": 120,
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onClick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "onHover": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "resize": true
                  },
                  "modes": {
                    "push": {
                      "quantity": 4
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "grab": {
                      "distance": 400,
                      "links": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    }
                  }
                },
                "particles": {
                  "color": {
                    "value": "#ffffff"
                  },
                  "links": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "direction": "bottom-right",
                    "enable": true,
                    "outModes": {
                      "default": "out"
                    },
                    "speed": 6
                  },
                  "number": {
                    "density": {
                      "enable": true,
                      "area": 800
                    },
                    "value": 80
                  },
                  "opacity": {
                    "value": 0.5
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
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  }
                },
                "detectRetina": true
              }}
              
        />
    );
};

export default Background