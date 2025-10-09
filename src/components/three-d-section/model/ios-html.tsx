import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { forwardRef, useMemo } from 'react';
import * as THREE from 'three';

/** iOS-safe Html that projects an anchor object's world position using the canvas' real CSS rect */
export const IOSHtml = forwardRef(function IOSHtml(
  { anchor, children, ...props }: { anchor: THREE.Object3D; children: React.ReactNode } & any,
  _ref
) {
  const { gl, camera } = useThree();
  const v = useMemo(() => new THREE.Vector3(), []);

  const calc = (el: HTMLElement) => {
    // 1) get anchor's world position (this includes your local offset)
    anchor.getWorldPosition(v).project(camera as THREE.Camera);

    // 2) use the canvas' real CSS rect (iOS visual-viewport safe)
    const rect = gl.domElement.getBoundingClientRect();

    // 3) NDC (-1..1) -> CSS pixels
    const x = (v.x + 1) * 0.5 * rect.width + rect.left;
    const y = (1 - (v.y + 1) * 0.5) * rect.height + rect.top;

    return [x, y] as [number, number];
  };

  return (
    <Html
      calculatePosition={isIOS() ? calc : undefined}
      className="content"
      rotation-x={-Math.PI / 2}
      transform
      occlude
      center
      {...props}
    >
      {children}
    </Html>
  );
});

function isIOS() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && 'ontouchend' in document);
}
