"use client";

import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, Shape, DoubleSide } from "three";

export default function PhoneModel() {
  // Carrega a textura. Certifica-te que o caminho /assets/app-de-frente.png existe na pasta public.
  const texture = useLoader(TextureLoader, "/assets/app-de-frente.png");

  // Função para criar formas arredondadas (evita o erro do RoundedBox)
  const createRoundedShape = (w: number, h: number, r: number) => {
    const s = new Shape();
    s.moveTo(-w / 2 + r, -h / 2);
    s.lineTo(w / 2 - r, -h / 2);
    s.absarc(w / 2 - r, -h / 2 + r, r, Math.PI * 1.5, 0, false);
    s.lineTo(w / 2, h / 2 - r);
    s.absarc(w / 2 - r, h / 2 - r, r, 0, Math.PI * 0.5, false);
    s.lineTo(-w / 2 + r, h / 2);
    s.absarc(-w / 2 + r, h / 2 - r, r, Math.PI * 0.5, Math.PI, false);
    s.lineTo(-w / 2, -h / 2 + r);
    s.absarc(-w / 2 + r, -h / 2 + r, r, Math.PI, Math.PI * 1.5, false);
    return s;
  };

  // Moldura e Ecrã
  const frameShape = useMemo(() => createRoundedShape(3.2, 6.5, 0.4), []);
  const screenShape = useMemo(() => createRoundedShape(2.9, 6.2, 0.3), []);

  return (
    <group rotation={[0, 0, 0]}>
      {/* Moldura do Telemóvel */}
      <mesh>
        <extrudeGeometry args={[frameShape, { depth: 0.4, bevelEnabled: false }]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Margem Preta (Bezel) */}
      <mesh position={[0, 0, 0.205]}>
        <shapeGeometry args={[screenShape]} />
        <meshBasicMaterial color="black" />
      </mesh>

      {/* A Imagem do Ecrã - Agora com cantos arredondados e UVs corretos */}
      <mesh position={[0, 0, 0.21]}>
        <planeGeometry args={[2.9, 6.2]} />
        <meshBasicMaterial 
          map={texture} 
          transparent={true} 
          side={DoubleSide} 
          opacity={1}
        />
      </mesh>

      {/* Botões Laterais Simplificados (Sem erros de casing) */}
      <mesh position={[1.61, 1.5, 0.1]}>
        <boxGeometry args={[0.05, 0.8, 0.1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      <mesh position={[-1.61, 1.0, 0.1]}>
        <boxGeometry args={[0.05, 0.5, 0.1]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}