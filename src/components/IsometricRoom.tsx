'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Cylinder, Plane, RoundedBox, Environment, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

// Isometric Room Structure
function Room() {
  return (
    <group>
      {/* Floor with wood pattern */}
      <Plane args={[12, 12]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.4} />
      </Plane>
      
      {/* Wood planks */}
      {Array.from({ length: 8 }, (_, i) => (
        <Plane key={i} args={[12, 0.02]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, -5.5 + i * 1.4]}>
          <meshStandardMaterial color="#654321" roughness={0.6} />
        </Plane>
      ))}
      
      {/* Back Wall */}
      <Plane args={[12, 5]} position={[0, 2.5, -6]} receiveShadow>
        <meshStandardMaterial color="#F5F0E8" roughness={0.9} />
      </Plane>
      
      {/* Left Wall */}
      <Plane args={[12, 5]} rotation={[0, Math.PI / 2, 0]} position={[-6, 2.5, 0]} receiveShadow>
        <meshStandardMaterial color="#F5F0E8" roughness={0.9} />
      </Plane>
      
      {/* Right Wall */}
      <Plane args={[12, 5]} rotation={[0, -Math.PI / 2, 0]} position={[6, 2.5, 0]} receiveShadow>
        <meshStandardMaterial color="#F5F0E8" roughness={0.9} />
      </Plane>
      
      {/* Ceiling */}
      <Plane args={[12, 12]} rotation={[Math.PI / 2, 0, 0]} position={[0, 5, 0]}>
        <meshStandardMaterial color="#FEFEFE" roughness={0.9} />
      </Plane>
      
      {/* Window */}
      <RoundedBox args={[3, 2, 0.02]} position={[2, 3.5, -5.99]} radius={0.02}>
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.3} />
      </RoundedBox>
      
      {/* Window Frame */}
      <RoundedBox args={[3.1, 2.1, 0.05]} position={[2, 3.5, -5.97]} radius={0.01}>
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </RoundedBox>
    </group>
  )
}

// Bed in corner
function Bed() {
  return (
    <group position={[3, 0, 3]}>
      {/* Bed Frame */}
      <RoundedBox args={[3, 0.3, 4]} position={[0, 0.15, 0]} radius={0.05} castShadow receiveShadow>
        <meshStandardMaterial color="#654321" roughness={0.4} />
      </RoundedBox>
      
      {/* Mattress */}
      <RoundedBox args={[2.8, 0.4, 3.8]} position={[0, 0.5, 0]} radius={0.08} castShadow receiveShadow>
        <meshStandardMaterial color="#F5F5DC" roughness={0.8} />
      </RoundedBox>
      
      {/* Messy Bedding */}
      <RoundedBox args={[2.6, 0.2, 3.6]} position={[0.2, 0.8, 0.1]} radius={0.1} rotation={[0, 0.1, 0]} castShadow>
        <meshStandardMaterial color="#4682B4" roughness={0.9} />
      </RoundedBox>
      
      {/* Pillows */}
      <RoundedBox args={[0.8, 0.3, 0.6]} position={[-0.8, 0.85, -1.4]} radius={0.15} rotation={[0, 0.3, 0]} castShadow>
        <meshStandardMaterial color="#F0F8FF" roughness={0.9} />
      </RoundedBox>
      <RoundedBox args={[0.8, 0.25, 0.6]} position={[0.3, 0.85, -1.2]} radius={0.15} rotation={[0, -0.2, 0]} castShadow>
        <meshStandardMaterial color="#E6E6FA" roughness={0.9} />
      </RoundedBox>
      
      {/* Bed Side Table */}
      <RoundedBox args={[0.8, 1.2, 0.6]} position={[-2.2, 0.6, -1]} radius={0.03} castShadow receiveShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.3} />
      </RoundedBox>
      
      {/* Lamp on side table */}
      <Cylinder args={[0.05, 0.05, 0.8]} position={[-2.2, 1.6, -1]} castShadow>
        <meshStandardMaterial color="#2F2F2F" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.3, 0.25, 0.4]} position={[-2.2, 2.2, -1]} castShadow>
        <meshStandardMaterial color="#F5F5DC" emissive="#FFFAF0" emissiveIntensity={0.2} transparent opacity={0.8} />
      </Cylinder>
    </group>
  )
}

// Closet
function Closet() {
  return (
    <group position={[-4.5, 0, -4.5]}>
      {/* Closet Body */}
      <RoundedBox args={[2, 4, 1]} position={[0, 2, 0]} radius={0.02} castShadow receiveShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.3} />
      </RoundedBox>
      
      {/* Closet Doors */}
      <RoundedBox args={[0.95, 3.8, 0.05]} position={[-0.48, 2, 0.52]} radius={0.02} castShadow>
        <meshStandardMaterial color="#A0522D" roughness={0.4} />
      </RoundedBox>
      <RoundedBox args={[0.95, 3.8, 0.05]} position={[0.48, 2, 0.52]} radius={0.02} castShadow>
        <meshStandardMaterial color="#A0522D" roughness={0.4} />
      </RoundedBox>
      
      {/* Door Handles */}
      <Sphere args={[0.04]} position={[-0.2, 2, 0.57]} castShadow>
        <meshStandardMaterial color="#C0C0C0" metalness={0.9} roughness={0.1} />
      </Sphere>
      <Sphere args={[0.04]} position={[0.2, 2, 0.57]} castShadow>
        <meshStandardMaterial color="#C0C0C0" metalness={0.9} roughness={0.1} />
      </Sphere>
    </group>
  )
}

// Bean Bags
function BeanBags() {
  return (
    <group>
      {/* Bean Bag 1 */}
      <Sphere args={[0.8]} position={[-2, 0.4, 2]} scale={[1, 0.6, 1]} castShadow receiveShadow>
        <meshStandardMaterial color="#DC143C" roughness={0.9} />
      </Sphere>
      
      {/* Bean Bag 2 */}
      <Sphere args={[0.7]} position={[1, 0.35, 4.5]} scale={[1, 0.6, 1]} castShadow receiveShadow>
        <meshStandardMaterial color="#32CD32" roughness={0.9} />
      </Sphere>
      
      {/* Bean Bag 3 - smaller */}
      <Sphere args={[0.6]} position={[-4, 0.3, 1]} scale={[1, 0.6, 1]} castShadow receiveShadow>
        <meshStandardMaterial color="#4B0082" roughness={0.9} />
      </Sphere>
    </group>
  )
}

// Desk Setup (Clickable)
function DeskSetup({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group 
      position={[-4, 0, -2]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Desk */}
      <RoundedBox args={[3, 0.08, 1.5]} position={[0, 0.75, 0]} radius={0.02} castShadow receiveShadow>
        <meshStandardMaterial color={hovered ? "#CD853F" : "#8B4513"} roughness={0.2} metalness={0.1} />
      </RoundedBox>
      
      {/* Desk Legs */}
      <Cylinder args={[0.03, 0.03, 1.5]} position={[-1.2, 0.37, -0.6]} castShadow>
        <meshStandardMaterial color="#2F2F2F" roughness={0.1} metalness={0.8} />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 1.5]} position={[1.2, 0.37, -0.6]} castShadow>
        <meshStandardMaterial color="#2F2F2F" roughness={0.1} metalness={0.8} />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 1.5]} position={[-1.2, 0.37, 0.6]} castShadow>
        <meshStandardMaterial color="#2F2F2F" roughness={0.1} metalness={0.8} />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 1.5]} position={[1.2, 0.37, 0.6]} castShadow>
        <meshStandardMaterial color="#2F2F2F" roughness={0.1} metalness={0.8} />
      </Cylinder>
      
      {/* Monitor */}
      <RoundedBox args={[1.2, 0.8, 0.08]} position={[0, 1.5, -0.5]} radius={0.03} castShadow>
        <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.8} />
      </RoundedBox>
      <RoundedBox args={[1.1, 0.7, 0.01]} position={[0, 1.5, -0.46]} radius={0.02}>
        <meshStandardMaterial color="#1a1a2e" emissive="#2980b9" emissiveIntensity={0.4} />
      </RoundedBox>
      
      {/* Laptop */}
      <RoundedBox args={[0.8, 0.6, 0.02]} position={[0.8, 0.8, 0.2]} rotation={[-0.2, 0, 0]} radius={0.03} castShadow>
        <meshStandardMaterial color="#E5E5E5" roughness={0.1} metalness={0.8} />
      </RoundedBox>
      
      {/* Keyboard */}
      <RoundedBox args={[1, 0.3, 0.04]} position={[0, 0.8, 0.5]} radius={0.02} castShadow>
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} />
      </RoundedBox>
      
      {/* Mouse */}
      <RoundedBox args={[0.08, 0.05, 0.03]} position={[0.6, 0.8, 0.3]} radius={0.01} castShadow>
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.3} />
      </RoundedBox>
      
      {/* Coffee Mug */}
      <Cylinder args={[0.06, 0.05, 0.12]} position={[-1, 0.86, 0.3]} castShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </Cylinder>
      
      {/* Papers and clutter */}
      <RoundedBox args={[0.3, 0.4, 0.01]} position={[1, 0.8, -0.2]} rotation={[0, 0.3, 0]} castShadow>
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </RoundedBox>
      <RoundedBox args={[0.25, 0.35, 0.01]} position={[1.2, 0.81, 0]} rotation={[0, -0.2, 0]} castShadow>
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </RoundedBox>
      
      {hovered && (
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.15}
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

// Bar Setup (Clickable)
function BarSetup({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group 
      position={[4, 0, -4]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Bar Counter */}
      <RoundedBox args={[2.5, 0.15, 1]} position={[0, 0.8, 0]} radius={0.02} castShadow receiveShadow>
        <meshStandardMaterial color={hovered ? "#A0522D" : "#8B4513"} roughness={0.2} />
      </RoundedBox>
      
      {/* Bar Support */}
      <RoundedBox args={[2.5, 0.8, 0.2]} position={[0, 0.4, 0.4]} radius={0.01} castShadow receiveShadow>
        <meshStandardMaterial color="#654321" roughness={0.3} />
      </RoundedBox>
      
      {/* Bottles */}
      <Cylinder args={[0.04, 0.04, 0.6]} position={[-0.8, 1.25, -0.3]} castShadow>
        <meshStandardMaterial color="#228B22" transparent opacity={0.8} />
      </Cylinder>
      <Cylinder args={[0.04, 0.04, 0.7]} position={[-0.4, 1.3, -0.3]} castShadow>
        <meshStandardMaterial color="#FFD700" transparent opacity={0.8} />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 0.5]} position={[0, 1.2, -0.3]} castShadow>
        <meshStandardMaterial color="#DC143C" transparent opacity={0.8} />
      </Cylinder>
      <Cylinder args={[0.04, 0.04, 0.8]} position={[0.4, 1.35, -0.3]} castShadow>
        <meshStandardMaterial color="#8B4513" transparent opacity={0.8} />
      </Cylinder>
      
      {/* Cocktail Shaker */}
      <Cylinder args={[0.08, 0.06, 0.5]} position={[0.8, 1.2, 0.2]} castShadow>
        <meshStandardMaterial color="#C0C0C0" metalness={0.9} roughness={0.1} />
      </Cylinder>
      
      {/* Glasses */}
      <Cylinder args={[0.05, 0.04, 0.15]} position={[-0.6, 0.87, 0.3]} castShadow>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
      </Cylinder>
      <Cylinder args={[0.05, 0.04, 0.15]} position={[-0.3, 0.87, 0.3]} castShadow>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
      </Cylinder>
      
      {hovered && (
        <Text
          position={[0, 2, 0]}
          fontSize={0.15}
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

// Scattered Clothes and Items
function ScatteredItems() {
  return (
    <group>
      {/* T-shirt on floor */}
      <RoundedBox args={[0.8, 0.6, 0.02]} position={[-1, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0.3]} radius={0.05}>
        <meshStandardMaterial color="#FF4500" roughness={0.9} />
      </RoundedBox>
      
      {/* Jeans on chair */}
      <RoundedBox args={[0.6, 1.2, 0.08]} position={[-2, 1.2, 3.8]} rotation={[0.2, 0.1, 0]} castShadow>
        <meshStandardMaterial color="#4169E1" roughness={0.8} />
      </RoundedBox>
      
      {/* Hoodie draped */}
      <RoundedBox args={[1, 0.8, 0.1]} position={[2.5, 0.9, 4.5]} rotation={[0, 0, 0.2]} castShadow>
        <meshStandardMaterial color="#2F2F2F" roughness={0.9} />
      </RoundedBox>
      
      {/* Sneakers */}
      <RoundedBox args={[0.3, 0.15, 0.6]} position={[1, 0.075, 1]} radius={0.05} castShadow>
        <meshStandardMaterial color="#FFFFFF" roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[0.3, 0.15, 0.6]} position={[1.4, 0.075, 0.8]} radius={0.05} rotation={[0, 0.3, 0]} castShadow>
        <meshStandardMaterial color="#FFFFFF" roughness={0.6} />
      </RoundedBox>
      
      {/* Books scattered */}
      <RoundedBox args={[0.2, 0.3, 0.04]} position={[-0.5, 0.02, -1]} rotation={[-Math.PI / 2, 0, 0.5]} radius={0.01} castShadow>
        <meshStandardMaterial color="#800080" roughness={0.8} />
      </RoundedBox>
      <RoundedBox args={[0.2, 0.3, 0.04]} position={[-0.3, 0.06, -0.8]} rotation={[-Math.PI / 2, 0, -0.3]} radius={0.01} castShadow>
        <meshStandardMaterial color="#008000" roughness={0.8} />
      </RoundedBox>
      
      {/* Gaming controller */}
      <RoundedBox args={[0.2, 0.12, 0.06]} position={[0.5, 0.03, 3]} radius={0.02} castShadow>
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} />
      </RoundedBox>
      
      {/* Phone */}
      <RoundedBox args={[0.08, 0.16, 0.01]} position={[-0.8, 0.8, 0.4]} radius={0.01} castShadow>
        <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.8} />
      </RoundedBox>
      
      {/* Headphones */}
      <group position={[1.5, 0.8, -0.3]}>
        <Cylinder args={[0.15, 0.15, 0.03]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} />
        </Cylinder>
        <Cylinder args={[0.02, 0.02, 0.3]} position={[0, 0.15, 0]} castShadow>
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} />
        </Cylinder>
      </group>
      
      {/* Backpack */}
      <RoundedBox args={[0.5, 0.8, 0.3]} position={[-5, 0.4, 2]} radius={0.05} castShadow receiveShadow>
        <meshStandardMaterial color="#2F4F4F" roughness={0.8} />
      </RoundedBox>
      
      {/* Water bottle */}
      <Cylinder args={[0.05, 0.05, 0.5]} position={[2.8, 0.25, 2.5]} castShadow>
        <meshStandardMaterial color="#1E90FF" transparent opacity={0.7} />
      </Cylinder>
    </group>
  )
}

// Tennis Equipment (Clickable)
function TennisEquipment({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group 
      position={[4.5, 0, 2]} 
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Tennis Bag */}
      <Cylinder args={[0.25, 0.25, 1.5]} position={[0, 0.75, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <meshStandardMaterial color={hovered ? "#32CD32" : "#228B22"} roughness={0.8} />
      </Cylinder>
      
      {/* Tennis Racket */}
      <group position={[0.6, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
        <Cylinder args={[0.02, 0.02, 0.8]} position={[0, -0.3, 0]} castShadow>
          <meshStandardMaterial color="#8B4513" roughness={0.6} />
        </Cylinder>
        <Cylinder args={[0.25, 0.25, 0.02]} position={[0, 0.25, 0]} castShadow>
          <meshStandardMaterial color="#FF4500" wireframe />
        </Cylinder>
      </group>
      
      {/* Tennis Balls */}
      <Sphere args={[0.06]} position={[-0.5, 0.06, 0.3]} castShadow>
        <meshStandardMaterial color="#FFFF00" roughness={0.7} />
      </Sphere>
      <Sphere args={[0.06]} position={[-0.3, 0.06, 0.1]} castShadow>
        <meshStandardMaterial color="#FFFF00" roughness={0.7} />
      </Sphere>
      
      {hovered && (
        <Text
          position={[0, 2, 0]}
          fontSize={0.15}
          color="#32CD32"
          anchorX="center"
          anchorY="middle"
        >
          TENNIS
        </Text>
      )}
    </group>
  )
}

// Random Room Details
function RoomDetails() {
  return (
    <group>
      {/* Ceiling Light */}
      <Cylinder args={[0.4, 0.4, 0.08]} position={[0, 4.9, 0]} castShadow>
        <meshStandardMaterial color="#F5F5DC" emissive="#FFFAF0" emissiveIntensity={0.6} />
      </Cylinder>
      
      {/* Plant in corner */}
      <Cylinder args={[0.15, 0.12, 0.2]} position={[-5.5, 0.1, -5.5]} castShadow>
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </Cylinder>
      <Sphere args={[0.3]} position={[-5.5, 0.5, -5.5]} castShadow>
        <meshStandardMaterial color="#228B22" roughness={0.8} />
      </Sphere>
      
      {/* Small plant */}
      <Cylinder args={[0.1, 0.08, 0.15]} position={[2, 0.075, -5.5]} castShadow>
        <meshStandardMaterial color="#CD853F" roughness={0.8} />
      </Cylinder>
      <Sphere args={[0.2]} position={[2, 0.3, -5.5]} castShadow>
        <meshStandardMaterial color="#90EE90" roughness={0.6} />
      </Sphere>
      
      {/* Rug */}
      <RoundedBox args={[4, 0.02, 3]} position={[0, 0.01, 0]} radius={0.1} rotation={[-Math.PI / 2, 0, 0.1]} receiveShadow>
        <meshStandardMaterial color="#8B0000" roughness={0.9} />
      </RoundedBox>
      
      {/* Wall posters */}
      <RoundedBox args={[1, 1.2, 0.01]} position={[-5.99, 2.5, 1]} radius={0.02}>
        <meshStandardMaterial color="#4169E1" roughness={0.9} />
      </RoundedBox>
      <RoundedBox args={[0.8, 1, 0.01]} position={[-5.99, 3, -2]} radius={0.02}>
        <meshStandardMaterial color="#FFD700" roughness={0.9} />
      </RoundedBox>
      
      {/* Cables on floor */}
      <Cylinder args={[0.01, 0.01, 2]} position={[-2, 0.005, -1]} rotation={[0, 0, Math.PI / 2]} receiveShadow>
        <meshStandardMaterial color="#333333" roughness={0.8} />
      </Cylinder>
      <Cylinder args={[0.01, 0.01, 1.5]} position={[-3, 0.005, -0.5]} rotation={[0, 0.5, Math.PI / 2]} receiveShadow>
        <meshStandardMaterial color="#333333" roughness={0.8} />
      </Cylinder>
    </group>
  )
}

export default function IsometricRoom() {
  return (
    <div className="w-full h-screen">
      <Canvas 
        camera={{ 
          position: [15, 12, 15], 
          fov: 50,
        }}
        shadows
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1
        }}
      >
        {/* Professional Environment */}
        <Environment preset="studio" background={false} />
        
        {/* Soft Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 15, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={50}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
        />
        
        {/* Soft fill light */}
        <pointLight position={[-10, 8, 10]} intensity={0.8} color="#FFE4B5" />
        <pointLight position={[10, 8, -10]} intensity={0.6} color="#E6F3FF" />
        
        {/* Limited Orbit Controls - can't go inside */}
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          maxDistance={25}
          minDistance={8}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
          target={[0, 2, 0]}
        />
        
        {/* Room Structure */}
        <Room />
        
        {/* Main Furniture */}
        <Bed />
        <Closet />
        <BeanBags />
        
        {/* Interactive Objects */}
        <DeskSetup onClick={() => console.log('Clicked desk')} />
        <BarSetup onClick={() => console.log('Clicked bar')} />
        <TennisEquipment onClick={() => console.log('Clicked tennis')} />
        
        {/* Room Clutter and Details */}
        <ScatteredItems />
        <RoomDetails />
        
      </Canvas>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 glass p-4 rounded-lg max-w-sm">
        <h3 className="text-white font-semibold mb-2">🏠 Isometric Room View</h3>
        <p className="text-white text-sm mb-1">🖱️ <strong>Drag</strong> to orbit around the room</p>
        <p className="text-white text-sm mb-1">🔍 <strong>Scroll</strong> to zoom in/out</p>
        <p className="text-white text-sm">🎯 <strong>Click</strong> highlighted objects to interact</p>
        <p className="text-xs text-white/50 mt-2">A real lived-in space</p>
      </div>
      
      {/* Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold glow-text mb-4">
          ANSH'S ROOM
        </h1>
        <p className="text-lg text-white/60">
          A lived-in space - explore from outside
        </p>
      </div>
    </div>
  )
}
