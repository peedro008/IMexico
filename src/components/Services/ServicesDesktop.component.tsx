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
import "./Services.css"
import { useHistory } from 'react-router-dom'
 
export const ServicesDesktop = () => {
    let mobile = window.innerWidth
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [inversor, setInversor] = useState(false)
    const [desarrollador, setDesarrollador] = useState(false)
    const [brokers, setBrokers] = useState(false)
    const history = useHistory();
    const handleContact = () =>{
        onOpen()
      }
    const handleReset = () =>{
        setInversor(false)
        setDesarrollador(false)
        setBrokers(false)
      }
    return (
        <>
        <Box minWidth="100%"   display="flex">
            {(!inversor&&!desarrollador&&!brokers)?
            <Box width={"100%"} display="flex" flexDirection={"column"} minHeight={"89vh"}>
                
                
               
                 
                <Box  display={"flex"} flexDirection={"row"} height={"50%"}  maxWidth={"100%"} >
                   
                 
                    <Box className="inversores" cursor="pointer" marginRight={"-1px"} onClick={()=>setInversor(!inversor)} height={"100%"} width={"51%"} backgroundImage={inversionista} backgroundPosition={"center"} padding={0}  display={"flex"} flexDirection={"column"}   objectFit={"cover"} justifyContent="center" backgroundSize={"100%"} >
                    <Box backgroundColor="#091F40" className='filter'width={"100%"} height="100%" display={"flex"} flexDirection={"column"}justifyContent="center" position="relative"/>
                        <Text position={"absolute"} opacity="100%" fontSize={"33.57px"} alignSelf="center" textShadow={"0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25)"}  fontWeight={700} color="white" >Inversionistas</Text>
                     
                    </Box>
                   
                    <Box className="inversores" cursor="pointer" onClick={()=>setDesarrollador(!desarrollador)}  width={"50%"} height={"100%"} backgroundImage={desarrolladores} backgroundPosition={"center"} padding={0}  display={"flex"} flexDirection={"column"}  justifyContent="center"  objectFit={"cover"} backgroundSize={"100%"}  >
                    <Box backgroundColor="#091F40" className='filter'width={"100%"} height="100%" display={"flex"} flexDirection={"column"}justifyContent="center" position="relative"/>
                        <Text position={"absolute"} opacity="100%" fontSize={"33.57px"} alignSelf="center" textShadow={"0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25)"}  fontWeight={700} color="white" >Desarrolladores</Text>
                    </Box>
                    
                </Box>
                <Box className="inversores" cursor="pointer" onClick={()=>setBrokers(!brokers)} height={"50%"} backgroundImage={broker} backgroundPosition={"center"} padding={0}  display={"flex"} flexDirection={"column"}  justifyContent="center"  objectFit={"cover"} backgroundSize={"100%"} >
                <Box backgroundColor="#091F40" className='filter'width={"100%"} height="100%" display={"flex"} flexDirection={"column"}justifyContent="center" position="relative"/>
                    <Text position={"absolute"} opacity="100%" fontSize={"33.57px"} alignSelf="center" textShadow={"0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25)"}  fontWeight={700} color="white" >Brokers</Text>
                </Box>
               
            </Box>
            :
            inversor?
          
            <Box  display={"flex"} flexDirection={"column"} justifyContent="center"  objectPosition={"25% 0" } backgroundImage={inversionista} backgroundSize={"cover"} backgroundPosition={"center"}  minHeight={"100vh"} width={"100%"}  >
            <Box position={"absolute"} top="14%"> 
                <MdOutlineArrowBackIosNew color="white"  size={"40px"}  onClick={handleReset}  />
            </Box>
            <Box paddingBottom={"140px"} paddingRight="160px" width="55%" display={"flex"} flexDirection={"column"} alignSelf={"flex-end"}>
                <Text fontSize={"80px"} textShadow="0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25)" fontWeight={700} color="white" textAlign={"end"} >Inversionistas</Text>
            
                <Text textShadow={"5px 5px 10px rgba(0, 0, 0, 0.4)"} marginLeft={"120px"} fontSize={"20px"} paddingLeft="20px" paddingBottom={"20px"} fontWeight={700} color="white" textAlign={"end"} >Conocé las excelentes propiedades que te ofrece IMexico. Encontrá el lugar donde la realidad se vuelve mágica.</Text>
                <Box  alignSelf={"end"} onClick={()=>history.push("/developments")} className='Contactarme'marginTop="20px" width="241px" height={"27px"} background="rgba(0, 0, 0, 0.4)" borderRadius={"91.88px"} border="1.83766px solid #FFFFFF" display="flex" flexDirection={"column"} justifyContent="center"><Text textAlign="center" fontSize={"15px"} color="white" fontWeight={700}>Explorar</Text></Box>
            </Box>
            </Box>
            :
            desarrollador?

            <Box display={"flex"} flexDirection={"column"} justifyContent="center"  objectPosition={"25% 0" } backgroundImage={desarrolladores} backgroundSize={"cover"} backgroundPosition={"center"}  minHeight={"100vh"} width={"100%"}  >
                <Box position={"absolute"} top="14%"> 
                    <MdOutlineArrowBackIosNew color="white"  size={"40px"}  onClick={handleReset}  />
                </Box>
                <Box paddingBottom={"140px"} paddingRight="160px" width="60%" display={"flex"} flexDirection={"column"} alignSelf={"flex-end"}>
                    <Text fontSize={"80px"} fontWeight={700} textShadow="0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25)"  color="white" textAlign={"end"} >Desarrolladores</Text>
                
                    <Text textShadow={"5px 5px 10px rgba(0, 0, 0, 0.4)"}  marginLeft={"120px"} fontSize={"20px"} paddingLeft="20px" paddingBottom={"20px"} fontWeight={700} color="white" textAlign={"end"} >Quienes confían en el potencial de IMexico son quienes nos impulsan a seguir creciendo. ¿Te interesa que comercialicemos tu desarrollo?</Text>
                    <Box  alignSelf={"end"} onClick={handleContact} className='Contactarme'marginTop="20px" width="241px" height={"27px"} background="rgba(0, 0, 0, 0.4)" borderRadius={"91.88px"} border="1.83766px solid #FFFFFF" display="flex" flexDirection={"column"} justifyContent="center"><Text textAlign="center" fontSize={"15px"} color="white" fontWeight={700}>Contactarme</Text></Box>
                </Box>
            </Box>
            :
            <Box display={"flex"} flexDirection={"column"} justifyContent="center"  objectPosition={"25% 0" } backgroundImage={broker} backgroundSize={"cover"} backgroundPosition={"center"}  minHeight={"100vh"} width={"100%"}  >
                <Box position={"absolute"} top="14%"> 
                    <MdOutlineArrowBackIosNew color="white"  size={"40px"}  onClick={handleReset}  />
                </Box>
                <Box paddingBottom={"140px"} paddingRight="160px" width="60%" display={"flex"} flexDirection={"column"} alignSelf={"flex-end"}>
                    <Text fontSize={"80px"} fontWeight={700} color="white" textAlign={"end"} >Brokers</Text>
                
                    <Text textShadow={"5px 5px 10px rgba(0, 0, 0, 0.4)"}  marginLeft={"120px"} fontSize={"20px"} paddingLeft="20px" paddingBottom={"20px"} fontWeight={700} color="white" textAlign={"end"} >Quienes confían en el potencial de IMexico son quienes nos impulsan a seguir creciendo. ¿Te interesa ser desarollista? Este es tu lugar.</Text>
                    <Box  alignSelf={"end"} onClick={handleContact} className='Contactarme'marginTop="20px" width="241px" height={"27px"} background="rgba(0, 0, 0, 0.4)" borderRadius={"91.88px"} border="1.83766px solid #FFFFFF" display="flex" flexDirection={"column"} justifyContent="center"><Text textAlign="center" fontSize={"15px"} color="white" fontWeight={700}>Contactarme</Text></Box>
                </Box>
            </Box>
            }
           
        
        </Box>
        <ServiceModal isOpen={isOpen} onClose={onClose}/>
        </>
    )
}


