"use client";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { RoundedBox } from "@react-three/drei";

export default function PhoneModel() {
  const texture = useLoader(TextureLoader, "/assets/app-de-frente.png");

  return (
    <group rotation={[0, 0, 0]}>
      {/* Phone Case (Frame) */}
      <RoundedBox args={[3.2, 6.5, 0.4]} radius={0.4} smoothness={8}>
         <meshStandardMaterial color="#222" metalness={0.9} roughness={0.2} />
      </RoundedBox>

      {/* Screen Black Border (Bezel) */}
      <mesh position={[0, 0, 0.21]}>
         <planeGeometry args={[3.0, 6.3]} />
         <meshBasicMaterial color="black" />
      </mesh>

      {/* Actual Screen Image */}
      <mesh position={[0, 0, 0.22]}>
        <planeGeometry args={[2.85, 6.15]} />
        <meshBasicMaterial map={texture} transparent opacity={1} />
      </mesh>

      {/* Camera Notch/Island */}
      <mesh position={[0, 2.8, 0.23]}>
        <planeGeometry args={[1.0, 0.3]} />
        <meshBasicMaterial color="black" />
      </mesh>
      
      {/* Side Buttons */}
      <RoundedBox args={[0.1, 1.0, 0.1]} radius={0.05} smoothness={2} position={[1.65, 1.5, 0]}>
         <meshStandardMaterial color="#333" metalness={0.8} />
      </RoundedBox>
       <RoundedBox args={[0.1, 0.6, 0.1]} radius={0.05} smoothness={2} position={[-1.65, 2.0, 0]}>
         <meshStandardMaterial color="#333" metalness={0.8} />
      </RoundedBox>

      {/* Back Camera Bump */}
      <RoundedBox args={[1.2, 1.4, 0.2]} radius={0.2} smoothness={4} position={[0.8, 2.2, -0.25]}>
         <meshStandardMaterial color="#111" metalness={0.6} roughness={0.4} />
      </RoundedBox>
    </group>
  );
}
