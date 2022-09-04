import React from "react";
import { Box, Button, Container, Divider, Image, Input, Text } from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/hooks";
import {  FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';
import tokko from '../../images/tokko.png'
import { ApplyModal } from "../Modals/ApplyModal";
import { User } from '../../interfaces/User';
import { NewsletterModal } from "../Modals/NewsletterModal";
import { NavLink, Link } from "react-router-dom";
import conocer from "../../images/conocer.png"
import DICODE from "../../images/DICODE.svg"
import mediagroup from "../../images/mediagroup.png"
interface FooterProps{
  newsLetter: (name:string, email:string) => void,
  sendApply: (fullname: string, email: string, phone: number, file: any) => void,
  applyReducer: any
  loginReducer: any
  newsletterReducer: any
}

export const Footer = ({ newsLetter, sendApply, applyReducer, loginReducer, newsletterReducer }: FooterProps ) => {
  let mobile = window.innerWidth
  const user = localStorage.getItem('user')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenNewsletterModal,
    onOpen: onOpenNewsletterModal,
    onClose: onCloseNewsletterModal
} = useDisclosure()
  
  const handleClickNewsletter = () => {
    if(user !== null){
      let fullUser = JSON.parse(user)
      if(fullUser?.user !== undefined && fullUser?.email !== undefined){
        newsLetter(fullUser?.user, fullUser?.email ) 
        onOpenNewsletterModal()
      }
    }else{
      onOpenNewsletterModal()
    }
  }

return(
    <>
    {mobile < 750 ?
    <Box>
      <Box paddingY="25px" backgroundColor="#004584" width="100%" height="max-content" display="flex" alignItems="center" flexDirection="column">
        <Text color="white" fontSize="15.8" fontFamily="Raleway" fontWeight="700">Suscribite a nuestro newsletter</Text>
        <Text color="white" fontSize="11.85" fontFamily="Raleway" fontWeight="700">Registrate para recibir novedades</Text>
        <Box marginTop="24px" display="flex" flexDirection="row">  
          <Button filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} width="241px" onClick={handleClickNewsletter} height={"28px"} borderRadius={ "39.5px"} backgroundColor={"#E81D2C"} color="white" fontWeight={500} fontSize={"13px"}>Quiero registrarme</Button>
        </Box>
        <Divider width="95%" backgroundColor="#104B86" marginY="12px"/>
        <Text color="white" fontSize="13px" fontFamily="Raleway" fontWeight="700">¿Te interesarìa formar parte de nuestro equipo?</Text>
        <Button marginTop={"10px"} filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} onClick = {onOpen} width="241px" fontWeight={500} fontSize={"13px"} backgroundColor={"#E81D2C"} color="white" borderRadius={"33.82px"} height={"28px"}>Quiero formar parte de IMexico</Button>
        <Divider width="95%" backgroundColor="#104B86" marginY="18px"/>
        <Box display="flex" flexDirection={"row"}> 
          <Box display="flex" flexDirection={"column"} width="50%" alignItems={"center"}>
          <Text marginBottom={"10px"} textAlign={"center"} fontSize={"10px"} color="white" >Prestadores de Servicios del Sistema Nacional de Competencias</Text>
              <Image src={conocer}  marginLeft="20px" width="90px" height="51px"/>
          </Box>
          <Divider orientation="vertical" height={"100px"} backgroundColor="#104B86"/>
          <Box display="flex" flexDirection={"column"} minWidth="50%" alignItems={"center"}>
          <Text marginBottom={"20px"} fontSize={"10px"} color="white"  >Organismo Certificador</Text>
              <Image src={mediagroup} width="64px" height="61px"/>
          </Box>
        </Box>

        <Divider width="95%" backgroundColor="#104B86" marginY="18px"/>
        <Box display="flex" flexDirection="row" paddingX="15px">
          <Box  display={"flex"} alignSelf={"center"}  width="50%" paddingX="20px">
          <NavLink to={'/conduct'}>
            <Text noOfLines={3} color="white" fontSize="12" fontFamily="Raleway" textDecor={"underline"} fontWeight="700">Consulta aquí el Código de Conducta Ético de Nuestros Asesores</Text>
          </NavLink>
          </Box>
          <Divider orientation="vertical" height={"50px"} backgroundColor="#104B86"/>
          <Box display={"flex"} width="45%" height={"55px"} justifyContent={"center"} alignItems={"center"} >
          <NavLink to={'/terms'}>
            <Text color="white" fontSize="12" textDecor={"underline"} fontFamily="Raleway" fontWeight="700">Aviso de privacidad</Text>
          </NavLink>
          </Box> 
        </Box>
        <Divider width="95%" backgroundColor="#104B86" marginY="18px"/>
        
        <Box display="flex" flexDirection={"column"} alignSelf={"center"} >
          <Box display="flex" flexDirection={"column"} width="250px"  >
            <Box display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
              <a href="https://www.facebook.com/imexico.realestate" target="_blank"><Box paddingX="8px"><FaFacebook size="26.83px" color="white"  /></Box></a>
              <a href="https://www.instagram.com/imexico.realestate" target="_blank"><Box paddingX="8px"><FaInstagram size="26.83px"  color="white"/></Box></a>
              <a href="https://www.tiktok.com/@imexico.realestate?lang=es" target="_blank"><Box paddingX="8px"><FaTiktok size="26.83px"  color="white"/></Box></a> 
              <a href="https://mx.linkedin.com/company/imexicorealestate" target="_blank"><Box paddingX="8px"><FaLinkedinIn size="26.83px"  color="white"/></Box></a>
              <a href="https://www.youtube.com/channel/UCFSMo37utXcCmk_joGOWeJg" target="_blank"><Box paddingX="8px"><FaYoutube size="26.83px"  color="white"/></Box></a>
            </Box>
        
          </Box>
          <Divider backgroundColor="#104B86" marginY="8px"/>
          <Image src={tokko} margin="0 auto"/>
        </Box>
        <Divider width="95%" backgroundColor="#104B86" marginY="8px"/>
        <Box >
          <Text  fontSize={"10px"}  color="white">iMexico Real Estate © Todos los derechos reservados 2021</Text>
        </Box>
      </Box>
      <Box height={"19px"} backgroundColor={"#5B5B5B"} width="100%">
        <Text textAlign={"center"} color="white" fontFamily={"Poppins"} paddingTop="3px" fontSize={"8.97px"} fontWeight={400}>Desarrollado por dicode</Text>
      </Box>        
    </Box> :
    <Box>
        <Box paddingY="25px" backgroundColor="#004584" width="100%" height="max-content" display="flex" flexDirection="column">     
          <Box display="flex" flexDirection={"row"} >
            <Box display={"flex"} flexDirection={"row"} width={"50%"}>
              <Box paddingLeft="60px" >
                <Text color="white" fontSize="15.8" fontFamily="Raleway" fontWeight="700">Suscribite a nuestro newsletter</Text>
                <Text color="white" fontSize="11.85" fontFamily="Raleway" fontWeight="700">para recibir siempre novedades</Text>
              </Box>
            <Box marginTop="10px" display="flex" flexDirection="row" paddingLeft={"20px"}>
            <Button filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} width="230px"  height={"28px"} borderRadius={ "39.5px"} backgroundColor={"#E81D2C"} onClick={handleClickNewsletter} color="white" fontWeight={500} fontSize={"13px"} marginRight="20px">Quiero registrarme</Button>
          </Box>
        </Box>

        <Divider borderWidth="1px" borderColor={"#0074E8"} orientation="vertical" height={"60px"} backgroundColor="#0074E8"/>
        <Box width={"50%"} justifyContent={"center"} alignItems={"center"} display={"flex"} flexDirection={"column"}>
          <Text color="white"marginBottom="10px" fontSize="13px" fontFamily="Raleway" fontWeight="700">¿Te interesarìa formar parte de nuestro equipo?</Text>             
          <Button filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} onClick = {onOpen} width="230px" fontWeight={500} fontSize={"13px"} backgroundColor={"#E81D2C"} color="white" borderRadius={"33.82px"} height={"28px"}>Quiero formar parte de IMexico</Button>
        </Box>
        </Box>
        <Divider borderWidth="1px" borderColor={"#0074E8"} width="95%" backgroundColor="#0074E8" marginY="18px" alignSelf={"center"}/>
        <Box display="flex" flexDirection="row" >
          <Box  display={"flex"} alignSelf={"center"} paddingLeft="60px" flexDirection={"column"} minWidth="35%" >
          <NavLink to={'/conduct'}>
            <Text width="100%" color="white" fontSize="12" fontFamily="Raleway" textDecor={"underline"} fontWeight="700">Consulta aquí el Código de Conducta Ético de Nuestros Asesores</Text>
          </NavLink>
          <NavLink to={'/terms'}>
              <Text  color="white" fontSize="12" textDecor={"underline"} fontFamily="Raleway" fontWeight="700">Aviso de privacidad</Text>
            </NavLink>
          </Box>
          <Divider borderWidth="1px" borderColor={"#0074E8"} orientation="vertical" height={"80px"} backgroundColor="#0074E8" />
          <Box display="flex" flexDirection={"row"}>
            <Box display="flex" flexDirection={"row"}  alignItems={"center"}  minWidth="max-content">
              <Text textAlign={"right"} fontSize={"12px"} color="white" minWidth="113px" maxWidth={"113px"}>Prestadores de Servicios del Sistema Nacional de Competencias</Text>
              <Image src={conocer}  marginLeft="20px" />
            </Box>
            <Divider borderWidth="1px" borderColor={"#0074E8"} orientation="vertical" height={"80px"} backgroundColor="#0074E8" marginX="20px"/>
            <Box display="flex" flexDirection={"row"}  alignItems={"center"}  minWidth="max-content">
              <Text fontSize={"12px"} color="white" maxWidth={"70px"} marginRight="20px" >Organismo Certificador</Text>
              <Image src={mediagroup}/>
            </Box>
          </Box>
         
     
          <Divider borderWidth="1px" borderColor={"#0074E8"} orientation="vertical" height={"80px"} backgroundColor="#0074E8"  marginX="20px"/>
                  
          <Box display="flex"  flexDirection={"column"} justifyContent={"center"} alignItems={"center"} minWidth={"28%"} >
            <Box display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <a href="https://www.facebook.com/imexico.realestate/" target="_blank" rel="noreferrer">
              <Box paddingX="8px"><FaFacebook size="26.83px" color="white"  /></Box>
            </a>
            <a href="https://www.instagram.com/imexico.realestate/" target="_blank" rel="noreferrer">
              <Box paddingX="8px"><FaInstagram size="26.83px"  color="white"/></Box>
            </a>
            <a href="https://mx.linkedin.com/company/imexicorealestate" target="_blank" rel="noreferrer">
              <Box paddingX="8px"><FaLinkedinIn size="26.83px"  color="white"/></Box>
            </a>
            <a href="https://www.tiktok.com/@imexico.realestate?lang=es" target="_blank" rel="noreferrer">
              <Box paddingX="8px"><FaTiktok size="26.83px"  color="white"/></Box>
            </a>  
            <a href="https://www.youtube.com/channel/UCFSMo37utXcCmk_joGOWeJg" target="_blank" rel="noreferrer">
              <Box paddingX="8px"><FaYoutube size="26.83px"  color="white"/></Box>
            </a>
            </Box>
            <Box>
            <Divider borderWidth="1px" borderColor={"#0074E8"} width="100%" backgroundColor="#0074E8" marginY="8px" alignSelf={"center"}/>
            <Image src={tokko} margin="0 auto"/>
          </Box> 
          </Box>
          
          
        </Box>
        <Divider borderWidth="1px" borderColor={"#0074E8"} width="95%" backgroundColor="#0074E8" marginY="8px" alignSelf={"center"}/>
      
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} width="100%" paddingX="180px">
          <Box >
            <Text  fontSize={"10px"}  color="white">iMexico Real Estate © Todos los derechos reservados 2021</Text>
          </Box>
          
         
        </Box>
      </Box>
    <Box justifyContent={"center"} alignItems="center" height={"19px"} backgroundColor={"#5B5B5B"} width="100%" display="flex" flexDirection={"row"} >
      <Text textAlign={"center"} marginTop="0.7px" color="white" fontFamily={"Poppins"} fontSize={"8.97px"} fontWeight={400}>Desarrollado por </Text>
      <Image src={DICODE} marginLeft="2px" height={"14px"}/>
    </Box>        
    </Box>
    }
    <NewsletterModal isOpen={isOpenNewsletterModal} onClose={onCloseNewsletterModal} newsletterReducer={newsletterReducer}/>
    <ApplyModal isOpen={isOpen} onClose={onClose} sendApply={sendApply} applyReducer={applyReducer}/>
    </>
  )
} 