import {
  shaderMaterial,
  useTexture,
  useGLTF,
  Center,
  Sparkles,
  PresentationControls
} from "@react-three/drei"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import vertexShader from "./shaders/vertex.glsl"
import fragmentShader from "./shaders/fragment.glsl"
import { useControls } from "leva"
import { useFrame } from "@react-three/fiber"
import { extend } from "@react-three/fiber"


const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#000000'),
    uColorEnd: new THREE.Color('lightblue'),
  },
  vertexShader,
  fragmentShader
)

extend({ PortalMaterial })

const Experience = () => {
  const portalMaterial = useRef()
  const { nodes } = useGLTF('./model/portal.glb')
  const bakedTexture = useTexture('./model/baked.jpg')
  bakedTexture.flipY = false

  useFrame( (state, delta) => {
    portalMaterial.current.uTime += delta
  })

  return <>
    <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
          rotation={nodes.poleLightA.rotation}
          scale={nodes.poleLightA.scale}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>
        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
          rotation={nodes.poleLightB.rotation}
          scale={nodes.poleLightB.scale}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>
        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
          scale={nodes.portalLight.scale}
        >
          <portalMaterial ref={portalMaterial} side={THREE.DoubleSide} />
        </mesh>

        <Sparkles
          size={3}
          scale={[3.5, 1, 3.5]}
          position-y={1}
          speed={0.8}
          count={20}
        />
    </Center>
  </>
}

export default Experience