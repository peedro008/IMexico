import { Button, Container, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newpassdesktopback from '../../images/newpassdesktopback.png'
import registerlogo from '../../images/registerLogo.svg'
import { NewPassModal } from '../Modals/NewPassModal'
import { useDisclosure } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'


interface NewPassProps{
    
    resetPass:(password:string)=>void,
    resetReducer:any

}

export const NewPassDesktop = ({resetPass, resetReducer}:NewPassProps) => {
    const [show, setShow] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [password, setPassword] = useState("")
    const [repeatPass, setRepeatPass] = useState("")
   
    const handleClick = () => {
        if(password===repeatPass){
            resetPass(password)
            onOpen()
        }
    }    
    const hidePass = () => {
        setShow(!show)
    }
    return (
        <>
        <Container minWidth="100%" backgroundImage={newpassdesktopback} backgroundSize="cover" display="flex" padding="70px">
            <Image src={registerlogo} boxSize="250px" objectFit="contain" margin="0 auto" paddingY="50px"/>
            <Container width="387px" backgroundColor="#ffffff76" borderRadius="20px"  padding="45px 20px 20px" marginBottom="200px">
            <Text fontSize="19px" fontWeight="700" color="#1D467C" textAlign="center" margin="0 auto">Recuperar contraseña</Text>
            <Container paddingY="20px">
            <Text fontSize="13px" fontWeight="600" color="#1D467C">Nueva contraseña</Text>
            <InputGroup size='md'>
            <Input width={"325px"} backgroundColor="white" type={show ? 'text' : 'password'} onChange={(e:any)=>setPassword(e.target.value)}/>
            <InputRightElement width='4.5rem'>
                { !show ? <ViewIcon onClick={hidePass}/> : <ViewOffIcon onClick={hidePass}/>} 
      </InputRightElement>
            </InputGroup>
            <Text fontSize="13px" fontWeight="600" color="#1D467C">Repetir contraseña</Text>
            <InputGroup size='md'>
            <Input width={"325px"} backgroundColor="white" type={show ? 'text' : 'password'} onChange={(e:any)=>setRepeatPass(e.target.value)}/>
            <InputRightElement width='4.5rem'>
                { !show ? <ViewIcon onClick={hidePass}/> : <ViewOffIcon onClick={hidePass}/>} 
      </InputRightElement>
            </InputGroup> 
            </Container>
            <Button disabled={password==repeatPass?false:true} display="flex"  height={"33px"} width="152px" margin="0 auto 30px" fontSize="16px" fontWeight="500" color="white" background="linear-gradient(180deg, #007BB8 0%, #1D467C 100%)" borderRadius="46.0635px" filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))" onClick={handleClick}>Ingresar</Button>
        </Container>
        </Container>
        <NewPassModal isOpen={isOpen} onClose={onClose} resetReducer={resetReducer}/>
        </>
    )
}