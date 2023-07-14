import { useBox } from "@react-three/cannon"
import * as textures from "../images/textures"

export const Cube = ({pos, texture}) => {
    const [ref] = useBox(()=>({
        type: 'Static',
        pos
    }))
    const activeTexture = textures[texture+'Texture']
    return(
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial map={activeTexture} attach='material' />
        </mesh>
    )
}