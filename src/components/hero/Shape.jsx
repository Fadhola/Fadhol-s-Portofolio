/* eslint-disable react/no-unknown-property */

import { MeshDistortMaterial, Sphere } from '@react-three/drei'

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#36ba98"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      {/* <meshStandardMaterial color="red" />s */}
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 3]} />
      {/* <directionalLight color="#36ba98" position={[1, 2, 3]} /> */}
      {/* <OrbitControls enableZoom={false} /> */}
    </>
  )
}

export default Shape
