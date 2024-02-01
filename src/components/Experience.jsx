import { useEffect, useRef } from "react";
import {
  CameraControls,
  Environment,
  MeshReflectorMaterial,
  RenderTexture,
  Text,
  useFont,
} from "@react-three/drei";
import { Stars, Float, Cloud } from "@react-three/drei";
import { Computer } from "./Computer";
import { degToRad } from "three/src/math/MathUtils";
import * as THREE from "three";
import { useAtom } from "jotai";
import { currentPageAtom } from "./UI";


const bloomColor = new THREE.Color("#fff");
bloomColor.multiplyScalar(1.5);

export const Experience = () => {
  const cameraControlRef = useRef();
  const meshFitCameraHome = useRef();
 const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const intro = async () => {
    await cameraControlRef.current.dolly(-40);
     cameraControlRef.current.smoothTime = 1.8;
    setTimeout(() => {
      setCurrentPage("home");
    }, 1200);
    fitCamera();
  };



  const fitCamera = async () => {
    cameraControlRef.current.fitToBox(meshFitCameraHome.current, true);
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, []);

  const animateTransition = async () => {
    if (currentPage === "portfolio") {
      await cameraControlRef.current.dolly(0, true);
       cameraControlRef.current.smoothTime = 1.8;
      await cameraControlRef.current.dolly(-40, true);
    }
    return;
  };

  useEffect(() => {
    animateTransition();
  }, [currentPage]);

  return (
    <>
      <Stars />
      <Cloud
        opacity={0.5}
        speed={0.2}
        width={10}
        depth={0.5}
        segments={30}
        fade={0.5}
        depthTest={false}
        position-z={27}
      />
      <Cloud
        opacity={0.5}
        speed={0.2}
        width={10}
        depth={5.5}
        segments={30}
        fade={0.5}
        depthTest={false}
        position-z={10}
        position-y={15}
      />
      <Cloud
        opacity={0.6}
        speed={0.2}
        width={10}
        depth={2.5}
        segments={49}
        depthTest={false}
        position-y={14}
        position-z={-40}
      />

      {/* <Sky/> */}
      <CameraControls ref={cameraControlRef} />
      <mesh ref={meshFitCameraHome} position-z={1.5}>
        <boxGeometry args={[11.8, 2, 2]} />
        <meshBasicMaterial color="orange" transparent visible={false} />
      </mesh>
      <Text
        font="fonts/Poppins-Black.ttf"
        position={[-3, -0.5, 1]}
        lineHeight={0.8}
        textAlign="center"
        rotation-y={degToRad(30)}
        anchorY={"bottom"}
        scale-y={1.4}
      >
        WELCOME TO {"\n"} MY POTFOLIO
        <meshBasicMaterial
          color={bloomColor}
          side={THREE.DoubleSide}
          toneMapped={false}
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#fff"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={3.5}>
              {/* <Computer
            scale={2}
            rotation-y={-degToRad(60)}
            rotation-x={degToRad(40)}
           position-y={-0.5}
           position-z={2}
            /> */}
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
      <group rotation-y={degToRad(-95)} position-x={4.4} position-y={-0.5}>
        <Computer scale={0.5} />
      </group>
      <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="sunset" />
    </>
  );
};

useFont.preload("./fonts/Poppins-Black.ttf");
