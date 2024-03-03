import { useTexture, useGLTF, Center } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"

const Experience = () => {
  
  const { nodes } = useGLTF('./model/portal.glb')

  const bakedTexture = useTexture('./model/baked.jpg')
  bakedTexture.flipY = false

  console.log(nodes);

  return <>
    <Center>
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      <mesh 
        geometry={ nodes.poleLightA.geometry }
        position={ nodes.poleLightA.position }
        rotation={ nodes.poleLightA.rotation }
        scale={ nodes.poleLightA.scale }
        >
        <meshBasicMaterial color={"#ffffe5"} />
      </mesh>
      <mesh 
        geometry={ nodes.poleLightB.geometry }
        position={ nodes.poleLightB.position }
        rotation={ nodes.poleLightB.rotation }
        scale={ nodes.poleLightB.scale }
        >
        <meshBasicMaterial color={"#ffffe5"} />
      </mesh>
      <mesh 
        geometry={nodes.portalLight.geometry}
        position={ nodes.portalLight.position }
        rotation={ nodes.portalLight.rotation }
        scale={ nodes.portalLight.scale }
      >
      </mesh>
    </Center>
  </>
}

export default Experience