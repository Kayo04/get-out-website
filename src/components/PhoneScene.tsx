"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float} from "@react-three/drei";
import { Suspense } from "react";
import PhoneModel from "./PhoneModel";

export default function PhoneScene() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={3} castShadow />
        <pointLight position={[-10, 5, -10]} intensity={2} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5} floatingRange={[-0.2, 0.2]}>
            <PhoneModel />
          </Float>
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
