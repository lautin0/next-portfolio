"use client";

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./model/mac-draco";
import { Container } from "../container";

export const ThreeDSection = () => {
  return (
    <div>
      <Container className="py-20 max-w-8xl mx-auto  relative z-40 h-[600px] md:h-[900px]">
        <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
              <Model />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2}
            far={4.5}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </Container>
    </div>
  );
};
