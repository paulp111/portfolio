"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const FooterWithShapes: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const initialPositions = useRef<{ x: number; y: number; z: number }[]>([]);

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

    // Define the shapes with increased sizes
    const shapes = [
      {
        geometry: new THREE.PlaneGeometry(10, 7), // Increased size
        initialPosition: { x: -15, y: 4, z: 0 }, // Positioned left
        imagePath: "/footer-shape1.png",
        movementBound: [-15, -10], // Left shape boundary
      },
      {
        geometry: new THREE.PlaneGeometry(20, 25), // Increased size
        initialPosition: { x: 0, y: 4, z: 0 }, // Centered
        imagePath: "/footer-shape2.png",
        movementBound: [-5, 5], // Center shape boundary
      },
      {
        geometry: new THREE.PlaneGeometry(10, 18), // Increased size
        initialPosition: { x: 15, y: 4, z: 0 }, // Positioned right
        imagePath: "/footer-shape3.png",
        movementBound: [10, 15], // Right shape boundary
      },
    ];

    const shapeMeshes = shapes.map((shape) => {
      const texture = new THREE.TextureLoader().load(shape.imagePath);
      const material = new THREE.MeshBasicMaterial({
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

    camera.position.z = 40; // Adjust camera distance for larger shapes

    initialPositions.current = shapeMeshes.map((mesh) => ({
      x: mesh.position.x,
      y: mesh.position.y,
      z: mesh.position.z,
    }));

    let targetPositions = initialPositions.current.map((pos) => ({ ...pos }));

    const animate = () => {
      requestAnimationFrame(animate);

      shapeMeshes.forEach((mesh, i) => {
        // Move towards target position
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
          initialPositions.current[i].x + mouseX * 0.05 * (bound[1] - bound[0]);
        targetPositions[i].y =
          initialPositions.current[i].y + mouseY * 0.05 * (bound[1] - bound[0]);

        // Clamp positions to within the boundary
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
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  );
};

export default FooterWithShapes;
