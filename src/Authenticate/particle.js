import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // Ensure 'tsparticles-slim' is installed.

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine); // Load the slim version of tsparticles for a smaller bundle size.
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div
      style={{
        position: "fixed",  // Ensures the particles stay in the background
        width: "100%",      // Full width of the screen
        height: "100vh",    // Full height of the screen
        top: 0,             // Align the particles to the top of the screen
        left: 0,            // Align the particles to the left of the screen
        zIndex: -1,         // Keep particles behind other content
        background: "linear-gradient(to right, #0d47a1, #27ae60)", // Gradient background
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "", // No need for a solid background since we're using a gradient.
            },
          },
          fpsLimit: 120, // Limit to 120 frames per second for performance.
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push", // Add particles on click.
              },
              onHover: {
                enable: true,
                mode: "repulse", // Repel particles when hovered.
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4, // Number of particles added on click.
              },
              repulse: {
                distance: 200, // Distance for repulse effect on hover.
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff", // Set particle color to white.
            },
            links: {
              color: "#ffffff", // Link color between particles.
              distance: 150,    // Max distance for links between particles.
              enable: true,     // Enable linking particles.
              opacity: 0.5,     // Link opacity.
              width: 1,         // Link width.
            },
            move: {
              direction: "none", // Particles move randomly.
              enable: true,      // Enable particle movement.
              outModes: {
                default: "bounce", // Particles bounce off edges.
              },
              random: false,
              speed: 1, // Particle speed.
              straight: false,
            },
            number: {
              density: {
                enable: true, // Enable particle density control.
                area: 800,    // Area to control particle density.
              },
              value: 80, // Number of particles.
            },
            opacity: {
              value: 0.5, // Particle opacity.
            },
            shape: {
              type: "circle", // Particle shape.
            },
            size: {
              value: { min: 1, max: 5 }, // Particle size range.
            },
          },
          detectRetina: true, // Adjust particle rendering for retina displays.
        }}
      />
    </div>
  );
};

export default Particle;
