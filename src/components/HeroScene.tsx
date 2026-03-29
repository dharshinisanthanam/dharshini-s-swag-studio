import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({ position, color, speed = 1, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  size?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={size}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const Particles = ({ count = 200 }: { count?: number }) => {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#f97316" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#f97316" />
        <FloatingShape position={[-3, 1, -2]} color="#f97316" speed={0.8} size={1.2} />
        <FloatingShape position={[3, -1, -1]} color="#fb923c" speed={1.2} size={0.8} />
        <FloatingShape position={[0, 2, -3]} color="#ea580c" speed={0.6} size={1.5} />
        <FloatingShape position={[-2, -2, -2]} color="#f97316" speed={1} size={0.6} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default HeroScene;
