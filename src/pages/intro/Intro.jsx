import { Canvas } from "@react-three/fiber";
import { Experience } from "../../components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import { LoaderCanvas } from "../../components/Loader/LoaderCanvas";
import { UI } from "../../components/UI";

export const Intro = () => {
  return (
    <>
        <div className="h-screen w-screen">
      <Suspense fallback={<LoaderCanvas />}>

        <Canvas shadows camera={{ position: [0, 0, 8], fov: 70 }}>
          <fog attach="fog" args={["#171720", 10, 30]} />
          <color attach="background" args={["#171720"]} />

          <Experience />

          <EffectComposer>
            <Bloom mipmapBlur intensity={1} />
          </EffectComposer>
        </Canvas>
        <UI />
      </Suspense>
      </div>
    </>
  );
};
