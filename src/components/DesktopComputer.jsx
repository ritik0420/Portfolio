import { useGLTF } from '@react-three/drei';

const DesktopComputer = (props) => {
  const { scene } = useGLTF('models/desktop_computer.glb');

  // Check if scene is loaded
  if (!scene) {
    return null;
  }

  return (
    <group {...props} dispose={null}>
      {/* Clone the scene to avoid issues with multiple instances */}
      <primitive object={scene.clone()} />
    </group>
  );
};

useGLTF.preload('models/desktop_computer.glb');
export default DesktopComputer;
