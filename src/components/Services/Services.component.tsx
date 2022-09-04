import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import EXPLORAR from "../../images/EXPLORAR.png"
import CONTACTARME from "../../images/CONTACTARME.png"
import { ServiceModal } from '../Modals/ServiceModal'
import { useDisclosure } from '@chakra-ui/react'
import desarrolladores from "../../images/desarrolladores.png"
import broker from "../../images/brokers.png"
import inversionista from "../../images/inversionista.png"
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { ContactModal } from '../Modals/ContactModal'
import '../Home/styles.css'
import { useHistory } from 'react-router-dom'

interface ServicesProps{
    callInfo:any,
    phonecall:(name:string, email:string, phone:string, date:string, hour:string, reason:string )=>void,
    phonecallReducer:any
   
     
  }
export const Services = ({callInfo, phonecall, phonecallReducer}:ServicesProps) => {
    let mobile = window.innerWidth
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [inversor, setInversor] = useState(false)
    const [desarrollador, setDesarrollador] = useState(false)
    const [brokers, setBrokers] = useState(false)
    const history = useHistory();
    const handleReset = () =>{
        setInversor(false)
        setDesarrollador(false)
        setBrokers(false)
      }
      const handleContact = () =>{
        onOpen()
      }
    return (
        <>
        <Box minWidth="100%"  display="flex">
            {(!inversor&&!desarrollador&&!brokers)?
            <Box  display="flex" flexDirection={"column"} minHeight={"89vh"}>
                
                
                <Box onClick={()=>setInversor(!inversor)} height={"31vh"} minWidth="100vw" backgroundImage={inversionista} backgroundPosition={"center"} padding={0}  display={"flex"} flexDirection={"column"}  justifyContent={"center"} objectFit={"cover"} backgroundSize={"cover"} >
                    <Text fontSize={"33.57px"} fontWeight={700} color="white" textAlign={"center"} textShadow="0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25)" >Inversionistas</Text>
                   
                </Box>
                 
            
                <Box onClick={()=>setDesarrollador(!desarrollador)}  height={"31vh"} minWidth="100vw" backgroundImage={desarrolladores} backgroundPosition={"center"} padding={0}  display={"flex"} flexDirection={"column"} justifyContent={"center"} objectFit={"cover"} backgroundSize={"cover"} >
                    <Text fontSize={"33.57px"} fontWeight={700} color="white" textAlign={"center"}  textShadow="0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25)">Desarrolladores</Text>
                </Box>

                <Box onClick={()=>setBrokers(!brokers)} height={"31vh"} minWidth="100vw" backgroundImage={broker} backgroundPosition={"center"} padding={0}  display={"flex"} flexDirection={"column"}  justifyContent={"center"} objectFit={"cover"} backgroundSize={"cover"} >
                    <Text fontSize={"33.57px"}  fontWeight={700} color="white" textAlign={"center"} textShadow="0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25)" >Brokers</Text>
                </Box>
            
            </Box>
            :
            inversor?
          
                 <Box display={"flex"} flexDirection={"column"} alignItems="center" justifyContent="center" objectFit={"cover"} objectPosition={"25% 0" } backgroundImage={inversionista} backgroundSize={"190vh"} backgroundPosition={"center"}  minHeight={"100vh"} width={"100%"}  >
                    <Box position={"absolute"} top="5%"left="0"> 
                        <MdOutlineArrowBackIosNew color="white"  size={"40px"}  onClick={handleReset}  />
                    </Box>
                   
                    <Text fontSize={"33.57px"} paddingBottom={"35px"} fontWeight={700} color="white" textAlign={"center"}  textShadow="0px 4px 10px rgba(0, 0, 0, 0.25)" >Inversionista</Text>
                   
                    <Text fontSize={"20px"} paddingX="20px" paddingBottom={"80px"} fontWeight={700} color="white" textAlign={"center"} textShadow="5px 5px 10px rgba(0, 0, 0, 0.4)">Conocé las excelentes propiedades que te ofrece IMexico. Encontrá el lugar donde la realidad se vuelve mágica.</Text>
                    <Box onClick={()=>history.push("/developments")} className='Contactarme'  marginTop="60px" width="242px" height={"28px"} background="rgba(0, 0, 0, 0.4)" borderRadius={"91.88px"} border="1.83766px solid #FFFFFF" display="flex" flexDirection={"column"} justifyContent="center"><Text textAlign="center" fontSize={"15px"} color="white" fontWeight={700}>Explorar</Text></Box>
                    
                 </Box>
            :
            desarrollador?
                    <Box display={"flex"} flexDirection={"column"}  alignItems="center"  justifyContent="center" objectFit={"cover"} objectPosition={"25% 0" } backgroundImage={desarrolladores} backgroundSize={"100vh"} backgroundPosition={"center"}  minHeight={"100vh"} width={"100%"}  >
                        <Box position={"absolute"} top="5%"left="0"> 
                    <MdOutlineArrowBackIosNew color="white"  size={"40px"}  onClick={handleReset}  />
                    </Box>
                    <Text fontSize={"33.57px"} paddingBottom={"35px"} fontWeight={700} color="white" textAlign={"center"} textShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"  >Desarrolladores</Text>
                    <Text fontSize={"20px"} paddingX="20px" paddingBottom={"80px"} fontWeight={700} color="white" textAlign={"center"} textShadow="5px 5px 10px rgba(0, 0, 0, 0.4)">Quienes confían en el potencial de IMexico son quienes nos impulsan a seguir creciendo. ¿Te interesa ser desarollista? Este es tu lugar.</Text>
                    <Box className='Contactarme' onClick={handleContact}  marginTop="60px" width="242px" height={"28px"} background="rgba(0, 0, 0, 0.4)" borderRadius={"91.88px"} border="1.83766px solid #FFFFFF" display="flex" flexDirection={"column"} justifyContent="center"><Text textAlign="center" fontSize={"15px"} color="white" fontWeight={700}>Contactarme</Text></Box>
                    
                </Box>
            
            :
                 <Box display={"flex"} flexDirection={"column"}  alignItems="center"  justifyContent="center" objectFit={"cover"} objectPosition={"25% 0" } backgroundImage={broker} backgroundSize={"100vh"} backgroundPosition={"center"}  minHeight={"100vh"} width={"100%"}  >
                     <Box position={"absolute"} top="5%"left="0"> 
                        <MdOutlineArrowBackIosNew color="white"  size={"40px"}  onClick={handleReset}  />
                    </Box>
                    <Text fontSize={"33.57px"} paddingBottom={"35px"} fontWeight={700} color="white" textAlign={"center"} textShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"  >Brokers</Text>
                    <Text fontSize={"20px"} paddingX="20px" paddingBottom={"80px"} fontWeight={700} color="white" textAlign={"center"} textShadow="5px 5px 10px rgba(0, 0, 0, 0.4)">Quienes confían en el potencial de IMexico son quienes nos impulsan a seguir creciendo. ¿Te interesa ser desarollista? Este es tu lugar.</Text>
                    <Box className='Contactarme' onClick={handleContact}  marginTop="60px" width="242px" height={"28px"} background="rgba(0, 0, 0, 0.4)" borderRadius={"91.88px"} border="1.83766px solid #FFFFFF" display="flex" flexDirection={"column"} justifyContent="center"><Text textAlign="center" fontSize={"15px"} color="white" fontWeight={700}>Contactarme</Text></Box>
                    
                 </Box>
      
            }
           
        
        </Box>
        <ContactModal phoneCallReducer={phonecallReducer} phonecall={phonecall} isOpen={isOpen} onClose={onClose}/>
        </>
    )
}
