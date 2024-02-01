import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, MeshReflectorMaterial, OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"
import { SpacecraftScene } from "./SpacecraftScene"

const SpaceCraft = () => {


  return (
  
    <>
     <group  >
    <ambientLight intensity={1}/>
   
     <SpacecraftScene scale={0.05} rotation-x={-Math.PI / 6.8} position-z={100} position-y={3.8}/>
   
     <Environment preset="sunset" />
     </group>
    </>

  )
}

const SpaceCraftCanvas = () => {

    return (
        <Canvas
        shadows
        frameloop="demand"
        gl={{preserveDrawingBuffer: true}}
        camera={{  position: [0, 5.5, -200], fov: 87}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={5} 
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
         
                />
              <SpaceCraft/>
            </Suspense>
        <Preload all/>
        </Canvas>
    )

}

export default SpaceCraftCanvas

