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
      >
        <color attach="background" args={['#030202']} />
        <OrbitControls enableDamping />
        <Experience />
    </Canvas>
  </React.StrictMode>,
)