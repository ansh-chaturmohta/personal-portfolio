'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows, Text, OrbitControls } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

// First Person Controls (keeping the same as before)
function FirstPersonControls() {
  const { camera, gl } = useThree()
  const moveSpeed = 5
  const lookSpeed = 0.002
  
  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
    ArrowUp: false,
    ArrowLeft: false,
    ArrowDown: false,
    ArrowRight: false
  })

  const velocity = useRef(new THREE.Vector3())
  const direction = useRef(new THREE.Vector3())
  const euler = useRef(new THREE.Euler(0, 0, 0, 'YXZ'))
  const PI_2 = Math.PI / 2

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code in keys.current) {
        keys.current[event.code as keyof typeof keys.current] = true
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code in keys.current) {
        keys.current[event.code as keyof typeof keys.current] = false
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (document.pointerLockElement === gl.domElement) {
        const movementX = event.movementX || 0
        const movementY = event.movementY || 0

        euler.current.setFromQuaternion(camera.quaternion)
        euler.current.y -= movementX * lookSpeed
        euler.current.x -= movementY * lookSpeed
        euler.current.x = Math.max(-PI_2, Math.min(PI_2, euler.current.x))
        camera.quaternion.setFromEuler(euler.current)
      }
    }

    const handleClick = () => {
      gl.domElement.requestPointerLock()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    document.addEventListener('mousemove', handleMouseMove)
    gl.domElement.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
      document.removeEventListener('mousemove', handleMouseMove)
      gl.domElement.removeEventListener('click', handleClick)
    }
  }, [camera, gl])

  useFrame((state, delta) => {
    velocity.current.x -= velocity.current.x * 10.0 * delta
    velocity.current.z -= velocity.current.z * 10.0 * delta

    direction.current.z = Number(keys.current.s || keys.current.ArrowDown) - Number(keys.current.w || keys.current.ArrowUp)
    direction.current.x = Number(keys.current.d || keys.current.ArrowRight) - Number(keys.current.a || keys.current.ArrowLeft)
    direction.current.normalize()

    if (keys.current.w || keys.current.ArrowUp) velocity.current.z -= direction.current.z * moveSpeed * delta
    if (keys.current.s || keys.current.ArrowDown) velocity.current.z -= direction.current.z * moveSpeed * delta
    if (keys.current.a || keys.current.ArrowLeft) velocity.current.x -= direction.current.x * moveSpeed * delta
    if (keys.current.d || keys.current.ArrowRight) velocity.current.x -= direction.current.x * moveSpeed * delta

    camera.translateX(velocity.current.x * delta)
    camera.translateZ(velocity.current.z * delta)

    camera.position.y = Math.max(1.5, camera.position.y)
  })

  return null
}

// Realistic Room with Textures
function RealisticRoom() {
  // Create materials with realistic textures
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#8B4513'),
    roughness: 0.1,
    metalness: 0.0,
    // You would load actual wood texture here
    map: null, // new THREE.TextureLoader().load('/textures/wood-floor.jpg')
  })

  const wallMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#F5F0E8'),
    roughness: 0.9,
    metalness: 0.0,
  })

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <primitive object={floorMaterial} />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 3, -10]} receiveShadow>
        <planeGeometry args={[20, 6]} />
        <primitive object={wallMaterial} />
      </mesh>
      
      <mesh position={[-10, 3, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[20, 6]} />
        <primitive object={wallMaterial} />
      </mesh>
      
      <mesh position={[10, 3, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[20, 6]} />
        <primitive object={wallMaterial} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#FEFEFE" roughness={0.9} />
      </mesh>
    </group>
  )
}

// Placeholder for 3D Model Loading
function DeskModel({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  // In a real implementation, you'd load actual 3D models like this:
  // const { scene } = useGLTF('/models/desk.gltf')
  
  return (
    <group 
      position={[-6, 0, -6]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Placeholder desk - replace with actual 3D model */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.1, 1.5]} />
        <meshStandardMaterial 
          color={hovered ? "#CD853F" : "#8B4513"} 
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
      
      {/* Monitor placeholder */}
      <mesh position={[0, 1, -0.5]} castShadow>
        <boxGeometry args={[1.2, 0.8, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Screen glow */}
      <mesh position={[0, 1, -0.45]}>
        <planeGeometry args={[1.1, 0.7]} />
        <meshStandardMaterial 
          color="#2980b9" 
          emissive="#2980b9" 
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {hovered && (
        <Text
          position={[0, 2, 0]}
          fontSize={0.3}
          color="#66ccff"
          anchorX="center"
          anchorY="middle"
        >
          WORK & EXPERIENCE
        </Text>
      )}
    </group>
  )
}

function SofaModel({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group 
      position={[0, 0, 0]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Placeholder sofa - replace with actual 3D model */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.8, 1.5]} />
        <meshStandardMaterial 
          color={hovered ? "#4a4a4a" : "#3a3a3a"} 
          roughness={0.8}
          metalness={0.0}
        />
      </mesh>
      
      {/* Sofa back */}
      <mesh position={[0, 1, -0.6]} castShadow receiveShadow>
        <boxGeometry args={[3, 1.2, 0.3]} />
        <meshStandardMaterial 
          color="#404040" 
          roughness={0.9}
          metalness={0.0}
        />
      </mesh>
    </group>
  )
}

function BarModel({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group 
      position={[6, 0, -6]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Bar counter */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.1, 1]} />
        <meshStandardMaterial 
          color={hovered ? "#A0522D" : "#8B4513"} 
          roughness={0.3}
          metalness={0.0}
        />
      </mesh>
      
      {/* Bottles */}
      <mesh position={[-0.8, 1, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.8]} />
        <meshStandardMaterial 
          color="#228B22" 
          transparent 
          opacity={0.7}
          roughness={0.1}
        />
      </mesh>
      
      {hovered && (
        <Text
          position={[0, 2, 0]}
          fontSize={0.3}
          color="#ff6b9d"
          anchorX="center"
          anchorY="middle"
        >
          MIXOLOGY
        </Text>
      )}
    </group>
  )
}

export default function PhotorealisticRoom() {
  return (
    <div className="w-full h-screen">
      <Canvas 
        camera={{ position: [0, 1.5, 8], fov: 75 }}
        shadows
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0
        }}
      >
        {/* Professional HDRI Environment */}
        <Environment preset="city" background={false} />
        
        {/* Soft Professional Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[4096, 4096]}
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
        
        {/* Contact shadows for realism */}
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, 0, 0]}
          opacity={0.4}
          width={20}
          height={20}
          blur={2.5}
          far={4}
        />
        
        {/* First Person Controls */}
        <FirstPersonControls />
        
        {/* Room Structure */}
        <RealisticRoom />
        
        {/* 3D Models (placeholders for now) */}
        <DeskModel onClick={() => console.log('Clicked desk')} />
        <SofaModel onClick={() => console.log('Clicked sofa')} />
        <BarModel onClick={() => console.log('Clicked bar')} />
        
      </Canvas>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 glass p-4 rounded-lg max-w-sm">
        <h3 className="text-white font-semibold mb-2">🎬 Photorealistic Studio</h3>
        <p className="text-white text-sm mb-1">🖱️ <strong>Click</strong> to lock mouse and look around</p>
        <p className="text-white text-sm mb-1">⌨️ <strong>WASD</strong> or <strong>Arrow Keys</strong> to move</p>
        <p className="text-white text-sm">🎯 <strong>Click objects</strong> to interact</p>
        <p className="text-xs text-white/50 mt-2">Ready for real 3D models</p>
      </div>
      
      {/* Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold glow-text mb-4">
          ANSH'S STUDIO
        </h1>
        <p className="text-lg text-white/60">
          Next: Load photorealistic 3D models
        </p>
      </div>

      {/* Model Loading Instructions */}
      <div className="absolute top-4 right-4 glass p-4 rounded-lg max-w-sm">
        <h3 className="text-white font-semibold mb-2">🎯 Next Steps</h3>
        <p className="text-white text-sm mb-1">1. Create 3D models in Blender</p>
        <p className="text-white text-sm mb-1">2. Export as .gltf/.glb files</p>
        <p className="text-white text-sm mb-1">3. Add realistic textures</p>
        <p className="text-white text-sm">4. Replace placeholders</p>
      </div>
    </div>
  )
}
