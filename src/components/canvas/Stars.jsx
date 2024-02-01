import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from 'three'

// import { Stars } from "@react-three/drei";

const Stars = (props) => {
  // const ref = useRef();
  // const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  // useFrame((state, delta) => {
  //   ref.current.rotation.x -= delta / 10;
  //   ref.current.rotation.y -= delta / 15;
  // });

  // return (
  //   <group rotation={[0, 0, Math.PI / 4]}>
  //     <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
  //       <PointMaterial
  //         transparent
  //         color='#f272c8'
  //         size={0.002}
  //         sizeAttenuation={true}
  //         depthWrite={false}
  //       />
  //     </Points>
  //   </group>
  // );



  const particles = useRef();
  useFrame((state, delta)=>{

      particles.current.rotation.y -=delta / 10;
      particles.current.rotation.x -=delta / 15;

  })

  const texture = useLoader(THREE.TextureLoader, "./img/stars.png");

  const verticesAmount = 10000;
  const positionArray = new Float32Array(verticesAmount * 3);
  for (let i = 0; i < verticesAmount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 10.0;
      
  }


return (
  <points ref={particles}>
      <bufferGeometry>
          <bufferAttribute 
          attach="attributes-position" 
          count={positionArray.length/3} 
          itemSize={3}
          array={positionArray}
          sizeAttenuation={true}
          />
      </bufferGeometry>
      <pointsMaterial size={0.02} alphaMap={texture}  transparent depthTest={false}/>
  </points>
)





};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          {/* <Stars /> */}
          <Stars/>
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
