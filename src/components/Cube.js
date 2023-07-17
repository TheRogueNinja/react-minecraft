import { useBox } from "@react-three/cannon"
import * as textures from "../images/textures"
import { useStore } from "../hooks/useStore"
import { useState } from "react"

export const Cube = ({position, texture}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [ref] = useBox(() => ({
		type: 'Static',
		position
	}))
    const activeTexture = textures[texture+'Texture']
    const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])
    return(
        <mesh
            onPointerMove={(e)=>{
                e.stopPropagation()
                setIsHovered(true)
            }}
            onPointerOut={(e)=>{
                e.stopPropagation()
                setIsHovered(false)
            }}
            onClick = {(e)=>{
                e.stopPropagation()
                const clickedFace = Math.floor(e.faceIndex/2)
                const {x,y,z} = ref.current.position
                console.log(clickedFace)
                if(e.altKey){
                    removeCube(x,y,z)
                }
                else{
                    switch (clickedFace) {
                        case 0:
                            addCube(x+1, y ,z)
                            break;
                        case 1:
                            addCube(x-1, y ,z)
                            break;
                        case 2:
                            addCube(x, y+1 ,z)
                            break;
                        case 3:
                            addCube(x, y-1 ,z)
                            break;
                        case 4:
                            addCube(x, y ,z+1)
                            break;
                        case 5:
                            addCube(x, y ,z-1)
                            break;
                        default:
                            break;
                    }
                }
            }} 
            ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial 
                color={isHovered ? 'grey' : 'white' }
                map={activeTexture} 
                transparent={true}
                opacity={texture === 'glass' ? 0.65 : 1}
                attach="material" />
        </mesh>
    )
}