"use client";

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Model } from "./model/mac-draco";
import { Container } from "../container";
import { useSpring } from "@react-spring/core";

export const ThreeDSection = () => {
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });
  return (
    <div>
      <Container className="py-20 max-w-8xl mx-auto  relative z-40 h-[550px] md:h-[900px]">
        <Canvas camera={{ position: [-5, 0, -15], fov: 55 }} dpr={[1, 2]}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group
              rotation={[0, Math.PI, 0]}
              position={[0, 1, 0]}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
            >
              <Model hinge={props.open.to([0, 1], [1.575, -0.425])} />
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
