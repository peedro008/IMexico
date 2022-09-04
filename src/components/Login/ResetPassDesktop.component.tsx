import { Button, Container, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import resetdesktopback from '../../images/resetdesktopback.png'
import registerlogo from '../../images/registerLogo.svg'
import { ResetModal } from '../Modals/ResetModal'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import * as resetAction from "../../store/actions/requestReset.actions"
interface resetPassProps{
    
    
    requestResetReducer:any
}
export const ResetPassDesktop = (requestResetReducer: resetPassProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    

    const handleClick = () => {
        dispatch(resetAction.requestReset({user, email}))
        //resetPass(user, email)
        onOpen()
    }    
    return (
        <>
        <Container minWidth="100%" backgroundImage={resetdesktopback} backgroundSize="cover" display="flex" padding="70px">
            <Image src={registerlogo} boxSize="250px" objectFit="contain" margin="0 auto" paddingY="50px"/>
            <Container backgroundColor="#ffffff76" borderRadius="20px" width="387px" padding="45px 20px 20px">
            <Text fontSize="19px" fontWeight="700" color="#1D467C" textAlign="center" margin="0 auto">Recuperar contraseña</Text>
            <Container paddingY="20px">
            <Text fontSize="13px" fontWeight="600" color="#1D467C" >Nombre de usuario</Text>
            <Input width={"325px"} backgroundColor="white" value={user}onChange={(e:any)=>setUser(e.target.value)}/>
            <Text fontSize="13px" fontWeight="600" color="#1D467C">E-mail</Text>
            <Input width={"325px"} backgroundColor="white" type="email"  value={email} onChange={(e:any)=>setEmail(e.target.value)}/>
            <Link to="/login"><Text paddingTop="20px" fontSize="13px" color="#1D467C" textAlign="center" margin="0 auto">¿No tienes cuenta? <strong>Registrate</strong></Text></Link>
            <Link to="/login"><Text paddingTop="20px" fontSize="13px" color="#1D467C" textAlign="center" margin="0 auto">¿Ya tienes cuenta? <strong>Iniciar sesión</strong></Text></Link>
            </Container>
            <Button display="flex" height={"33px"} width="152px" margin="0 auto 30px" fontSize="16px" fontWeight="500" color="white" background="linear-gradient(180deg, #007BB8 0%, #1D467C 100%)" borderRadius="46.0635px" filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))" onClick={handleClick}>Enviar</Button>
        </Container>
        </Container>
        <ResetModal isOpen={isOpen} onClose={onClose} requestResetReducer={requestResetReducer}/>
        </>
    )
}
