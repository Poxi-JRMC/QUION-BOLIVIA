import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Coordenadas desde Bolivia a otros países
const rutas = [
  { name: 'España', lat: 40.4168, lng: -3.7038, color: '#ff0000' },
  { name: 'México', lat: 19.4326, lng: -99.1332, color: '#00ff00' },
  { name: 'Colombia', lat: 4.711, lng: -74.0721, color: '#0000ff' },
  { name: 'Perú', lat: -12.0464, lng: -77.0428, color: '#ffff00' }
]

const BOLIVIA = { lat: -17.9833, lng: -67.15 }

// Convertir lat/lng a Vector3
function latLongToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

// Ruta animada
function Ruta({ start, end, color, radius }) {
  const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(radius * 1.3)
  const curve = new THREE.CatmullRomCurve3([start, mid, end])
  const points = curve.getPoints(100)
  const geometryRef = useRef()
  const materialRef = useRef()

  // Shader Material personalizado
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      u_time: { value: 0 },
      u_color: { value: new THREE.Color(color) }
    },
    vertexShader: `
      uniform float u_time;
      attribute float a_offset;
      varying float vAlpha;

      void main() {
        vec3 pos = position;
        vAlpha = smoothstep(0.0, 1.0, sin(u_time * 2.0 - a_offset * 10.0));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 u_color;
      varying float vAlpha;

      void main() {
        gl_FragColor = vec4(u_color, vAlpha);
      }
    `,
    transparent: true,
  })

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

  // Atributo personalizado para animación
  const offsets = new Float32Array(points.length)
  for (let i = 0; i < points.length; i++) {
    offsets[i] = i / points.length
  }
  lineGeometry.setAttribute('a_offset', new THREE.BufferAttribute(offsets, 1))

  // Animar tiempo
  useFrame((state) => {
    shaderMaterial.uniforms.u_time.value = state.clock.elapsedTime
  })

  return <line geometry={lineGeometry} material={shaderMaterial} />
}

// Globo principal
const Globo = ({ radius = 2 }) => {
  const texture = useLoader(THREE.TextureLoader, '/earth_daymap.jpg')
  const start = latLongToVector3(BOLIVIA.lat, BOLIVIA.lng, radius)

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />

      {/* Estrellas */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={1000}
            array={new Float32Array(
              Array.from({ length: 1000 }, () => (Math.random() - 0.5) * 50)
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="white" size={0.1} />
      </points>

      {/* Globo */}
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* Rutas animadas */}
      {rutas.map((dest, index) => {
        const end = latLongToVector3(dest.lat, dest.lng, radius)
        return (
          <Ruta key={index} start={start} end={end} color={dest.color} radius={radius} />
        )
      })}
    </>
  )
}

export default function Globo3D() {
  return (
    <Canvas style={{ height: '600px', width: '100%' }}>
      <Globo radius={2} />
    </Canvas>
  )
}
