// src/componentes/Globo3D.jsx
import React from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Coordenadas de ciudades (latitud, longitud)
const COORDS = [
  { name: 'Oruro', lat: -17.9833, lon: -67.1500 },
  { name: 'La Paz', lat: -16.5000, lon: -68.1500 },
  { name: 'Cochabamba', lat: -17.3935, lon: -66.1570 },
  { name: 'Santa Cruz', lat: -17.7833, lon: -63.1833 },
  { name: 'México', lat: 19.4326, lon: -99.1332 },
  { name: 'España', lat: 40.4168, lon: -3.7038 },
]

// Convierte lat/lon a posición 3D en una esfera
function latLongToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

// Componente que dibuja líneas entre Oruro y otros destinos
function Conexiones({ radius }) {
  const oruro = latLongToVector3(-17.9833, -67.1500, radius)
  return (
    <>
      {COORDS.filter(c => c.name !== 'Oruro').map((destino, i) => {
        const destinoPos = latLongToVector3(destino.lat, destino.lon, radius)
        const points = [oruro, destinoPos]
        const curve = new THREE.CatmullRomCurve3(points)
        const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50))

        return (
          <line key={i}>
            <primitive object={geometry} attach="geometry" />
            <lineBasicMaterial attach="material" color="orange" linewidth={2} />
          </line>
        )
      })}
    </>
  )
}

// Componente principal
const Globo = () => {
  const texture = useLoader(THREE.TextureLoader, 'earth_daymap.jpg')
  const radius = 2.5

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate />

      {/* Esfera con textura de la Tierra */}
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* Conexiones desde Oruro */}
      <Conexiones radius={radius} />
    </>
  )
}

// Componente Canvas
const Globo3D = () => {
  return (
    <Canvas style={{ height: 500 }}>
      <Globo />
    </Canvas>
  )
}

export default Globo3D
