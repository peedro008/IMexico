import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, Container, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import registerback from '../../images/registerback.png'
import registerlogo from '../../images/registerLogo.svg'
import { RegisterModal } from '../Modals/RegisterModal'
import { useDisclosure } from '@chakra-ui/react'
import {  useDispatch } from 'react-redux'
import { User } from '../../interfaces/User'

interface registerProps{
    userInfo:User,
    registerUser:(user:string, password:string, email:string)=>void,
    registerReducer:any

}
export const Register = ({userInfo, registerUser, registerReducer}:registerProps) => {
    const [show, setShow] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user, setUser] = useState("")
    const [password, setPass] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch() 
    
          
    const handleClick = () => {
        
            registerUser(user, password, email)
            onOpen()
        
    }
    const showPass = () => {
        setShow(!show)
    }

    return (
        <>
        <Container backgroundImage={registerback} backgroundSize="cover" backgroundPosition="center" minHeight="100vh">
            <Image src={registerlogo} margin="0 auto" paddingY="50px"/>
            <Text fontSize="19px" fontWeight="700" color="#1D467C" textAlign="center" margin="0 auto">Registrarme</Text>
            <Container paddingY="20px">
            <Text fontSize="13px" fontWeight="600" color="#1D467C">Nombre de usuario</Text>
            <Input backgroundColor="white" value={user} onChange={(e:any)=>setUser(e.target.value)}/>
            <Text fontSize="13px" fontWeight="600" color="#1D467C">E-mail</Text>
            <Input backgroundColor="white" type="email" value={email} onChange={(e:any)=>setEmail(e.target.value)}/>
            <Text fontSize="13px" fontWeight="600" color="#1D467C">Contraseña</Text>
            <InputGroup size='md' onChange={(e:any)=>setPass(e.target.value)}>
            <Input backgroundColor="white"  value={password}  type={show ? 'text' : 'password'}/>
            <InputRightElement width='4.5rem'>
                { !show ? <ViewIcon onClick={showPass}/> : <ViewOffIcon onClick={showPass}/>} 
      </InputRightElement>
            </InputGroup>
            <Link to="/login"><Text paddingTop="20px" fontSize="13px" color="#1D467C" textAlign="center" margin="0 auto">¿Ya tienes cuenta? <strong>Iniciar sesión</strong></Text></Link>
            </Container>
            <Button onClick={handleClick} display="flex"  width="132px" margin="0 auto 30px" fontSize="12px" color="white" backgroundColor="#1D467C" borderRadius="33px" >Registrarme</Button>
        </Container>
        <RegisterModal  isOpen={isOpen} onClose={onClose} user={user} registerReducer={registerReducer} />
       </>
    )
}
