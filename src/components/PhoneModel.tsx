"use client";

import React from "react";
import { useTexture, RoundedBox } from "@react-three/drei";
import { DoubleSide } from "three";

export default function PhoneModel() {
  // Using app-screen.png which seems to be the correct screen asset based on file size/name
  const texture = useTexture("/assets/app-de-frente.png");

  return (
    <group rotation={[0, 0, 0]}>
      {/* Phone Body - Dark Grey */}
      <RoundedBox args={[3.2, 6.5, 0.4]} radius={0.3} smoothness={4}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Screen Mesh - Slightly in front */}
      <mesh position={[0, 0, 0.22]}>
        <planeGeometry args={[2.9, 6.2]} />
        <meshBasicMaterial 
          map={texture}
          toneMapped={false}
          side={DoubleSide}
          color="white"
        />
      </mesh>

      {/* Side Buttons */}
      <mesh position={[1.6, 1.5, 0]}>
        <boxGeometry args={[0.1, 0.6, 0.1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      <mesh position={[-1.6, 1.0, 0]}>
        <boxGeometry args={[0.1, 0.4, 0.1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}