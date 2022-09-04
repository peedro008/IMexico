import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, Container, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import loginback from '../../images/loginback.png'
import registerlogo from '../../images/registerLogo.svg'
import { useDisclosure } from '@chakra-ui/react'
import { LoginModal } from '../Modals/LoginModal'
import { User } from '../../interfaces/User'

interface loginProps{
    userInfo:User,
    loginUser:(user:string, password:string)=>void,
    loginReducer:any

}

export const Login = ({userInfo, loginUser, loginReducer}:loginProps) => {
    const [show, setShow] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user, setUser] = useState("")
    const [password, setPass] = useState("")
      const hidePass = () => {
        setShow(!show)
    }
    
 


    const handleClick = () => {
        if(user!=="" && password!==""){
           loginUser(user, password)
           onOpen()
        }
       
    }
   
    return (
        <>
        <Container backgroundImage={loginback} backgroundSize={'cover'} backgroundPosition={'center'} paddingBottom="20px" minHeight="90vh">
            <Image src={registerlogo} margin="0 auto" paddingY="50px"/>
            <Text fontSize="19px" fontWeight="700" color="#1D467C" textAlign="center" margin="0 auto">Iniciar sesión</Text>
            <Container paddingY="20px">
            <Text fontSize="13px" fontWeight="600" color="#1D467C">Nombre de usuario</Text>
            <Input backgroundColor="white" value={user} onChange={(e:any)=>setUser(e.target.value)}/>
            <Text fontSize="13px" fontWeight="600" color="#1D467C">Contraseña</Text>
            <InputGroup size='md' onChange={(e:any)=>setPass(e.target.value)}>
            <Input  value={password} backgroundColor="white" type={show ? 'text' : 'password'}/>
            <InputRightElement width='4.5rem'>
                { !show ? <ViewIcon onClick={hidePass}/> : <ViewOffIcon onClick={hidePass}/>} 
      </InputRightElement>
            </InputGroup>
            <Link to="/register"><Text paddingTop="20px" fontSize="13px" color="#1D467C" textAlign="center" margin="0 auto">¿No tienes cuenta? <strong>Registrate</strong></Text></Link>
            <Link to="/resetpass"><Text paddingTop="20px" fontSize="13px" color="#1D467C" textAlign="center" margin="0 auto"><strong>Olvidé mi contraseña</strong></Text></Link>
            </Container>
            <Button  height={"33px"}  onClick={handleClick} disabled={show} display="flex"  width="132px" margin="0 auto 30px" fontSize="12px" color="white" background="linear-gradient(180deg, #007BB8 0%, #1D467C 100%)" borderRadius="46.0635px" filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))" >Iniciar sesión</Button>
        </Container>
        <LoginModal isOpen={isOpen} onClose={onClose} user={user} loginReducer={loginReducer} />
        </>
    )
}
