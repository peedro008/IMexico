import React, { useEffect, useState } from 'react'
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
    Container,
    useDisclosure,
    Spinner
  } from '@chakra-ui/react'
  import { SendedModal } from './SendedModal'
  import logomodal from '../../images/logomodal.png'
import { Link } from 'react-router-dom'


  interface contactProps{
    phoneCallReducer: any
    onClose:()=>void,
    isOpen:boolean,
    phonecall:(name:string, email:string, phone:string, date:string, hour:string, reason:string )=>void,
    
}
export const ContactModal =({phonecall, onClose, isOpen, phoneCallReducer}:contactProps) => {
  let mobile = window.innerWidth
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [ copied, setCopied ] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText("+52 1 984 218 1599");
    setCopied(!copied)
  }
 
  
  const handleClick = () => {
   
  
      phonecall(name, email, phone, reason,"18:00", "17/11/1298")
      onOpenSendedModal()

  }
  const { 
    isOpen: isOpenSendedModal, 
    onOpen: onOpenSendedModal, 
    onClose: onCloseSendedModal 
} = useDisclosure()
    return (
      <Container minWidth="100%" padding={0}>
        {mobile > 750?

        <Modal isOpen={isOpen} onClose={onClose} >
        
        <ModalOverlay />
        
        <ModalContent minWidth={"747px"} height={"469px"} display="flex" flexDirection={"row"}>
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
            <Text color="#5B5B5B" fontSize="20px" textAlign={"center"} fontWeight={700}>Comunicate con nosotros</Text>
            <Text color="#5B5B5B" textAlign={"center"}  fontSize={"15px"}>Nuestro asesor de ventas siempre está a tu disposición.</Text>
          </ModalBody>
          <ModalFooter>
          
              <Box margin="0 auto" display={"flex"} flexDirection={"column"} >
              <Button onClick={handleCopy} disabled={copied} display="flex" height="28px" width="237px" margin="10px auto" fontSize="13px" fontWeight="700" textAlign="center" border="2px solid #1D467C" color="#1D467C" backgroundColor="white" borderRadius="33.82px">{ copied ? "Copiado" : "Llamar"}</Button>
              <a href="https://wa.link/zfmin0" target="_blank"><Button display="flex" height="28px" width="237px" margin="10px auto" fontSize="13px" fontWeight="700" textAlign="center" border="2px solid #1D467C" color="white" backgroundColor="#1D467C" borderRadius="33.82px"><Text fontSize="13px" color="white">Whatsapp</Text></Button></a>
              </Box>
          </ModalFooter>
          </Box>
          <Divider orientation='vertical' height="80%" alignSelf={"center"} color="#7A7A7A" borderWidth="1px" borderColor="#7A7A7A"/>
          <Box width={"50%"}>
          <ModalBody marginTop="40px" alignItems={"center"} display="flex" flexDirection={"column"} >
            <Text  fontSize="15px" fontWeight="700"  textAlign="center" color="#5b5b5b">¿Prefieres programar una llamada?</Text>
            <Text fontSize="15px" fontWeight="500"  textAlign="center" color="#5b5b5b">Dejanos tus datos y un asesor se pondrá en contacto.</Text>
            <Box display="flex" flexDirection={"column"} width={"234.9px"} height={"240px"} justifyContent={"space-between"}>
              <Text textAlign={"left"} marginTop="25px" fontSize={"11.84px"} color="#104b86" fontWeight={600}>Nombre completo (*)</Text>
              <Input onChange={(e:any)=>setName(e.target.value)} borderWidth="1.01441px" borderColor="#666666" width={"234.9px"}  height="29.15px" borderRadius={"5.07px"} />
              <Text fontSize={"11.84px"} color="#104b86" fontWeight={600} >E-mail (*)</Text>
              <Input borderWidth="1.01441px" borderColor="#666666" width={"234.9px"} onChange={(e:any)=>setEmail(e.target.value)} height="29.15px" borderRadius={"5.07px"} type="email" />
              <Text fontSize={"11.84px"} color="#104b86" fontWeight={600} >Teléfono</Text>
              <Input borderWidth="1.01441px" borderColor="#666666" onChange={(e:any)=>setPhone(e.target.value)} width={"234.9px"}  height="29.15px" borderRadius={"5.07px"} type="tel"/>
              <Text fontSize={"11.84px"} color="#104b86" fontWeight={600}>¿Cuál es el principal objetivo que quiero darle a la propiedad? (*)</Text>
              <Select fontSize={"11.84px"} color="#666666" fontWeight={500} onChange={(e:any)=>setReason(e.target.value)} borderWidth="1.01441px" borderColor="#666666" width={"234.9px"}  height="29.15px" borderRadius={"5.07px"}>
                <option>Inversión inmobiliaria</option>
                <option>Uso propio</option>
                <option>Ambos</option>
              </Select>
             
          </Box> 
          <Button disabled={name.length&&email.length&&phone.length&&reason.length?false:true}  onClick={handleClick} marginTop="35px" display="flex" height="28px" width="237px"  fontSize="13px" fontWeight="700" textAlign="center" border="2px solid #1D467C" color="white" backgroundColor="#1D467C" borderRadius="33.82px">Enviar</Button>
        
          </ModalBody>
          </Box>
        </ModalContent>
      </Modal>
      :
      <Modal isOpen={isOpen} onClose={onClose} >
        
      <ModalOverlay />
      
      <ModalContent width={"78%"} height={"max-content"} display="flex" flexDirection={"row"}>
         <Box width="100%" display="flex" flexDirection={"column"} alignItems="center">
         <ModalHeader display="flex" justifyContent="flex-start" alignItems="flex-start">
            <Image src={logomodal} margin="0 auto"  height={"70px"} alt="IMéxico"/>
            
          </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Accordion alignItems="center">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='center'>
                  <Text fontSize="13px" color="#5b5b5b" fontWeight={700}>Comunicate con nosotros</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            
            
            <Box margin="0 auto" display={"flex"} flexDirection={"column"} >
              <Button disabled={copied} onClick={handleCopy} color={ copied ?"#1D467C":"white"} display="flex" height="28px" width="237px" margin="10px auto" fontSize="13px" fontWeight="700" textAlign="center" border="2px solid #1D467C"  filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))" background="linear-gradient(180deg, #007BB8 0%, #1D467C 100%)"  borderRadius="33.82px">{ copied ? "Copiado" : "Llamar"}</Button>
              <a href="https://wa.link/zfmin0" target="_blank"><Button display="flex" height="28px" width="237px" margin="10px auto" fontSize="13px" fontWeight="700" textAlign="center" border="2px solid #1D467C" color="white" background="linear-gradient(180deg, #007BB8 0%, #1D467C 100%)" borderRadius="33.82px"><Text fontSize="13px" color="white">Whatsapp</Text></Button></a>
            </Box>


          </AccordionPanel>
          </AccordionItem>
                <Divider width="100%" color="#7A7A7A"  alignSelf="center"  borderColor="#7A7A7A"/>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='center'>
                  <Text fontSize="13px" color="#5b5b5b" fontWeight={700}>¿Prefieres programar la llamada?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} >
                <Box display="flex" flexDirection={"column"} width={"234.9px"} height={"240px"} alignItems={"center"}  justifyContent={"space-between"}>
                  <Text textAlign={"left"} marginTop="25px" fontSize={"11.84px"} color="#104b86" fontWeight={600}>Nombre completo (*)</Text>
                  <Input onChange={(e:any)=>setName(e.target.value)} borderWidth="1.01441px" borderColor="#666666" width={"234.9px"}  height="29.15px" borderRadius={"5.07px"} />
                  <Text fontSize={"11.84px"} color="#104b86" fontWeight={600} >E-mail (*)</Text>
                  <Input borderWidth="1.01441px" borderColor="#666666" width={"234.9px"} onChange={(e:any)=>setEmail(e.target.value)} height="29.15px" borderRadius={"5.07px"} type="email" />
                  <Text fontSize={"11.84px"} color="#104b86" fontWeight={600} >Teléfono</Text>
                  <Input borderWidth="1.01441px" borderColor="#666666" onChange={(e:any)=>setPhone(e.target.value)} width={"234.9px"}  height="29.15px" borderRadius={"5.07px"} type="tel"/>
                  <Text fontSize={"11.84px"} color="#104b86" fontWeight={600}>¿Cuál es el principal objetivo que quiero darle a la propiedad? (*)</Text>
                  <Select fontSize={"11.84px"} color="#666666" fontWeight={500} onChange={(e:any)=>setReason(e.target.value)} borderWidth="1.01441px" borderColor="#666666" width={"234.9px"}  height="29.15px" borderRadius={"5.07px"}>
                    <option>Inversión inmobiliaria</option>
                    <option>Uso propio</option>
                    <option>Ambos</option>
                  </Select>
              </Box>
              <Button disabled={name.length&&email.length&&phone.length&&reason.length?false:true} onClick={handleClick} marginTop="35px" display="flex" height="28px" width="237px"  fontSize="13px" fontWeight="700" textAlign="center" border="2px solid #1D467C" color="white" backgroundColor="#1D467C" borderRadius="33.82px">Enviar</Button>
            
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        </ModalBody>
        <ModalFooter>
        
        </ModalFooter>
        

         </Box>
               
     
      </ModalContent>
    </Modal>
    
    
    }
    <SendedModal phonecall={phonecall} isOpen={isOpenSendedModal}  onClose={onCloseSendedModal}/>
      </Container>
    )
}