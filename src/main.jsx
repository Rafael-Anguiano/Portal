import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { OrbitControls } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
        flat
        dpr={[1, 2]}
        camera={ {
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [ 4, 0.5, 4 ]
      } }
      >
        <color attach="background" args={['#030202']} />
        <OrbitControls
          enableDamping
          maxPolarAngle={Math.PI / 2}
        />
        <Experience />
    </Canvas>
  </React.StrictMode>,
)