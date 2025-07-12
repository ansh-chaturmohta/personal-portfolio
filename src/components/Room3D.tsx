'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows, Text } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

// First Person Controls
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

    // Keep camera above ground
    camera.position.y = Math.max(1.5, camera.position.y)
  })

  return null
}

// Photorealistic Room Structure
function Room() {
  return (
    <group>
      {/* Ultra-Realistic Hardwood Floor */}
      <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial 
          color="#A0522D"
          roughness={0.15}
          metalness={0.02}
          normalScale={[0.5, 0.5]}
        />
      </Plane>
      
      {/* Detailed Floor Planks with Subtle Height Variation */}
      {Array.from({ length: 15 }, (_, i) => (
        <Plane key={i} args={[20, 0.015]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.0005, -9 + i * 1.2]}>
          <meshStandardMaterial 
            color="#8B4513" 
            roughness={0.25}
            metalness={0.0}
          />
        </Plane>
      ))}
      
      {/* Soft White Ceiling */}
      <Plane args={[20, 20]} rotation={[Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
        <meshStandardMaterial 
          color="#FEFEFE"
          roughness={0.95}
          metalness={0.0}
        />
      </Plane>
      
      {/* Warm Neutral Walls */}
      <Plane args={[20, 6]} position={[0, 3, -10]} receiveShadow>
        <meshStandardMaterial 
          color="#F5F0E8"
          roughness={0.95}
          metalness={0.0}
        />
      </Plane>
      
      <Plane args={[20, 6]} rotation={[0, Math.PI / 2, 0]} position={[-10, 3, 0]} receiveShadow>
        <meshStandardMaterial 
          color="#F5F0E8"
          roughness={0.95}
          metalness={0.0}
        />
      </Plane>
      
      <Plane args={[20, 6]} rotation={[0, -Math.PI / 2, 0]} position={[10, 3, 0]} receiveShadow>
        <meshStandardMaterial 
          color="#F5F0E8"
          roughness={0.95}
          metalness={0.0}
        />
      </Plane>
      
      {/* Front Walls */}
      <Plane args={[8, 6]} position={[-6, 3, 10]} receiveShadow>
        <meshStandardMaterial 
          color="#F5F0E8"
          roughness={0.95}
          metalness={0.0}
        />
      </Plane>
      <Plane args={[8, 6]} position={[6, 3, 10]} receiveShadow>
        <meshStandardMaterial 
          color="#F5F0E8"
          roughness={0.95}
          metalness={0.0}
        />
      </Plane>
      
      {/* Window on back wall */}
      <RoundedBox args={[4, 3, 0.02]} position={[3, 4, -9.99]} radius={0.05}>
        <meshStandardMaterial 
          color="#87CEEB"
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.0}
        />
      </RoundedBox>
      
      {/* Window Frame */}
      <RoundedBox args={[4.2, 3.2, 0.1]} position={[3, 4, -9.95]} radius={0.02}>
        <meshStandardMaterial 
          color="#FFFFFF"
          roughness={0.3}
          metalness={0.0}
        />
      </RoundedBox>
      
      {/* Baseboards */}
      <Box args={[20, 0.2, 0.1]} position={[0, 0.1, -10]}>
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </Box>
      <Box args={[0.1, 0.2, 20]} position={[-10, 0.1, 0]}>
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </Box>
      <Box args={[0.1, 0.2, 20]} position={[10, 0.1, 0]}>
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </Box>
    </group>
  )
}

// Photorealistic Desk Setup
function DeskSetup({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group 
      position={[-6, 0, -8]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Ultra-Premium Wooden Desk */}
      <RoundedBox args={[4, 0.08, 2.5]} position={[0, 0.75, 0]} radius={0.03} castShadow receiveShadow>
        <meshStandardMaterial 
          color={hovered ? "#CD853F" : "#DEB887"}
          roughness={0.12}
          metalness={0.05}
          clearcoat={0.3}
          clearcoatRoughness={0.1}
        />
      </RoundedBox>
      
      {/* Desk Edge Detail with Wood Grain */}
      <RoundedBox args={[4, 0.06, 2.5]} position={[0, 0.71, 0]} radius={0.015} castShadow>
        <meshStandardMaterial 
          color="#D2B48C"
          roughness={0.25}
          metalness={0.0}
          normalScale={[0.3, 0.3]}
        />
      </RoundedBox>
      
      {/* Metal Desk Legs */}
      <Cylinder args={[0.03, 0.03, 1.5]} position={[-1.8, 0.37, -1]}>
        <meshStandardMaterial 
          color="#2F2F2F"
          roughness={0.1}
          metalness={0.8}
        />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 1.5]} position={[1.8, 0.37, -1]}>
        <meshStandardMaterial 
          color="#2F2F2F"
          roughness={0.1}
          metalness={0.8}
        />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 1.5]} position={[-1.8, 0.37, 1]}>
        <meshStandardMaterial 
          color="#2F2F2F"
          roughness={0.1}
          metalness={0.8}
        />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 1.5]} position={[1.8, 0.37, 1]}>
        <meshStandardMaterial 
          color="#2F2F2F"
          roughness={0.1}
          metalness={0.8}
        />
      </Cylinder>
      
      {/* Monitor Arms/Stands */}
      <RoundedBox args={[0.25, 0.8, 0.15]} position={[-1, 1.3, -0.8]} radius={0.02}>
        <meshStandardMaterial 
          color="#1a1a1a"
          roughness={0.2}
          metalness={0.7}
        />
      </RoundedBox>
      <RoundedBox args={[0.25, 0.8, 0.15]} position={[1, 1.3, -0.8]} radius={0.02}>
        <meshStandardMaterial 
          color="#1a1a1a"
          roughness={0.2}
          metalness={0.7}
        />
      </RoundedBox>
      
      {/* Ultra-Premium Monitors with Realistic Bezels */}
      <RoundedBox args={[1.6, 1, 0.08]} position={[-1, 2, -1]} radius={0.05} castShadow>
        <meshStandardMaterial 
          color="#0a0a0a"
          roughness={0.05}
          metalness={0.8}
        />
      </RoundedBox>
      <RoundedBox args={[1.48, 0.88, 0.005]} position={[-1, 2, -0.955]} radius={0.015}>
        <meshStandardMaterial 
          color="#1a1a2e"
          emissive="#2980b9"
          emissiveIntensity={0.6}
          roughness={0.95}
          transparent
          opacity={0.95}
        />
      </RoundedBox>
      
      <RoundedBox args={[1.6, 1, 0.08]} position={[1, 2, -1]} radius={0.05} castShadow>
        <meshStandardMaterial 
          color="#0a0a0a"
          roughness={0.05}
          metalness={0.8}
        />
      </RoundedBox>
      <RoundedBox args={[1.48, 0.88, 0.005]} position={[1, 2, -0.955]} radius={0.015}>
        <meshStandardMaterial 
          color="#1a2e1a"
          emissive="#27ae60"
          emissiveIntensity={0.6}
          roughness={0.95}
          transparent
          opacity={0.95}
        />
      </RoundedBox>
      
      {/* MacBook Pro */}
      <RoundedBox args={[1.2, 0.8, 0.02]} position={[0, 0.8, 0.2]} rotation={[-0.2, 0, 0]} radius={0.05} castShadow>
        <meshStandardMaterial 
          color="#E5E5E5"
          roughness={0.05}
          metalness={0.9}
          clearcoat={0.8}
          clearcoatRoughness={0.05}
        />
      </RoundedBox>
      <RoundedBox args={[1.15, 0.75, 0.005]} position={[0, 0.801, 0.2]} rotation={[-0.2, 0, 0]} radius={0.03}>
        <meshStandardMaterial 
          color="#0a0a0a"
          emissive="#8e44ad"
          emissiveIntensity={0.4}
          roughness={0.95}
        />
      </RoundedBox>
      
      {/* Mechanical Keyboard */}
      <RoundedBox args={[1.4, 0.5, 0.08]} position={[0, 0.84, 0.8]} radius={0.03} castShadow>
        <meshStandardMaterial 
          color="#1a1a1a"
          roughness={0.25}
          metalness={0.2}
        />
      </RoundedBox>
      
      {/* Gaming Mouse */}
      <RoundedBox args={[0.12, 0.08, 0.04]} position={[0.8, 0.84, 0.6]} radius={0.02} castShadow>
        <meshStandardMaterial 
          color="#0a0a0a"
          roughness={0.15}
          metalness={0.4}
          clearcoat={0.5}
        />
      </RoundedBox>
      
      {/* Coffee Mug with Handle */}
      <Cylinder args={[0.08, 0.06, 0.15]} position={[-1.5, 0.9, 0.5]}>
        <meshStandardMaterial 
          color="#8B4513"
          roughness={0.8}
          metalness={0.0}
        />
      </Cylinder>
      {/* Mug Handle */}
      <Cylinder args={[0.02, 0.02, 0.1]} position={[-1.42, 0.9, 0.5]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial 
          color="#8B4513"
          roughness={0.8}
          metalness={0.0}
        />
      </Cylinder>
      
      {/* Desk Accessories */}
      <Cylinder args={[0.05, 0.05, 0.2]} position={[1.5, 0.9, 0.3]}>
        <meshStandardMaterial 
          color="#2F2F2F"
          roughness={0.1}
          metalness={0.9}
        />
      </Cylinder>
      
      {/* Cable Management */}
      <Cylinder args={[0.01, 0.01, 0.8]} position={[-1, 0.4, -0.8]}>
        <meshStandardMaterial 
          color="#333333"
          roughness={0.8}
        />
      </Cylinder>
      <Cylinder args={[0.01, 0.01, 0.8]} position={[1, 0.4, -0.8]}>
        <meshStandardMaterial 
          color="#333333"
          roughness={0.8}
        />
      </Cylinder>
      
      {hovered && (
        <mesh position={[0, 3, 0]}>
          <planeGeometry args={[3, 0.5]} />
          <meshStandardMaterial color="#66ccff" transparent opacity={0.6} />
        </mesh>
      )}
    </group>
  )
}

// Realistic Bar Setup  
function BarSetup({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group 
      position={[6, 0, -8]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Bar Counter */}
      <Box args={[3.5, 0.2, 1.5]} position={[0, 1, 0]}>
        <meshStandardMaterial color={hovered ? "#A0522D" : "#8B4513"} roughness={0.2} />
      </Box>
      
      {/* Bar Support */}
      <Box args={[3.5, 1, 0.3]} position={[0, 0.5, 0.6]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      
      {/* Bottles on shelf */}
      <Box args={[3, 0.1, 0.3]} position={[0, 2.5, -0.6]} />
      
      {/* Whiskey Bottle */}
      <Cylinder args={[0.06, 0.06, 0.9]} position={[-1, 2.95, -0.5]}>
        <meshStandardMaterial color="#8B4513" transparent opacity={0.8} />
      </Cylinder>
      
      {/* Vodka Bottle */}
      <Cylinder args={[0.05, 0.05, 1]} position={[-0.3, 3, -0.5]}>
        <meshStandardMaterial color="#E6E6FA" transparent opacity={0.9} />
      </Cylinder>
      
      {/* Gin Bottle */}
      <Cylinder args={[0.05, 0.05, 0.8]} position={[0.3, 2.9, -0.5]}>
        <meshStandardMaterial color="#98FB98" transparent opacity={0.8} />
      </Cylinder>
      
      {/* Wine Bottle */}
      <Cylinder args={[0.04, 0.06, 1.1]} position={[1, 3.05, -0.5]}>
        <meshStandardMaterial color="#722F37" transparent opacity={0.8} />
      </Cylinder>
      
      {/* Cocktail Shaker */}
      <Cylinder args={[0.12, 0.1, 0.8]} position={[0.8, 1.5, 0.2]}>
        <meshStandardMaterial color="#C0C0C0" metalness={0.9} roughness={0.1} />
      </Cylinder>
      
      {/* Glasses */}
      <Cylinder args={[0.08, 0.06, 0.25]} position={[-0.5, 1.23, 0.3]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
      </Cylinder>
      <Cylinder args={[0.08, 0.06, 0.25]} position={[-0.3, 1.23, 0.3]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
      </Cylinder>
      
      {/* Ice Bucket */}
      <Cylinder args={[0.15, 0.12, 0.2]} position={[0, 1.2, 0.5]}>
        <meshStandardMaterial color="#C0C0C0" metalness={0.8} />
      </Cylinder>
      
      {hovered && (
        <mesh position={[0, 3.5, 0]}>
          <planeGeometry args={[2.5, 0.4]} />
          <meshStandardMaterial color="#ff6b9d" transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  )
}

// Kitchen Area
function KitchenSetup({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group 
      position={[-6, 0, 6]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Counter */}
      <Box args={[4, 0.15, 2]} position={[0, 1, 0]}>
        <meshStandardMaterial color={hovered ? "#696969" : "#4a4a4a"} />
      </Box>
      
      {/* Cabinet */}
      <Box args={[4, 0.8, 1.8]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      
      {/* Stove */}
      <Box args={[1.2, 0.1, 1]} position={[-1.2, 1.16, 0]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      
      {/* Burners */}
      <Cylinder args={[0.12, 0.12, 0.02]} position={[-1.5, 1.17, -0.2]}>
        <meshStandardMaterial color="#333" />
      </Cylinder>
      <Cylinder args={[0.12, 0.12, 0.02]} position={[-0.9, 1.17, -0.2]}>
        <meshStandardMaterial color="#333" />
      </Cylinder>
      
      {/* Pan */}
      <Cylinder args={[0.3, 0.3, 0.08]} position={[-1.5, 1.25, -0.2]}>
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} />
      </Cylinder>
      
      {/* Cutting Board */}
      <Box args={[0.8, 0.08, 0.5]} position={[0.5, 1.2, 0.2]}>
        <meshStandardMaterial color="#DEB887" />
      </Box>
      
      {/* Knife */}
      <Box args={[0.5, 0.03, 0.08]} position={[0.7, 1.25, 0.1]}>
        <meshStandardMaterial color="#C0C0C0" metalness={0.9} />
      </Box>
      
      {/* Microwave */}
      <Box args={[0.8, 0.5, 0.6]} position={[1.5, 1.9, -0.2]}>
        <meshStandardMaterial color="#E5E5E5" />
      </Box>
      
      {hovered && (
        <mesh position={[0, 2.5, 0]}>
          <planeGeometry args={[2.5, 0.4]} />
          <meshStandardMaterial color="#ff9500" transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  )
}

// Tennis Corner
function TennisKit({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group 
      position={[7, 0, 5]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Tennis Bag */}
      <Cylinder args={[0.35, 0.35, 2.5]} position={[0, 1.25, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color={hovered ? "#32CD32" : "#228B22"} />
      </Cylinder>
      
      {/* Tennis Racket */}
      <group position={[1, 0.8, 0]} rotation={[0, 0, Math.PI / 6]}>
        <Cylinder args={[0.03, 0.03, 1.2]} position={[0, -0.4, 0]}>
          <meshStandardMaterial color="#8B4513" />
        </Cylinder>
        <Cylinder args={[0.35, 0.35, 0.03]} position={[0, 0.4, 0]}>
          <meshStandardMaterial color="#FF4500" wireframe />
        </Cylinder>
      </group>
      
      {/* Tennis Balls */}
      <Sphere args={[0.1]} position={[-0.8, 0.5, 0.4]}>
        <meshStandardMaterial color="#FFFF00" />
      </Sphere>
      <Sphere args={[0.1]} position={[-0.6, 0.5, 0.2]}>
        <meshStandardMaterial color="#FFFF00" />
      </Sphere>
      <Sphere args={[0.1]} position={[-0.4, 0.5, 0.5]}>
        <meshStandardMaterial color="#FFFF00" />
      </Sphere>
      
      {/* Water Bottle */}
      <Cylinder args={[0.08, 0.08, 0.8]} position={[-1.2, 0.4, 0]}>
        <meshStandardMaterial color="#1E90FF" transparent opacity={0.7} />
      </Cylinder>
      
      {hovered && (
        <mesh position={[0, 2.5, 0]}>
          <planeGeometry args={[2, 0.4]} />
          <meshStandardMaterial color="#32CD32" transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  )
}

// Vinyl/Music Corner
function VinylSetup({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  const recordRef = useRef<THREE.Mesh>(null)
  
  useFrame((state, delta) => {
    if (recordRef.current) {
      recordRef.current.rotation.y += delta * 0.8
    }
  })
  
  return (
    <group 
      position={[6, 0, 6]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Table */}
      <Box args={[2.5, 0.1, 2]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color={hovered ? "#8B4513" : "#654321"} />
      </Box>
      
      {/* Table Legs */}
      <Box args={[0.08, 0.8, 0.08]} position={[-1.1, 0.4, -0.9]}>
        <meshStandardMaterial color="#4a4a4a" />
      </Box>
      <Box args={[0.08, 0.8, 0.08]} position={[1.1, 0.4, -0.9]}>
        <meshStandardMaterial color="#4a4a4a" />
      </Box>
      <Box args={[0.08, 0.8, 0.08]} position={[-1.1, 0.4, 0.9]}>
        <meshStandardMaterial color="#4a4a4a" />
      </Box>
      <Box args={[0.08, 0.8, 0.08]} position={[1.1, 0.4, 0.9]}>
        <meshStandardMaterial color="#4a4a4a" />
      </Box>
      
      {/* Turntable Base */}
      <Box args={[1.8, 0.15, 1.5]} position={[0, 0.95, 0]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Box>
      
      {/* Record */}
      <Cylinder ref={recordRef} args={[0.6, 0.6, 0.03]} position={[0, 1.05, 0]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Cylinder>
      
      {/* Tone Arm */}
      <Box args={[0.8, 0.03, 0.03]} position={[0.4, 1.15, 0.4]} rotation={[0, -Math.PI / 6, 0]}>
        <meshStandardMaterial color="#C0C0C0" metalness={0.8} />
      </Box>
      
      {/* Speakers */}
      <Box args={[0.5, 1, 0.4]} position={[-1.8, 1.3, 0]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      <Box args={[0.5, 1, 0.4]} position={[1.8, 1.3, 0]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      
      {/* Vinyl Records Stack */}
      <Box args={[0.3, 0.6, 0.3]} position={[-0.8, 1.15, 0.5]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      
      {hovered && (
        <mesh position={[0, 2.5, 0]}>
          <planeGeometry args={[2, 0.4]} />
          <meshStandardMaterial color="#9b59b6" transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  )
}

// Bookshelf
function BookShelf({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group 
      position={[8.5, 0, 0]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main Structure */}
      <Box args={[0.8, 5, 2.5]} position={[0, 2.5, 0]}>
        <meshStandardMaterial color={hovered ? "#A0522D" : "#8B4513"} />
      </Box>
      
      {/* Shelves */}
      <Box args={[0.9, 0.08, 2.5]} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      <Box args={[0.9, 0.08, 2.5]} position={[0, 2.4, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      <Box args={[0.9, 0.08, 2.5]} position={[0, 3.6, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      <Box args={[0.9, 0.08, 2.5]} position={[0, 4.8, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      
      {/* Books */}
      {[...Array(20)].map((_, i) => (
        <Box 
          key={i}
          args={[0.12, 1 + Math.random() * 0.4, 0.4]} 
          position={[
            -0.35, 
            1.8 + Math.floor(i / 6) * 1.2, 
            -1 + (i % 6) * 0.4
          ]}
        >
          <meshStandardMaterial color={`hsl(${i * 18}, 70%, 50%)`} />
        </Box>
      ))}
      
      {/* Decorative Items */}
      <Sphere args={[0.15]} position={[-0.3, 3.8, 0.8]}>
        <meshStandardMaterial color="#FFD700" metalness={0.8} />
      </Sphere>
      
      {hovered && (
        <mesh position={[0, 5.5, 0]}>
          <planeGeometry args={[2, 0.4]} />
          <meshStandardMaterial color="#f39c12" transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  )
}

// Photorealistic Decorative Objects
function DecorativeObjects() {
  return (
    <group>
      {/* Ultra-Luxury Sectional Sofa */}
      <RoundedBox args={[3.2, 0.8, 1.6]} position={[0, 0.4, 0]} radius={0.12} castShadow receiveShadow>
        <meshStandardMaterial 
          color="#3A3A3A"
          roughness={0.85}
          metalness={0.0}
          normalScale={[1.0, 1.0]}
        />
      </RoundedBox>
      {/* Sofa Back with Tufted Detail */}
      <RoundedBox args={[3.2, 1.2, 0.35]} position={[0, 1, -0.65]} radius={0.1} castShadow receiveShadow>
        <meshStandardMaterial 
          color="#404040"
          roughness={0.9}
          metalness={0.0}
          normalScale={[0.8, 0.8]}
        />
      </RoundedBox>
      {/* Sofa Arms */}
      <RoundedBox args={[0.35, 1, 1.6]} position={[-1.45, 0.9, 0]} radius={0.1} castShadow receiveShadow>
        <meshStandardMaterial 
          color="#404040"
          roughness={0.9}
          metalness={0.0}
        />
      </RoundedBox>
      <RoundedBox args={[0.35, 1, 1.6]} position={[1.45, 0.9, 0]} radius={0.1} castShadow receiveShadow>
        <meshStandardMaterial 
          color="#404040"
          roughness={0.9}
          metalness={0.0}
        />
      </RoundedBox>
      
      {/* Sofa Cushions for Extra Realism */}
      <RoundedBox args={[0.9, 0.15, 1.4]} position={[-1, 0.88, 0]} radius={0.08} castShadow>
        <meshStandardMaterial 
          color="#383838"
          roughness={0.85}
          metalness={0.0}
        />
      </RoundedBox>
      <RoundedBox args={[0.9, 0.15, 1.4]} position={[0, 0.88, 0]} radius={0.08} castShadow>
        <meshStandardMaterial 
          color="#383838"
          roughness={0.85}
          metalness={0.0}
        />
      </RoundedBox>
      <RoundedBox args={[0.9, 0.15, 1.4]} position={[1, 0.88, 0]} radius={0.08} castShadow>
        <meshStandardMaterial 
          color="#383838"
          roughness={0.85}
          metalness={0.0}
        />
      </RoundedBox>
      
      {/* Modern Glass Coffee Table */}
      <RoundedBox args={[2.2, 0.03, 1.2]} position={[0, 0.45, 2.8]} radius={0.02}>
        <meshStandardMaterial 
          color="#FFFFFF"
          transparent
          opacity={0.15}
          roughness={0.0}
          metalness={0.0}
        />
      </RoundedBox>
      {/* Coffee Table Legs - Chrome */}
      <Cylinder args={[0.02, 0.02, 0.4]} position={[-0.9, 0.225, 2.3]}>
        <meshStandardMaterial 
          color="#C0C0C0"
          roughness={0.1}
          metalness={0.9}
        />
      </Cylinder>
      <Cylinder args={[0.02, 0.02, 0.4]} position={[0.9, 0.225, 2.3]}>
        <meshStandardMaterial 
          color="#C0C0C0"
          roughness={0.1}
          metalness={0.9}
        />
      </Cylinder>
      <Cylinder args={[0.02, 0.02, 0.4]} position={[-0.9, 0.225, 3.3]}>
        <meshStandardMaterial 
          color="#C0C0C0"
          roughness={0.1}
          metalness={0.9}
        />
      </Cylinder>
      <Cylinder args={[0.02, 0.02, 0.4]} position={[0.9, 0.225, 3.3]}>
        <meshStandardMaterial 
          color="#C0C0C0"
          roughness={0.1}
          metalness={0.9}
        />
      </Cylinder>
      
      {/* Realistic Potted Plants */}
      {/* Large Monstera Plant */}
      <Cylinder args={[0.25, 0.2, 0.35]} position={[-8, 0.175, -5]}>
        <meshStandardMaterial 
          color="#8B4513"
          roughness={0.9}
          metalness={0.0}
        />
      </Cylinder>
      <Sphere args={[0.5]} position={[-8, 0.8, -5]}>
        <meshStandardMaterial 
          color="#228B22"
          roughness={0.8}
          metalness={0.0}
        />
      </Sphere>
      {/* Plant leaves detail */}
      <Sphere args={[0.15]} position={[-7.7, 1.1, -4.8]}>
        <meshStandardMaterial 
          color="#32CD32"
          roughness={0.8}
          metalness={0.0}
        />
      </Sphere>
      <Sphere args={[0.12]} position={[-8.3, 0.9, -5.2]}>
        <meshStandardMaterial 
          color="#228B22"
          roughness={0.8}
          metalness={0.0}
        />
      </Sphere>
      
      {/* Small Succulent */}
      <Cylinder args={[0.18, 0.15, 0.28]} position={[3, 0.14, -8.5]}>
        <meshStandardMaterial 
          color="#CD853F"
          roughness={0.8}
          metalness={0.0}
        />
      </Cylinder>
      <Sphere args={[0.25]} position={[3, 0.45, -8.5]}>
        <meshStandardMaterial 
          color="#90EE90"
          roughness={0.6}
          metalness={0.0}
        />
      </Sphere>
      
      {/* Persian Style Area Rug */}
      <Plane args={[6.5, 4.5]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 1]}>
        <meshStandardMaterial 
          color="#8B0000"
          roughness={0.9}
          metalness={0.0}
        />
      </Plane>
      {/* Rug Pattern Details */}
      <Plane args={[5.5, 3.5]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.003, 1]}>
        <meshStandardMaterial 
          color="#B22222"
          roughness={0.9}
          metalness={0.0}
        />
      </Plane>
      <Plane args={[4.5, 2.5]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.004, 1]}>
        <meshStandardMaterial 
          color="#CD5C5C"
          roughness={0.9}
          metalness={0.0}
        />
      </Plane>
      
      {/* Modern Pendant Light */}
      <Cylinder args={[0.6, 0.6, 0.12]} position={[0, 5.7, 0]}>
        <meshStandardMaterial 
          color="#F5F5DC"
          emissive="#FFFAF0"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.1}
        />
      </Cylinder>
      {/* Light cord */}
      <Cylinder args={[0.005, 0.005, 0.3]} position={[0, 5.85, 0]}>
        <meshStandardMaterial 
          color="#333333"
          roughness={0.8}
        />
      </Cylinder>
      
      {/* Wall Art Frame */}
      <RoundedBox args={[1.5, 1.2, 0.05]} position={[-9.9, 3, 2]} radius={0.02}>
        <meshStandardMaterial 
          color="#8B4513"
          roughness={0.3}
          metalness={0.0}
        />
      </RoundedBox>
      <RoundedBox args={[1.3, 1, 0.02]} position={[-9.92, 3, 2]} radius={0.01}>
        <meshStandardMaterial 
          color="#F5F5DC"
          roughness={0.9}
          metalness={0.0}
        />
      </RoundedBox>
      
      {/* Floor Lamp */}
      <Cylinder args={[0.03, 0.03, 1.8]} position={[4, 0.9, 8]}>
        <meshStandardMaterial 
          color="#2F2F2F"
          roughness={0.2}
          metalness={0.8}
        />
      </Cylinder>
      <Cylinder args={[0.3, 0.25, 0.4]} position={[4, 1.6, 8]}>
        <meshStandardMaterial 
          color="#F5F5DC"
          emissive="#FFFAF0"
          emissiveIntensity={0.2}
          roughness={0.8}
          transparent
          opacity={0.7}
        />
      </Cylinder>
    </group>
  )
}

export default function Room3D() {
  return (
    <div className="w-full h-screen">
      <Canvas 
        camera={{ position: [0, 1.5, 8], fov: 75 }}
        shadows
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
      >
        {/* HDRI Environment for Ultra-Realistic Reflections */}
        <Environment preset="studio" />
        
        {/* Ultra-Soft Diffused Lighting Setup */}
        <ambientLight intensity={0.4} color="#F8F6F0" />
        
        {/* Primary soft area light (like the reference) */}
        <rectAreaLight 
          position={[0, 5, 0]} 
          rotation={[-Math.PI / 2, 0, 0]}
          width={8} 
          height={8} 
          intensity={3.5} 
          color="#FFF8E7"
        />
        
        {/* Window soft natural light */}
        <rectAreaLight 
          position={[3, 3, -9.5]} 
          rotation={[0, 0, 0]}
          width={3.5} 
          height={2.5} 
          intensity={2.8} 
          color="#E8F4FD"
        />
        
        {/* Soft fill lighting from left */}
        <pointLight 
          position={[-8, 3, 2]} 
          intensity={1.2} 
          color="#FFF2E6"
          distance={15}
          decay={2}
        />
        
        {/* Soft fill lighting from right */}
        <pointLight 
          position={[8, 3, 2]} 
          intensity={1.0} 
          color="#F0F8FF"
          distance={15}
          decay={2}
        />
        
        {/* Warm accent for cozy atmosphere */}
        <pointLight 
          position={[0, 1.5, 4]} 
          intensity={0.8} 
          color="#FFE4B5"
          distance={8}
          decay={2}
        />
        
        {/* Subtle back lighting */}
        <directionalLight 
          position={[0, 8, -12]} 
          intensity={0.3} 
          color="#E6F3FF"
          castShadow
          shadow-mapSize={[4096, 4096]}
          shadow-camera-near={0.1}
          shadow-camera-far={50}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
          shadow-bias={-0.0001}
        />
        
        {/* First Person Controls */}
        <FirstPersonControls />
        
        {/* Room Structure */}
        <Room />
        
        {/* Interactive Objects */}
        <DeskSetup onClick={() => console.log('Clicked desk')} />
        <BarSetup onClick={() => console.log('Clicked bar')} />
        <KitchenSetup onClick={() => console.log('Clicked kitchen')} />
        <TennisKit onClick={() => console.log('Clicked tennis')} />
        <VinylSetup onClick={() => console.log('Clicked vinyl')} />
        <BookShelf onClick={() => console.log('Clicked bookshelf')} />
        
        {/* Decorative Objects */}
        <DecorativeObjects />
      </Canvas>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 glass p-4 rounded-lg max-w-sm">
        <h3 className="text-white font-semibold mb-2">🎮 Photorealistic Experience</h3>
        <p className="text-white text-sm mb-1">🖱️ <strong>Click</strong> to lock mouse and look around</p>
        <p className="text-white text-sm mb-1">⌨️ <strong>WASD</strong> or <strong>Arrow Keys</strong> to move</p>
        <p className="text-white text-sm">🎯 <strong>Click objects</strong> to interact (desk, bar, kitchen, etc.)</p>
        <p className="text-xs text-white/50 mt-2">Ultra-realistic materials & lighting</p>
      </div>
      
      {/* Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold glow-text mb-4">
          ANSH'S STUDIO
        </h1>
        <p className="text-lg text-white/60">
          Photorealistic 3D portfolio experience
        </p>
      </div>
    </div>
  )
}
