/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Kapil Mishra (https://sketchfab.com/kapilmishra)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/spacecraft-30550fee5a0245afad66a075f87c2fd3
Title: SpaceCraft
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.007, 0, -0.004]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.117, 445.807, 0.87]} rotation={[-1.571, 0, 0.128]} scale={1150.678}>
            <mesh geometry={nodes.Circle002_central_0.geometry} material={materials.central} />
            <mesh geometry={nodes.Circle002_central_ring_0.geometry} material={materials.central_ring} />
            <mesh geometry={nodes.Circle002_window002_0.geometry} material={materials['window.002']} />
            <mesh geometry={nodes.Circle002_bottom_0.geometry} material={materials.bottom} />
            <mesh geometry={nodes.Circle002_bottom1_0.geometry} material={materials.bottom1} />
            <mesh geometry={nodes.Circle002_bottom_hole_0.geometry} material={materials.bottom_hole} />
          </group>
          <group position={[1.66, 453.09, 1.428]} rotation={[1.571, 0, -0.128]} scale={1150.678}>
            <mesh geometry={nodes.Circle005_upper_0.geometry} material={materials.upper} />
            <mesh geometry={nodes.Circle005_trial_0.geometry} material={materials.trial} />
            <mesh geometry={nodes.Circle005_central_0.geometry} material={materials.central} />
            <mesh geometry={nodes.Circle005_central_ring_0.geometry} material={materials.central_ring} />
            <mesh geometry={nodes.Circle005_window002_0.geometry} material={materials['window.002']} />
            <mesh geometry={nodes.Circle005_lightning_0.geometry} material={materials.lightning} />
          </group>
          <group position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]}>
            <mesh geometry={nodes.Cube001_machine_0.geometry} material={materials.machine} />
            <mesh geometry={nodes.Cube001_Material004_0.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Cube001_leg_area_0.geometry} material={materials.leg_area} />
            <mesh geometry={nodes.Cube001_holder_0.geometry} material={materials.holder} />
            <mesh geometry={nodes.Cube001_handle_0.geometry} material={materials.handle} />
            <mesh geometry={nodes.Cube001_slider_0.geometry} material={materials.slider} />
            <mesh geometry={nodes.Cube001_emergency_0.geometry} material={materials.emergency} />
            <mesh geometry={nodes.Cube001_cone_0.geometry} material={materials.cone} />
            <mesh geometry={nodes.Cube001_frame_0.geometry} material={materials.frame} />
            <mesh geometry={nodes.Cube001_screen1_0.geometry} material={materials.screen1} />
            <mesh geometry={nodes.Cube001_Material003_0.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Cube001_Material002_0.geometry} material={materials['Material.002']} />
          </group>
          <group position={[-165.664, 962.236, 454.295]} rotation={[-0.151, -0.299, -0.059]} scale={[16.454, 23.662, 16.454]}>
            <mesh geometry={nodes.Plane_device_0.geometry} material={materials.device} />
            <mesh geometry={nodes.Plane_interior1_0.geometry} material={materials.interior1} />
            <mesh geometry={nodes.Plane_interior3_0.geometry} material={materials.interior3} />
            <mesh geometry={nodes.Plane_interior_0.geometry} material={materials.interior} />
            <mesh geometry={nodes.Plane_screen_0.geometry} material={materials.screen} />
            <mesh geometry={nodes.Plane_key1_0.geometry} material={materials.key1} />
            <mesh geometry={nodes.Plane_key2_0.geometry} material={materials.key2} />
          </group>
          <group position={[-585.035, 0, 0]} rotation={[-Math.PI / 2, 0.553, 0]} scale={40.343}>
            <mesh geometry={nodes.Cylinder001_leg_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Cylinder001_pipe_0.geometry} material={materials.pipe} />
          </group>
          <group position={[0, 0, 585.035]} rotation={[-2.124, 0, 0]} scale={40.343}>
            <mesh geometry={nodes.Cylinder002_leg_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Cylinder002_pipe_0.geometry} material={materials.pipe} />
          </group>
          <group position={[0, 0, -588.164]} rotation={[-1.018, 0, 0]} scale={40.343}>
            <mesh geometry={nodes.Cylinder003_leg_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Cylinder003_pipe_0.geometry} material={materials.pipe} />
          </group>
          <group position={[590.166, 0, 0]} rotation={[-Math.PI / 2, -0.553, 0]} scale={40.343}>
            <mesh geometry={nodes.Cylinder004_leg_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Cylinder004_pipe_0.geometry} material={materials.pipe} />
          </group>
          <group position={[-173.593, 830.193, -41.337]} rotation={[-Math.PI / 2, 0, 0.018]} scale={91.598}>
            <mesh geometry={nodes.Cube005_table_0.geometry} material={materials.table} />
            <mesh geometry={nodes.Cube005_Material005_0.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.Cube005_Material006_0.geometry} material={materials['Material.006']} />
          </group>
          <group position={[-6.359, 852.089, -283.32]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[253.149, 86.518, 89.018]}>
            <mesh geometry={nodes.Cube011_machine_0.geometry} material={materials.machine} />
            <mesh geometry={nodes.Cube011_Material004_0.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Cube011_leg_area_0.geometry} material={materials.leg_area} />
            <mesh geometry={nodes.Cube011_holder_0.geometry} material={materials.holder} />
            <mesh geometry={nodes.Cube011_handle_0.geometry} material={materials.handle} />
            <mesh geometry={nodes.Cube011_slider_0.geometry} material={materials.slider} />
            <mesh geometry={nodes.Cube011_emergency_0.geometry} material={materials.emergency} />
            <mesh geometry={nodes.Cube011_cone_0.geometry} material={materials.cone} />
            <mesh geometry={nodes.Cube011_frame_0.geometry} material={materials.frame} />
            <mesh geometry={nodes.Cube011_screen1_0.geometry} material={materials.screen1} />
            <mesh geometry={nodes.Cube011_Material003_0.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Cube011_Material002_0.geometry} material={materials['Material.002']} />
          </group>
          <mesh geometry={nodes.Circle001_thin_ring_0.geometry} material={materials.thin_ring} position={[0.117, 438.764, 0.87]} rotation={[-Math.PI / 2, 0, 0.128]} scale={1143.109} />
          <mesh geometry={nodes.Circle003_disk1_0.geometry} material={materials.disk1} position={[0.117, 449.481, 0.87]} rotation={[1.571, 0, -0.128]} scale={1165.085} />
          <mesh geometry={nodes.Sphere_inner_base_0.geometry} material={materials.inner_base} position={[0.117, 422.311, 0.87]} rotation={[-Math.PI / 2, 0, 0.128]} scale={697.725} />
          <mesh geometry={nodes.Sphere001_glass_0.geometry} material={materials.glass} position={[0.95, 422.311, 2.735]} rotation={[-Math.PI / 2, 0, 0.128]} scale={690.567} />
          <mesh geometry={nodes.Cube002_light1_0.geometry} material={materials.light1} position={[-130.069, 775.237, 585.889]} rotation={[-Math.PI / 2, 0, -0.158]} scale={[22.227, 13.179, 21.393]} />
          <mesh geometry={nodes.Cube003_light2_0.geometry} material={materials.light2} position={[-11.245, 775.237, 599.221]} rotation={[-Math.PI / 2, 0, 0.018]} scale={[22.227, 13.179, 21.393]} />
          <mesh geometry={nodes.Cube004_light3_0.geometry} material={materials.light3} position={[109.318, 775.237, 589.367]} rotation={[-Math.PI / 2, 0, 0.219]} scale={[22.227, 13.179, 21.393]} />
          <mesh geometry={nodes.Plane001_top_holder_0.geometry} material={materials.top_holder} position={[0, 1176.572, 0]} rotation={[Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Sphere002_cover_0.geometry} material={materials.cover} position={[0.95, 422.311, 2.735]} rotation={[-Math.PI / 2, 0, 0.128]} scale={690.567} />
          <mesh geometry={nodes.Cylinder_Material001_0.geometry} material={materials['Material.001']} position={[0, 1264.002, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[10.252, 10.252, 91.561]} />
          <mesh geometry={nodes.Sphere003_ball_0.geometry} material={materials.ball} position={[0.116, 1404.655, 1.551]} rotation={[-Math.PI / 2, 0, 0]} scale={61.675} />
          <mesh geometry={nodes.Circle000_disk1_0.geometry} material={materials.disk1} position={[0.117, 445.527, 0.87]} rotation={[-Math.PI / 2, 0, 0.128]} scale={1165.085} />
          <mesh geometry={nodes.Circle_support_0.geometry} material={materials.support} position={[-0.493, -678.089, 992.61]} rotation={[-Math.PI / 2, 0, 0]} scale={121.776} />
          <mesh geometry={nodes.Circle004_support_0.geometry} material={materials.support} position={[-0.493, -678.089, -998.893]} rotation={[-Math.PI / 2, 0, 0]} scale={121.776} />
          <mesh geometry={nodes.Circle006_support_0.geometry} material={materials.support} position={[1001.978, -678.089, 1.025]} rotation={[-Math.PI / 2, 0, 0]} scale={121.776} />
          <mesh geometry={nodes.Circle007_support_0.geometry} material={materials.support} position={[-995.594, -678.089, 1.025]} rotation={[-Math.PI / 2, 0, 0]} scale={121.776} />
          <mesh geometry={nodes.Cube006_Material013_0.geometry} material={materials['Material.013']} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
          <mesh geometry={nodes.Cube007__0.geometry} material={materials['Cube.007__0']} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
          <mesh geometry={nodes.Cube008__0.geometry} material={materials['Cube.007__0']} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
          <mesh geometry={nodes.Cube009__0.geometry} material={materials['Cube.007__0']} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
          <mesh geometry={nodes.Cube010__0.geometry} material={materials['Cube.007__0']} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
          <mesh geometry={nodes.Cube014_Material007_0.geometry} material={materials['Material.007']} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
          <mesh geometry={nodes.Cube018_go_0.geometry} material={materials.material_48} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
          <mesh geometry={nodes.Cube022_go_0.geometry} material={materials.material_48} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
          <mesh geometry={nodes.Cube026_go_0.geometry} material={materials.material_48} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
          <mesh geometry={nodes.Cube030_go_0.geometry} material={materials.material_48} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
          <mesh geometry={nodes.Cube034_go_0.geometry} material={materials.material_48} position={[26.316, 843.492, 200.462]} rotation={[-Math.PI / 2, 0, 0.016]} scale={[343.827, 112.947, 112.947]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')