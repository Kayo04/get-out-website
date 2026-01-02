"use client";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { RoundedBox } from "@react-three/drei";

export default function PhoneModel() {
  const texture = useLoader(TextureLoader, "/assets/app-screen.png");

  return (
    <group rotation={[0, 0, 0]}>
      {/* Phone Body (Black glossy) */}
      <RoundedBox args={[3, 6, 0.3]} radius={0.3} smoothness={4}>
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Screen (Textured) */}
      <mesh position={[0, 0, 0.16]}>
        <planeGeometry args={[2.7, 5.7]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
}
