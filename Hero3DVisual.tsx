import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Minimal n8n Logo Component in #BDF208
const N8nLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="32" height="32" rx="8" fill="#17151B" />
    {/* Connected n8n node circles */}
    <circle cx="9" cy="18" r="2.8" fill="#BDF208" />
    <circle cx="18" cy="11" r="2.8" fill="#BDF208" />
    <circle cx="18" cy="25" r="2.8" fill="#BDF208" />
    <circle cx="27" cy="18" r="2.8" fill="#BDF208" />
    {/* Connection lines */}
    <path d="M11.8 18h3.4M18 13.8v8.4M20.8 12.5l3.5 3.5M20.8 23.5l3.5-3.5" stroke="#BDF208" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// Minimal WhatsApp Cloud API Logo Component in #BDF208
const WhatsAppLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="32" height="32" rx="8" fill="#17151B" />
    <path
      d="M18 9C13.03 9 9 13.03 9 18c0 1.78.52 3.45 1.42 4.85L9.5 26.5l3.85-.92A8.95 8.95 0 0018 27c4.97 0 9-4.03 9-9s-4.03-9-9-9zm4.25 12.51c-.18.51-1.04.95-1.44.98-.39.04-.88.05-1.42-.12-.33-.11-.77-.25-1.31-.49-2.32-1.01-3.84-3.37-3.95-3.52-.12-.15-.95-1.26-.95-2.4s.6-1.71.91-2.03c.14-.15.33-.22.52-.22.06 0 .13.01.19.01.18 0 .34-.01.49.35.18.42.6 1.49.66 1.59.05.11.09.24.02.39-.07.14-.11.23-.22.36-.11.13-.23.28-.32.38-.11.11-.23.23-.1.45.13.22.56.92 1.21 1.49.83.74 1.53.96 1.75 1.07.22.11.34.09.47-.05.13-.14.54-.63.68-.85.14-.22.29-.18.49-.11.2.07 1.24.59 1.46.69.22.11.36.16.41.25.05.09.05.53-.13 1.04z"
      fill="#BDF208"
    />
  </svg>
);

// Minimal AI Node Component in #BDF208
const AiNodeLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="32" height="32" rx="8" fill="#17151B" />
    <path d="M18 9l2 5.5L25.5 16.5l-5.5 2-2 5.5-2-5.5-5.5-2 5.5-2L18 9z" fill="#BDF208" />
    <circle cx="12" cy="24" r="1.5" fill="#BDF208" />
    <circle cx="24" cy="12" r="1.5" fill="#BDF208" />
  </svg>
);

export const Hero3DVisual: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Group for entire assembly
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core: Icosahedron Wireframe
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x17151B,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Inner Solid Glowing Sphere with #BDF208 Accent
    const innerSphereGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const innerSphereMat = new THREE.MeshStandardMaterial({
      color: 0x17151B,
      emissive: 0xBDF208,
      emissiveIntensity: 0.25,
      roughness: 0.2,
      metalness: 0.8,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    mainGroup.add(innerSphere);

    // 2. Revolving Glass Rings with #BDF208 Accent
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.035, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xBDF208,
      transparent: true,
      opacity: 0.8,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x17151B,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 3. Orbiting Workflow Nodes (Small spheres with lime accents)
    const nodeCount = 5;
    const nodes: THREE.Mesh[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.14, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xBDF208 });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      mainGroup.add(node);
      nodes.push(node);
    }

    // 4. Particle Field
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xBDF208,
      size: 0.045,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xBDF208, 2.5, 20);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((event.clientY - rect.top) / height - 0.5) * 2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX * 0.4 - targetX) * 0.05;
      targetY += (mouseY * 0.4 - targetY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.25 + targetX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 - targetY;

      coreMesh.rotation.y = -elapsedTime * 0.35;
      coreMesh.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.x = -elapsedTime * 0.3;

      // Orbiting nodes position update
      nodes.forEach((node, i) => {
        const angle = elapsedTime * 0.8 + (i * Math.PI * 2) / nodeCount;
        const radius = 2.4;
        node.position.x = Math.cos(angle) * radius;
        node.position.y = Math.sin(angle) * (radius * 0.4);
        node.position.z = Math.sin(angle) * radius;
      });

      particleSystem.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      innerSphereGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      nodeGeo.dispose();
      particleGeo.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] flex items-center justify-center">
      {/* Subtle radial lime ambient background glow */}
      <div className="absolute inset-0 bg-radial-at-c from-[#BDF208]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* 1. Floating n8n Logo Badge in #BDF208 (Top-Left) */}
      <div className="absolute top-6 left-2 sm:left-4 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E7E3] text-xs font-extrabold text-[#17151B] shadow-elevated flex items-center gap-2.5 animate-float hover:scale-105 transition-transform duration-300">
        <N8nLogo className="w-6 h-6 shrink-0" />
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-bold text-[#17151B] leading-none">n8n Workflow</span>
          <span className="text-[9px] font-mono text-[#68636D] flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BDF208]" />
            <span>Active Node</span>
          </span>
        </div>
      </div>

      {/* 2. Floating WhatsApp Meta API Badge in #BDF208 (Bottom-Right) */}
      <div className="absolute bottom-8 right-2 sm:right-4 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E7E3] text-xs font-extrabold text-[#17151B] shadow-elevated flex items-center gap-2.5 animate-float [animation-delay:2s] hover:scale-105 transition-transform duration-300">
        <WhatsAppLogo className="w-6 h-6 shrink-0" />
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-bold text-[#17151B] leading-none">WhatsApp API</span>
          <span className="text-[9px] font-mono text-[#68636D] flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BDF208]" />
            <span>24/7 Response</span>
          </span>
        </div>
      </div>

      {/* 3. Floating AI Logic Badge in #BDF208 (Top-Right / Accent) */}
      <div className="hidden sm:flex absolute top-12 right-4 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E7E3] text-xs font-extrabold text-[#17151B] shadow-elevated items-center gap-2 animate-float [animation-delay:3.5s] hover:scale-105 transition-transform duration-300">
        <AiNodeLogo className="w-5 h-5 shrink-0" />
        <span className="text-[10px] font-bold text-[#17151B]">AI Automation</span>
      </div>
    </div>
  );
};
