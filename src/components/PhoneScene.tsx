"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Stars } from "@react-three/drei";
import { Suspense } from "react";
import PhoneModel from "./PhoneModel";

export default function PhoneScene() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <PhoneModel />
          </Float>
          <Environment preset="city" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Suspense>
        
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </div>
  );
}
