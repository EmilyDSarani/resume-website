import React from 'react'
import Particles from "react-tsparticles";
import styles from './Particles.css'

export default function ParticlesMagic() {
  const particlesInit = (main) => {
    console.log(main);
    //can add custom shapes here
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
    <Particles
    className={styles.particles}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 50,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            // onHover: {
            //   enable: true,
            //   mode: "repulse",
            // },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 500,
              duration: 10,
              opacity: 0.2,
              size: 100,
            },
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 100,
              duration: 0,
            },
          },
        },
        particles: {
          color: {
            value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
          },
          links: {
            color: "random",
            distance: 50,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bubble",
            random: true,
            speed: 1.0,
            straight: true,
          },
          number: {
            density: {
              enable: false,
              area: 600,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "polygon",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: false,
      }}
    />
    </div>
  );
}

