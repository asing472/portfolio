import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, onHover, onLeave }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef(); // Reference to the mesh

  // Add floating and rotation effect
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime(); // Get the time elapsed since start
    if (meshRef.current) {
      // Float effect
      meshRef.current.position.y = isMobile
        ? Math.sin(elapsedTime * 1.5) * 0.1
        : Math.sin(elapsedTime * 1.5) * 0.1;

      // Subtle rotation effect
      meshRef.current.rotation.y = Math.sin(elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={onHover} // Mouse hover event
      onPointerOut={onLeave}  // Mouse leave event
    >
      <hemisphereLight intensity={1} groundColor="white" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.65}
        position={isMobile ? [0, -3.9, -1.15] : [0, -3.25, -1.2]}
        rotation={[-0.00, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Show "Move Me" text when hovering over the 3D object
  const handlePointerOver = () => {
    setCursorText("spin me around!");
  };

  const handlePointerOut = () => {
    setCursorText("");
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ height: "100vh", position: "relative" }}
    >
      <Canvas
        frameloop="always" // Continuous animation
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers
            isMobile={isMobile}
            onHover={handlePointerOver}
            onLeave={handlePointerOut}
          />
        </Suspense>
        <Preload all />
      </Canvas>

      {/* Display "Move Me" text near the cursor */}
      {cursorText && (
        <div
          style={{
            position: "absolute",
            top: cursorPosition.y + 20,
            left: cursorPosition.x + 20,
            color: "yellow",
            fontSize: "16px",
            fontFamily: "monospace",
            pointerEvents: "none",
            transition: "top 0.1s, left 0.1s",
            cursor: "pointer"
          }}
        >
          {cursorText}
        </div>
      )}
    </div>
  );
};

export default ComputersCanvas;