// 'use client';

// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

// const ThreeScene: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const raycaster = new THREE.Raycaster();
//     const pointer = new THREE.Vector2();

//     function onPointerMove(event: any) {
//       pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
//       pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     }

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current?.appendChild(renderer.domElement);
//     camera.position.z = 5;

//     const geometry = new THREE.BoxGeometry(4.25, 4.25, 4.25);
//     const texture = new THREE.TextureLoader().load(FaGithubSquare);
//     const material = new THREE.MeshBasicMaterial({
//       color: 0xffffff,
//       map: texture,
//     });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     // Add this function inside the useEffect hook
//     const renderScene = () => {
//       raycaster.setFromCamera(pointer, camera);

//       const intersects = raycaster.intersectObjects(scene.children);

//       for (let i = 0; i < intersects.length; i++) {
//         intersects[i].object.rotateY(1);
//       }
//       // cube.rotation.x += 0.01;
//       // cube.rotation.y += 0.01;
//       renderer.render(scene, camera);
//       addEventListener('pointermove', onPointerMove);
//       requestAnimationFrame(renderScene);
//     };

//     // Call the renderScene function to start the animation loop
//     renderScene();
//   }, []);

//   return <div ref={containerRef} />;
// };

// export default ThreeScene;
