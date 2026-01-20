"use client";

import React, { useMemo } from "react";
import { useTexture, RoundedBox } from "@react-three/drei";
import { Shape, Path, DoubleSide } from "three";

export default function PhoneModel() {
  const texture = useTexture("/assets/app-de-frente.png");

  // Create the phone shapes
  const { solidShape, hollowShape } = useMemo(() => {
    const width = 3.2;
    const height = 6.5;
    const radius = 0.4;
    
    // Base Shape (Outline)
    const shape = new Shape();
    shape.moveTo(-width / 2 + radius, -height / 2);
    shape.lineTo(width / 2 - radius, -height / 2);
    shape.absarc(width / 2 - radius, -height / 2 + radius, radius, Math.PI * 1.5, 0, false);
    shape.lineTo(width / 2, height / 2 - radius);
    shape.absarc(width / 2 - radius, height / 2 - radius, radius, 0, Math.PI * 0.5, false);
    shape.lineTo(-width / 2 + radius, height / 2);
    shape.absarc(-width / 2 + radius, height / 2 - radius, radius, Math.PI * 0.5, Math.PI, false);
    shape.lineTo(-width / 2, -height / 2 + radius);
    shape.absarc(-width / 2 + radius, -height / 2 + radius, radius, Math.PI, Math.PI * 1.5, false);

    // Clone for the hollow version
    const shapeWithHole = new Shape(shape.getPoints());

    // Inner hole (Screen Bezel)
    const hw = 2.95; 
    const hh = 6.25;
    const hr = 0.3;

    const hole = new Path();
    hole.moveTo(-hw / 2 + hr, -hh / 2);
    hole.lineTo(hw / 2 - hr, -hh / 2);
    hole.absarc(hw / 2 - hr, -hh / 2 + hr, hr, Math.PI * 1.5, 0, false);
    hole.lineTo(hw / 2, hh / 2 - hr);
    hole.absarc(hw / 2 - hr, hh / 2 - hr, hr, 0, Math.PI * 0.5, false);
    hole.lineTo(-hw / 2 + hr, hh / 2);
    hole.absarc(-hw / 2 + hr, hh / 2 - hr, hr, Math.PI * 0.5, Math.PI, false);
    hole.lineTo(-hw / 2, -hh / 2 + hr);
    hole.absarc(-hw / 2 + hr, -hh / 2 + hr, hr, Math.PI, Math.PI * 1.5, false);

    shapeWithHole.holes.push(hole);

    return { solidShape: shape, hollowShape: shapeWithHole };
  }, []);

  return (
    <group rotation={[0, 0, 0]}>
      {/* Front Body (Frame) */}
      <mesh position={[0, 0, 0]}>
        {/* Depth 0.4 ensures solid sides */}
        <extrudeGeometry args={[hollowShape, { depth: 0.4, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04 }]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Back Plate - Same Shape, mirrored, attached to back */}
      {/* Extrude goes from Z=0 to Z=depth. To make a back, we rotate it 180 (mirror) and place at Z=0 */}
      <mesh rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
        <extrudeGeometry args={[solidShape, { depth: 0.05, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04 }]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Screen Plane - Inside the frame */}
      <mesh position={[0, 0, 0.35]}>
        <planeGeometry args={[3.0, 6.3]} /> 
        <meshBasicMaterial 
          map={texture}
          toneMapped={false}
          side={DoubleSide}
          color="white"
        />
      </mesh>



      {/* Side Buttons */}
      <mesh position={[1.65, 1.5, 0.2]}>
        <boxGeometry args={[0.1, 0.6, 0.1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      <mesh position={[-1.65, 1.0, 0.2]}>
        <boxGeometry args={[0.1, 0.4, 0.1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}