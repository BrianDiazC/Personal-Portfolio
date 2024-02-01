import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Experience } from "../../components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import CanvasLoader from "../../components/Loader";
import { UI } from "../../components/UI";

export const Intro = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: [0, 0, 8], fov: 70 }}
        >
          <fog attach="fog" args={["#050816", 10, 30]} />
          <color attach="background" args={["#050816"]} />
          <Suspense fallback={<CanvasLoader />}>
            <Experience />
            <EffectComposer>
              <Bloom mipmapBlur intensity={1} />
            </EffectComposer>
          </Suspense>
          <Preload all />
        </Canvas>
        <UI />
      </div>
    </>
  );
};
