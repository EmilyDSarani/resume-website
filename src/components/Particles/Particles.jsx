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
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.4,
              size: 20,
            },
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#0d47a5",
          },
          links: {
            color: "#0d47a5",
            distance: 150,
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
            outMode: "bounce",
            random: false,
            speed: 2.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    </div>
  );
}

