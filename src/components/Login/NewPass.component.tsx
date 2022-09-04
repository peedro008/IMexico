import { Button, Container, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import newpass from '../../images/newpass.png'
import registerlogo from '../../images/registerLogo.svg'
import { useDisclosure } from '@chakra-ui/react'
import { NewPassModal } from '../Modals/NewPassModal'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'


interface NewPassProps{
    
    resetPass:(password:string)=>void,
    resetReducer:any

}

export const NewPass = ({resetPass, resetReducer}:NewPassProps) => {
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
        <Container backgroundImage={newpass} paddingBottom="20px"  backgroundSize={'cover'} minHeight="90vh">
            <Image src={registerlogo} margin="0 auto" paddingY="50px"/>
            <Text fontSize="19px" fontWeight="700" color="#1D467C" textAlign="center" margin="0 auto">Ingresá tu nueva contraseña</Text>
            <Container paddingY="20px">
            <Text fontSize="13px" fontWeight="600" color="#1D467C">Nueva contraseña</Text>
            <InputGroup size='md'>
            <Input backgroundColor="white" type={show ? 'text' : 'password'} value={password} onChange={(e:any)=>setPassword(e.target.value)}/>
            <InputRightElement width='4.5rem'>
                { !show ? <ViewIcon onClick={hidePass}/> : <ViewOffIcon onClick={hidePass}/>} 
      </InputRightElement>
            </InputGroup>
            <Text fontSize="13px" fontWeight="600" color="#1D467C">Repetir contraseña</Text>
            <InputGroup size='md'>
            <Input backgroundColor="white" type={show ? 'text' : 'password'} value={repeatPass} onChange={(e:any)=>setRepeatPass(e.target.value)}/>
            <InputRightElement width='4.5rem'>
                { !show ? <ViewIcon onClick={hidePass}/> : <ViewOffIcon onClick={hidePass}/>} 
      </InputRightElement>
            </InputGroup> 
            </Container>
            <Button display="flex"  width="150px" margin="0 auto 30px" fontSize="12px" color="white"  height={"33px"}  background="linear-gradient(180deg, #007BB8 0%, #1D467C 100%)" borderRadius="46.0635px" filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))" backgroundColor="#1D467C"  onClick={handleClick}>Ingresar</Button>
        </Container>
        <NewPassModal isOpen={isOpen} onClose={onClose} resetReducer={resetReducer}/> 
        </>
    )
}
