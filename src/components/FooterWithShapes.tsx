// FooterWithShapes.tsx
"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const FooterWithShapes: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    const shapes = [
      {
        geometry: new THREE.PlaneGeometry(150, 135),
        initialPosition: { x: -250, y: 30, z: 0 }, // Adjusted left triangle higher
        imagePath: "/footer-shape1.png",
        movementBound: [-250, -240], // Prevent moving left beyond -250
      },
      {
        geometry: new THREE.PlaneGeometry(170, 200), // Slimmer width for middle triangle
        initialPosition: { x: 0, y: -50, z: 0 }, // Center and moved more down
        imagePath: "/footer-shape2.png",
        movementBound: [-10, 10], // Movement bounds for center
      },
      {
        geometry: new THREE.PlaneGeometry(170, 150), // Same size as before for right triangle
        initialPosition: { x: 280, y: -30, z: 0 }, // Moved further right and more down
        imagePath: "/footer-shape3.png",
        movementBound: [270, 280], // Prevent moving over the right edge
      },
    ];

    const shapeMeshes = shapes.map((shape) => {
      const texture = new THREE.TextureLoader().load(shape.imagePath);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#2e83fd"),
        map: texture,
        transparent: true,
      });
      const mesh = new THREE.Mesh(shape.geometry, material);
      mesh.position.set(
        shape.initialPosition.x,
        shape.initialPosition.y,
        shape.initialPosition.z
      );
      scene.add(mesh);
      return mesh;
    });

    camera.position.z = 150; // Adjust camera distance for visibility

    let targetPositions = shapes.map((shape) => ({
      x: shape.initialPosition.x,
      y: shape.initialPosition.y,
      z: shape.initialPosition.z,
    }));

    const animate = () => {
      requestAnimationFrame(animate);
      shapeMeshes.forEach((mesh, i) => {
        // Smooth movement towards target positions
        mesh.position.x += (targetPositions[i].x - mesh.position.x) * 0.05;
        mesh.position.y += (targetPositions[i].y - mesh.position.y) * 0.05;
      });
      renderer.render(scene, camera);
    };

    const onMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      shapeMeshes.forEach((mesh, i) => {
        const bound = shapes[i].movementBound;
        targetPositions[i].x =
          shapes[i].initialPosition.x + mouseX * (bound[1] - bound[0]);
        targetPositions[i].y =
          shapes[i].initialPosition.y + mouseY * (bound[1] - bound[0]);

        // Clamp positions within boundaries
        targetPositions[i].x = Math.min(
          Math.max(targetPositions[i].x, bound[0]),
          bound[1]
        );
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default FooterWithShapes;
