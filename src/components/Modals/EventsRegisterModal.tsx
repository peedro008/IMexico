import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Text,
    HStack,
    VStack,
    Input,
    Textarea,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  
    Divider,
    Select,
    Container
  } from '@chakra-ui/react'
  import logomodal from '../../images/logomodal.png'
import { Link } from 'react-router-dom'


  interface contactProps{
    onClose:()=>void,
    isOpen:boolean,
   
    
}
export const EventsRegisterModal =({ onClose, isOpen}:contactProps) => {
  let mobile = window.innerWidth
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


    return (
      <>
      {mobile<750?
      <Container minWidth="100%" padding={0}>
    

        <Modal isOpen={isOpen} onClose={onClose} >
        
        <ModalOverlay />
        
        <ModalContent width={"90%"} height={"max-content"} display="flex" flexDirection={"column"}>
            <Box width={"100%"}>
            <ModalHeader display="flex" justifyContent="flex-start" alignItems="flex-start">
              <Image src={logomodal} margin="0 auto" marginTop="60px" marginBottom={"30px"}  height={"70px"} alt="IMéxico"/>
                {/* <VStack>
                    <Text>Contacto iMexico</Text>
                    <Text>Asesor de ventas</Text>
                </VStack> */}
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="#5B5B5B" fontSize="20px" textAlign={"center"} fontWeight={700}>¡Regístrate!</Text>
            <Text color="#5B5B5B" textAlign={"center"}  fontSize={"13px"}>Puedes registrarte en IMexico. Te mantendremos al tanto de todos los eventos que surjan y el registro se hará mas sensillo en el futuro.</Text>
          </ModalBody>
          <ModalFooter>
          
              <Box margin="0 auto" display={"flex"} flexDirection={"column"} >
              <Link to={"/register"}><Button display="flex" height="28px" width="237px" margin="10px auto" fontSize="13px" fontWeight="700" textAlign="center" border="2px solid #1D467C" color="white" backgroundColor="#1D467C" borderRadius="33.82px">Quiero registrarme</Button></Link>
              </Box>
          </ModalFooter>
          </Box>
          <Divider  width="80%" alignSelf={"center"} color="#7A7A7A" borderWidth="1px" borderColor="#7A7A7A"/>
          <Box width={"100%"}>
          <ModalBody marginTop="5px" alignItems={"center"} display="flex" flexDirection={"column"} >
            <Text marginBottom={"10px"} fontSize="15px" fontWeight="700"  textAlign="center" color="#5b5b5b">¿Prefieres dejarnos tus datos?</Text>
            <Text fontSize="15px" fontWeight="500" lineHeight={"15.26px"} textAlign="center" color="#5b5b5b">Registrate solo a este evento dejando tus datos en los campos.</Text>
            <Box display="flex" flexDirection={"column"} width={"85%"} height={"max-content"} justifyContent={"space-between"} alignItems="center">
              <Box display="flex" justifyContent={"left"} width="100%">
                <Text textAlign={"left"} marginTop="25px" fontSize={"11.84px"} color="#104b86" fontWeight={600}>Nombre completo (*)</Text>
              </Box>
              <Input marginBottom="5px" onChange={(e:any)=>setName(e.target.value)} borderWidth="1.01441px" borderColor="#666666" width={"100%"}  height="29.15px" borderRadius={"5.07px"} />
              <Box display="flex" justifyContent={"left"} width="100%">
               <Text display={"flex"} textAlign={"left"} fontSize={"11.84px"} color="#104b86" fontWeight={600} >E-mail (*)</Text>
               </Box>
              <Input marginBottom="10px" borderWidth="1.01441px" borderColor="#666666" width={"100%"} onChange={(e:any)=>setEmail(e.target.value)} height="29.15px" borderRadius={"5.07px"} type="email" />
              
             
          </Box> 
          <Button  marginY="20px" display="flex" height="28px" width="237px"  fontSize="13px" fontWeight="700" textAlign="center" border="2px solid #1D467C" color="white" backgroundColor="#1D467C" borderRadius="33.82px">Enviar</Button>
          </ModalBody>
          </Box>
        </ModalContent>
      </Modal>
     
      </Container>:
      
      <Modal isOpen={isOpen} onClose={onClose} >
        
        <ModalOverlay />
        
        <ModalContent minWidth={"747px"} height={"459px"} display="flex" flexDirection={"row"}>
            <Box width={"50%"}>
            <ModalHeader display="flex" justifyContent="flex-start" alignItems="flex-start">
              <Image src={logomodal} margin="0 auto" marginTop="60px" marginBottom={"30px"}  height={"70px"} alt="IMéxico"/>
                {/* <VStack>
                    <Text>Contacto iMexico</Text>
                    <Text>Asesor de ventas</Text>
                </VStack> */}
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text color="#5B5B5B" fontSize="20px" textAlign={"center"} fontWeight={700}>¡Regístrate!</Text>
            <Text paddingX="40px" color="#5B5B5B" textAlign={"center"}  fontSize={"15px"}>Puedes registrarte en IMexico. Te mantendremos al tanto de todos los eventos que surjan y el registro se hará mas sensillo en el futuro.</Text>
          </ModalBody>
          <ModalFooter>
          
          <Box margin="0 auto" display={"flex"} flexDirection={"column"} >
              <Link to={"/register"}><Button display="flex" height="28px" width="237px" margin="10px auto" fontSize="13px" fontWeight="700" textAlign="center" border="2px solid #1D467C" color="white" backgroundColor="#1D467C" borderRadius="33.82px">Quiero registrarme</Button></Link>
              </Box>
          </ModalFooter>
          </Box>
          <Divider orientation='vertical' height="80%" alignSelf={"center"} color="#7A7A7A" borderWidth="1px" borderColor="#7A7A7A"/>
          <Box width={"50%"} paddingTop="40px">
          <ModalBody marginTop="40px" alignItems={"center"} display="flex" flexDirection={"column"} >
          <Text marginBottom={"10px"} fontSize="20px" fontWeight="700"  textAlign="center" color="#5b5b5b">¿Prefieres dejarnos tus datos?</Text>
          <Text fontSize="15px" fontWeight="500" lineHeight={"15.26px"} textAlign="center" color="#5b5b5b">Registrate solo a este evento dejando tus datos en los campos.</Text>
            <Box display="flex" flexDirection={"column"} width={"234.9px"} height={"max-content"} justifyContent={"space-between"}>
              <Text marginBottom="10px" textAlign={"left"} marginTop="35px" fontSize={"11.84px"} color="#104b86" fontWeight={600}>Nombre completo (*)</Text>
              <Input onChange={(e:any)=>setName(e.target.value)} borderWidth="1.01441px" borderColor="#666666" width={"234.9px"}  height="29.15px" borderRadius={"5.07px"} marginBottom={"15px"} />
              <Text marginBottom={"10px"} fontSize={"11.84px"} color="#104b86" fontWeight={600} >E-mail (*)</Text>
              <Input borderWidth="1.01441px" borderColor="#666666" width={"234.9px"} onChange={(e:any)=>setEmail(e.target.value)} height="29.15px" borderRadius={"5.07px"} type="email" />
           
              
             
          </Box> 
          <Button  marginTop="32px" display="flex" height="28px" width="237px"  fontSize="13px" fontWeight="700" textAlign="center" border="2px solid #1D467C" color="white" backgroundColor="#1D467C" borderRadius="33.82px">Enviar</Button>
          </ModalBody>
          </Box>
        </ModalContent>
      </Modal>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      }
      </>
    )
}