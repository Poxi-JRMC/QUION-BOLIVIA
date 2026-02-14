import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Colores multicolor para destacar sobre fondo negro
const COLORS = [
  '#00FFFF', // Cyan
  '#FFD700', // Amarillo dorado
  '#00BFFF', // Azul eléctrico
  '#FF69B4', // Rosa
  '#00FF7F', // Verde primavera
  '#FF6B35', // Naranja
  '#9370DB', // Violeta
  '#1E90FF', // Azul dodger
  '#FF4500', // Naranja rojizo
  '#00CED1', // Turquesa
  '#FF1493', // Rosa intenso
  '#32CD32', // Verde lima
  '#FFA500', // Naranja
]

// Coordenadas desde Bolivia a otros países
const rutas = [
  { name: 'España', lat: 40.4168, lng: -3.7038, color: COLORS[0] },
  { name: 'México', lat: 19.4326, lng: -99.1332, color: COLORS[1] },
  { name: 'Colombia', lat: 4.711, lng: -74.0721, color: COLORS[2] },
  { name: 'Perú', lat: -12.0464, lng: -77.0428, color: COLORS[3] },
  { name: 'Estados Unidos', lat: 38.9072, lng: -77.0369, color: COLORS[4] },
  { name: 'Alemania', lat: 52.52, lng: 13.405, color: COLORS[5] },
  { name: 'Japón', lat: 35.6895, lng: 139.6917, color: COLORS[6] },
  { name: 'China', lat: 39.9042, lng: 116.4074, color: COLORS[0] },
  { name: 'Francia', lat: 48.8566, lng: 2.3522, color: COLORS[1] },
  { name: 'Italia', lat: 41.9028, lng: 12.4964, color: COLORS[2] },
  { name: 'Brasil', lat: -15.7939, lng: -47.8828, color: COLORS[3] },
  { name: 'Argentina', lat: -34.6037, lng: -58.3816, color: COLORS[4] },
  { name: 'Canadá', lat: 45.4215, lng: -75.6972, color: COLORS[5] }
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

// Ruta con pulso constante que recorre la línea
function Ruta({ start, end, color, radius }) {
  const { geometry, material } = useMemo(() => {
    const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(radius * 1.3)
    const curve = new THREE.CatmullRomCurve3([start, mid, end])
    const pts = curve.getPoints(100)
    const geom = new THREE.BufferGeometry().setFromPoints(pts)
    const offs = new Float32Array(pts.length)
    for (let i = 0; i < pts.length; i++) offs[i] = i / (pts.length - 1)
    geom.setAttribute('a_offset', new THREE.BufferAttribute(offs, 1))

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_color: { value: new THREE.Color(color) },
      },
      vertexShader: `
        uniform float u_time;
        attribute float a_offset;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          float t = u_time * 2.5 - a_offset * 8.0;
          float pulse = smoothstep(0.0, 0.25, sin(t));
          vAlpha = 0.5 + 0.5 * pulse;
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
    return { geometry: geom, material: mat }
  }, [color, start, end, radius])

  useFrame((state) => {
    material.uniforms.u_time.value = state.clock.elapsedTime
  })

  return <line geometry={geometry} material={material} />
}

// Controla OrbitControls: vista inicial a la izquierda (Bolivia), sin rotar 5 segundos
function OrbitController() {
  const controlsRef = useRef()
  const [autoRotate, setAutoRotate] = useState(false)
  const initialized = useRef(false)
  const rotationStarted = useRef(false)

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime
    if (controlsRef.current && !initialized.current) {
      initialized.current = true
      controlsRef.current.setAzimuthalAngle(0.85)
      controlsRef.current.setPolarAngle(Math.PI / 2.2)
    }
    if (elapsed >= 5 && !rotationStarted.current) {
      rotationStarted.current = true
      setAutoRotate(true)
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      autoRotate={autoRotate}
      autoRotateSpeed={0.4}
    />
  )
}

const Globo = ({ radius = 2 }) => {
  const texture = useLoader(THREE.TextureLoader, '/t2.jpg')

  // Rotación aplicada al globo y a los puntos - orientación para mostrar Bolivia/origen
  const globeRotation = new THREE.Euler(Math.PI / -11, Math.PI / 9, 0)

  // Punto inicial rotado
  const start = latLongToVector3(BOLIVIA.lat, BOLIVIA.lng, radius).applyEuler(globeRotation)

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} />
      <directionalLight position={[-5, -5, 5]} intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <OrbitController />

      {/* Estrellas de fondo más brillantes */}
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
        <pointsMaterial color="#ffffff" size={0.15} />
      </points>

      {/* Globo con rotación - más iluminado y vivo */}
      <mesh rotation={[Math.PI / -5, Math.PI / 10, 0.5]}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          emissive="#0a1a0a"
          emissiveIntensity={0.15}
          roughness={0.4}
          metalness={0.0}
        />
      </mesh>

      {/* Rutas ajustadas con misma rotación */}
      {rutas.map((dest, index) => {
        const end = latLongToVector3(dest.lat, dest.lng, radius).applyEuler(globeRotation)
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
