import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { useKeyboard } from "../hooks/useKeyboard"

const JUMP_MGN = 3
const MOV_MGN = 3

export const Player = () =>{
    const {moveForward, moveBackward, moveLeft, moveRight, jump} = useKeyboard()
    const {camera} = useThree()
    const [ref, api] = useSphere(()=>({
        mass: 1,
        type: 'Dynamic',
        position: [0,2,0]
    }))

    const vel = useRef([0,0,0])
    useEffect(()=>{
        api.velocity.subscribe((v)=> vel.current = v)
    }, [api.velocity])

    const pos = useRef([0,0,0])
    useEffect(()=>{
        api.position.subscribe((p)=> pos.current = p)
    }, [api.position])

    useFrame(()=>{
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))
        // api.velocity.set(0,0,0)
        const direction = new Vector3()
        const moveFrontVec = new Vector3(0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0))
        const moveSidesVec = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0 )

        direction
            .subVectors(moveFrontVec,moveSidesVec)
            .normalize()
            .multiplyScalar(MOV_MGN)
            .applyEuler(camera.rotation)
        api.velocity.set(direction.x, vel.current[1], direction.z)

        if(jump && Math.abs(vel.current[1]<0.05)){
            api.velocity.set(vel.current[0],JUMP_MGN,vel.current[2])
        }
    })

    return(
        <mesh ref={ref}>
        </mesh>
    )
}