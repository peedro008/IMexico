import { Container, Text } from '@chakra-ui/layout'
import { Button, HStack, Box, Image, Divider, Input, Select, useDisclosure, Spinner, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Checkbox, VStack, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import registerlogo from '../../images/registerLogo.svg'
import LOGOBLANCO from "../../images/LOGOBLANCO.png"
import { ContactModal } from '../Modals/ContactModal'
import SPONSOR1 from '../../images/SPONSORS/SPONSOR1.png'
import SPONSOR2 from '../../images/SPONSORS/SPONSOR2.png'
import SPONSOR3 from '../../images/SPONSORS/SPONSOR3.png'
import SPONSOR4 from '../../images/SPONSORS/SPONSOR4.png'
import SPONSOR5 from '../../images/SPONSORS/SPONSOR5.png'
import SPONSOR6 from '../../images/SPONSORS/SPONSOR6.png'
import SPONSOR7 from '../../images/SPONSORS/SPONSOR7.png'
import SPONSOR8 from '../../images/SPONSORS/SPONSOR8.png'

import sponsorBack from "../../images/sponsorBack.png"
import CAPTCHA from '../../images/CAPTCHA.png'
import { FaPhoneSquareAlt, FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';
import { MdEmail,MdLocationOn } from 'react-icons/md'
import LogoBannerD from "../../images/LogoBannerD.png"
import React, { useEffect, useState } from 'react'
import { FeaturedController } from '../../controllers/Featured'
import { SearchbarController } from '../../controllers/Search'
import PalmeraBlue from '../../images/PalmeraBlue.png'
import PalmerasCount from '../../images/PalmerasCount.png'
import './styles.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ClientCardController } from '../../controllers/ClientCard'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import star from "../../images/star.png"
import clock from "../../images/clock.png"
import { useHistory } from 'react-router-dom'
import backlogosM from "../../images/backlogosM.png"
import group from "../../images/group.png"
import conocercolor from "../../images/conocercolor.png"
import { SendedModal } from '../Modals/SendedModal'

interface HomeProps{
  callInfo:any,
  Config:any,
  configurationReducer:any,
  phonecall:(name:string, email:string, phone:string,  reason:string )=>void,
  phonecallReducer:any,
  satisfiedCustomersList:any
}

export const Home = ({callInfo, phonecall, phonecallReducer,configurationReducer, satisfiedCustomersList,  Config}: HomeProps) => {
  let sponsor = [ SPONSOR1, SPONSOR2, SPONSOR3, SPONSOR4, SPONSOR5,  SPONSOR6, SPONSOR7, SPONSOR8]

  const [ copied, setCopied ] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hour, setHour] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState(0);
  const history = useHistory();
  
  const img = ['https://static.ecosaludcentro.com/image/imexico/configuration/1645097612-Frame%2075.png',
     'https://static.ecosaludcentro.com/image/imexico/configuration/1645097614-Frame%2074.png',
     'https://static.ecosaludcentro.com/image/imexico/configuration/1645097617-Frame%2073.png']
 
     const { 
      isOpen: isOpenSendedModal, 
      onOpen: onOpenSendedModal, 
      onClose: onCloseSendedModal 
  } = useDisclosure()
  const handleContact = () =>{
    onOpen()
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

  };

  const handleCopy = () => {
    navigator.clipboard.writeText("+52 1 984 218 1599");
    setCopied(!copied)
}
  const handleClick = () => {
      phonecall(name, email, phone, reason)
  }
  
  
  
  return (
    <>

    <Container minWidth="100%" padding={0} height="auto" overflow="hidden" >
                
                <Slider {...settings}>
                {img?.map((photo: any, index: number) => {
                        return <Box padding={0} height="622px" minWidth={"100vw"} backgroundImage={photo} backgroundSize="cover"> 
                                <Box textAlign={"center"} display="flex" justifyContent={"center"}  marginTop="75px" width="100%" height="100%" flexDirection={"column"} alignItems="center">
                                <Text   fontWeight={800} color="white" fontSize={"32px"}>{index==2?"BROKERS":index==1?"INVERSIONISTAS":"DESARROLLADORES"}</Text>
                                <Image marginTop="20px" src={LogoBannerD} display="flex" alignSelf="center"/>
                                <Box className='Contactarme' onClick={index==2||index==0?handleContact: ()=>history.push("/developments")} marginTop="60px" width="241px" height={"27px"} background="rgba(0, 0, 0, 0.4)" borderRadius={"91.88px"} border="1.83766px solid #FFFFFF" display="flex" flexDirection={"column"} justifyContent="center"><Text textAlign="center" fontSize={"15px"} color="white" fontWeight={700}>{index==2?"Contactarme":index==1?"Explorar":"Contactarme"}</Text></Box>
                                </Box>
                              </Box>
                    })}
                </Slider>
                
               
             
            </Container>
      
      
      



   




      <Box backgroundImage={PalmeraBlue} backgroundSize="cover" height="124px" alignItems={"center"} justifyContent="center" flexDirection={"column"} display={"flex"}>
        <Text fontSize="15px" fontWeight="500px" textAlign="center" color="white">Encuentra <strong>la propiedad</strong> de tus sueños.</Text>
        <SearchbarController />
      </Box>
      <Box boxShadow="0px 4.1704px 4.1704px rgba(0, 0, 0, 0.35);" backgroundImage={backlogosM} paddingX="10%" paddingY="30px" paddingBottom={"80px"} justifyContent={"space-between"} backgroundSize="cover" minHeight="459px" display="flex" flexDirection={"column"} alignItems="center">
          <Text textAlign={"center"} fontSize="15px" color="#000000" fontWeight={600}>Prestadores de Servicios del Sistema Nacional de Competencias</Text>
          <Image src={conocercolor}/>
          <Image src={group} />
      </Box>
      <FeaturedController title={"Conocé nuestros desarrollos"} dev={true}/>
      <Box backgroundImage={PalmerasCount} backgroundSize="cover" justifyContent={"space-between"} paddingBottom="35px" alignItems={"center"} display="flex" flexDirection={"column"} height="700px">
        <Image src={LOGOBLANCO} margin="0 auto" paddingY="30px" />
        <CountUp start={0} end={30000} duration={2} decimals={0} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
        <HStack margin="0 auto" justifyContent="center"><Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"}>+</Text><Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"} ref={countUpRef as React.RefObject<HTMLParagraphElement>}></Text></HStack>
        </VisibilitySensor>
      )}
   </CountUp>
        {/* <Text color="white" textAlign={"center"} fontSize="20.01" fontWeight={500}>Inversionistas satisfechos que nos respaldan</Text>
        <CountUp start={0} end={3000} duration={2} decimals={0} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
        <HStack margin="0 auto" justifyContent="center"><Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"}>+</Text><Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"} ref={countUpRef as React.RefObject<HTMLParagraphElement>}></Text></HStack>
        </VisibilitySensor>
      )}
   </CountUp> */}
        <Text color="white" textAlign={"center"} fontSize="20.01" fontWeight={500}>Brokers Afiliados</Text>
        <CountUp start={0} end={25} duration={2} decimals={0} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
        <HStack margin="0 auto" justifyContent="center"><Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"}>+</Text><Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"} ref={countUpRef as React.RefObject<HTMLParagraphElement>}></Text></HStack>
        </VisibilitySensor>
      )}
   </CountUp>
        <Text color="white" textAlign={"center"} fontSize="20.01" fontWeight={500}>Opciones de inversión</Text>
        <CountUp start={0} end={15} duration={2} decimals={0} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
        <Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"} ref={countUpRef as React.RefObject<HTMLParagraphElement>}></Text>
        </VisibilitySensor>
      )}
   </CountUp>
        <Text color="white" textAlign={"center"} fontSize="20.01" fontWeight={500}>Años de experiencia</Text>
      </Box>

      <FeaturedController title={"Las propiedades que estas buscando"} dev={false}/>
      <Box height="752px" backgroundImage={sponsorBack} backgroundSize="cover" alignItems={"center"} display="flex" flexDirection={"column"} paddingTop="60px">
        <Text color="#1D467C" textAlign={"center"} fontSize="20px" fontWeight={700}>Partners Comerciales</Text>
        <Container minWidth="100%" padding={0} height="auto" overflow="hidden">
          <Slider {...settings}>
            {sponsor?.map((photo: any, index: number) => {
              return <Image key={index} src={photo} height="556px"  />
            })}
          </Slider>
        </Container>

      </Box>



    <Box backgroundColor={"#E5E5E5"} height="430px" alignItems={"center"} flexDirection={"column"} display={"flex"}>
        <Text fontSize="20px" fontWeight={700} color="#545454" marginTop="20px" marginBottom={"30px"}>Clientes Satisfechos</Text>
       <Box  paddingX="30px" display="flex" flexDirection={"row"} overflowX="scroll" maxWidth={"100%"}>
        {satisfiedCustomersList?.map((e:any)=>{
          
          return <ClientCardController  client={e}/>
        })
        }</Box>
      </Box><Box display="flex" flexDirection={"column"} backgroundColor={"white"} alignItems={"center"}>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <Image width="86px" height="auto" src={registerlogo} margin="0 auto" paddingTop="51px" paddingBottom="30px" />
        </Box>

        <Box display="flex" flexDirection={"row"} alignItems={"center"}>
          <FaPhoneSquareAlt size={"17px"} style={{ marginTop: "5px" }} color="#E81D2C" />
          <Text marginLeft="10px" fontSize={"17px"}>(+52) 1 984 218 1599</Text>
        </Box>
        <Box display="flex" flexDirection={"row"}>
          <MdEmail size={"18px"} style={{ marginTop: "5px" }} color="#E81D2C" />
          <Text marginLeft="10px" fontSize={"17px"}>info@imexicorealestate.com</Text>
        </Box>
        <Divider width="85%" color="#A4A4A4" marginY="20px" />

        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} width="80%">
        <a href="https://www.facebook.com/imexico.realestate" target="_blank"> <FaFacebook size="30px" color="#1D467C" /></a>
        <a href="https://www.instagram.com/imexico.realestate" target="_blank"> <FaInstagram size="30px" color="#1D467C" /></a>
        <a href="https://www.youtube.com/channel/UCFSMo37utXcCmk_joGOWeJg" target="_blank" rel="noreferrer"> <FaYoutube size="30px" color="#1D467C" /></a>
          <a href="https://mx.linkedin.com/company/imexicorealestate" target="_blank"> <FaLinkedinIn size="30px" color="#1D467C" /></a>
          <a href="https://www.tiktok.com/@imexico.realestate?lang=es" target="_blank"> <FaTiktok size="30px" color="#1D467C" /></a>
        </Box>
        <Divider width="85%" color="#A4A4A4" marginY="20px" />
       
       
       
       
      
     
     {
      !address?
      <Menu>
      <Accordion defaultIndex={[1]}  allowToggle  maxWidth="80%" minHeight="38px" marginBottom={"50px"} >
      <AccordionItem background={"#FFFFFF"}  width={"382px"} boxSizing={"border-box"} boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"} borderRadius={"5px"}>
      <MenuButton>
        <Box width={"352px"} justifyContent="space-between" alignItems="center" display="flex" flexDirection={"row"}>
      <MdLocationOn size="22px" color="#E81D2C"/>
      
        <Text marginLeft="10px" fontSize="15px" textAlign={"left"}width="100%" noOfLines={1}>¿Donde puedes encontrarnos?</Text> 
        
        <AccordionIcon /></Box>
      </MenuButton>
      <MenuList paddingBottom={"7px"}  marginTop={"2px"} background="white" position={"absolute"} borderRadius="8px"boxSizing={"border-box"} width={"382px"} boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"}> 
        <HStack justifyContent="space-between" width="100%"> 
          <VStack alignItems="flex-start" width="100%">
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(1)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Tulum, Q.R., México</Text>
            </MenuItem>
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(2)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>CDMX</Text>
            </MenuItem>
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(3)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Mérida</Text>
            </MenuItem>
             <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(4)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Playa del Carmen Q.R.</Text>
            </MenuItem>
            
          </VStack>   
        </HStack>
      </MenuList>
    </AccordionItem>
  </Accordion>
  </Menu>
      :
     address==1?
     <>
     <Menu>
       <Accordion  allowToggle defaultIndex={[1]}  maxWidth="80%" minHeight="38px" marginBottom={"50px"} >
      <AccordionItem  background={"#FFC700"}  borderRadius={"5px"} width={"382px"} boxSizing={"border-box"} boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"}>

        
        <MenuButton>
        <Box width={"352px"} justifyContent="space-between" alignItems="center" display="flex" flexDirection={"row"}>
      <MdLocationOn size="22px" color="#E81D2C"/>
      
      <Text marginLeft="10px" fontSize="15px" textAlign={"left"}width="100%" noOfLines={1}>Tulum, Q.R., México</Text> 
        
        <AccordionIcon /></Box>
      </MenuButton>
      <MenuList paddingBottom={"7px"}  marginTop={"2px"} background="white" position={"absolute"} borderRadius="8px"boxSizing={"border-box"} width={"382px"} boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"}> 
        <HStack justifyContent="space-between" width="100%"> 
          <VStack alignItems="flex-start" width="100%">
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(1)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Tulum, Q.R., México</Text>
            </MenuItem>
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(2)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>CDMX</Text>
            </MenuItem>
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(3)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Mérida</Text>
            </MenuItem>
             <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(4)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Playa del Carmen Q.R.</Text>
            </MenuItem>
            
          </VStack>   
        </HStack>
      </MenuList>
    </AccordionItem>
       <Box marginTop="20px"  flexDirection={"column"}  justifyContent="center" alignItems="center" display="flex">
       
       <Box marginBottom="20px" paddingY="10px" minW="382px" maxW={"382px"} flexDirection="column" paddingX="10px" display="flex" alignItems={"center"} borderRadius="16.37px" height="max-content" maxWidth="100%" background="linear-gradient(180deg, #FFC803 0%, #F39400 100%)"boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"} >
        
        {/* <Container boxSize="220px" margin="15px auto" display="flex" justifyContent="center" alignItems="center">
                <div className="mapouter"><div className="gmap_canvas"><iframe width="220" height="220" id="gmap_canvas" src={`https://maps.google.com/maps?q=20.6363514,-87.0671705&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div>
                </Container> */}


        <Container padding={0} boxSize="100%" marginTop="10px" display="flex" justifyContent="center"  minW="342px" maxW={"342px"}>
           {/* <div className="mapouter"><div className="gmap_canvas"><iframe width="100%"  height="150px" id="gmap_canvas" src={`https://maps.google.com/maps?q=20.6363514,-87.0671705&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div> */}
           <div className="mapouter"><div className="gmap_canvas"><iframe width="328px" height="220" id="gmap_canvas" src={`https://maps.google.com/maps?q=20.1859722,-87.4654109&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div>
         </Container>
         <Box  marginTop="10px" display="flex" alignItems={"center"} width="90%" marginX="15px" flexDirection="row">
           <Image marginRight={"2px"} height="11px" src={star} />
          <Text maxWidth={"302px"} fontWeight={700} fontSize="15px" textAlign={"left"}>Calle 31 Poniente con esquina calle 4 Sur, 77765 Tulum, Q.R., México</Text>
         </Box>
         <Box width="90%" display="flex" alignItems={"center"}  marginX="15px" flexDirection="row">
           <Image marginRight={"2px"} height="11px" src={clock}/>
            <Text  fontSize={"13px"} >Horarios de atención</Text>
         </Box>
         <Box width="90%" display="flex" textAlign={"left"} flexDirection={"row"}>
            <Text fontSize={"13px"} fontWeight={"700"}  marginRight={"3px"}>Lunes a Viernes</Text> <Text fontSize={"13px"} textAlign={"left"} > de 9:00am a 6:00pm</Text>
          </Box>
          <Box  width="90%" display="flex" flexDirection={"row"}>
            <Text fontSize={"13px"} fontWeight={"700"} textAlign={"left"}  marginRight={"3px"}>Sábado</Text> <Text fontSize={"13px"}  textAlign={"left"}> de 10:00am a 5:00pm</Text>
          </Box>
       </Box>
     </Box>
  </Accordion>
  </Menu>
     </>
    : 
    address==2?
    <>
    <Menu>
   <Accordion  allowToggle  maxWidth="80%" minHeight="38px" marginBottom={"50px"} >
      <AccordionItem background={"#FFC700"}  borderRadius={"5px"}width={"382px"} boxSizing={"border-box"} boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"}>
      <MenuButton >
      <Box width={"352px"} justifyContent="space-between" alignItems="center" display="flex" flexDirection={"row"}>
      <MdLocationOn size="22px" color="#E81D2C"/>
      
        <Text marginLeft="10px" fontSize="15px" textAlign={"left"}width="100%" noOfLines={1}>CDMX</Text> 
        
        <AccordionIcon /></Box>
      </MenuButton>
      <MenuList paddingBottom={"7px"}  marginTop={"2px"} background="white" position={"absolute"} borderRadius="8px"boxSizing={"border-box"} width={"382px"} boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"}> 
        <HStack justifyContent="space-between" width="100%"> 
          <VStack alignItems="flex-start" width="100%">
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(1)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Tulum, Q.R., México</Text>
            </MenuItem>
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(2)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>CDMX</Text>
            </MenuItem>
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(3)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Mérida</Text>
            </MenuItem>
             <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(4)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Playa del Carmen Q.R.</Text>
            </MenuItem>
            
          </VStack>   
        </HStack>
      </MenuList>
    </AccordionItem>
       <Box marginTop="20px" flexDirection={"column"} justifyContent="center" alignItems="center" display="flex">
       
       <Box marginBottom="20px" paddingY="10px" flexDirection="column"  minW="382px" maxW={"382px"} paddingX="10px" display="flex" alignItems={"center"} borderRadius="16.37px" height="max-content" maxWidth="100%" background="linear-gradient(180deg, #FFC803 0%, #F39400 100%)"boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"} >
        
        {/* <Container boxSize="220px" margin="15px auto" display="flex" justifyContent="center" alignItems="center">
                <div className="mapouter"><div className="gmap_canvas"><iframe width="220" height="220" id="gmap_canvas" src={`https://maps.google.com/maps?q=20.6363514,-87.0671705&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div>
                </Container> */}


        <Container padding={0} boxSize="100%" marginTop="10px" display="flex" justifyContent="center" alignItems="center"  minW="342px" maxW={"342px"} >
           {/* <div className="mapouter"><div className="gmap_canvas"><iframe width="100%"  height="150px" id="gmap_canvas" src={`https://maps.google.com/maps?q=20.6363514,-87.0671705&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div> */}
           <div className="mapouter"><div className="gmap_canvas"><iframe width="328px" height="220" id="gmap_canvas" src={`https://maps.google.com/maps?q=19.4333361,-99.1943975&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div>
         </Container>
         <Box  marginTop="10px" display="flex" alignItems={"center"} width="90%" marginX="15px" flexDirection="row">
           <Image marginRight={"2px"} height="11px" src={star} />
          <Text fontWeight={700} fontSize="15px" maxW="300px" noOfLines={3} textAlign={"left"}>Av. Horacio 632, Ciudad de México</Text>
         </Box>
         <Box width="90%" display="flex" alignItems={"center"}  marginX="15px" flexDirection="row">
           <Image marginRight={"2px"} height="11px" src={clock}/>
            <Text  fontSize={"13px"} >Horarios de atención</Text>
         </Box>
         <Box width="90%" display="flex" textAlign={"left"} flexDirection={"row"}>
            <Text fontSize={"13px"} fontWeight={"700"}  marginRight={"3px"}>Lunes a Viernes</Text> <Text fontSize={"13px"} textAlign={"left"} > de 9:00am a 6:00pm</Text>
          </Box>
          <Box  width="90%" display="flex" flexDirection={"row"}>
            <Text fontSize={"13px"} fontWeight={"700"} textAlign={"left"}  marginRight={"3px"}>Sábado</Text> <Text fontSize={"13px"}  textAlign={"left"}> de 10:00am a 5:00pm</Text>
          </Box>
       </Box>
     </Box> </Accordion>
     </Menu>
     </>
   :
   address==3?
    <>
    <Menu>
     <Accordion allowToggle  maxWidth="80%" minHeight="38px" marginBottom={"50px"} >
    <AccordionItem  background={"#FFC700"} borderRadius={"5px"} width={"382px"} boxSizing={"border-box"} boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"}>
        <MenuButton >
         <Box width={"352px"} justifyContent="space-between" alignItems="center" display="flex" flexDirection={"row"}>
        <MdLocationOn size="22px" color="#E81D2C"/>
        
          <Text marginLeft="10px" fontSize="15px" textAlign={"left"}width="100%" noOfLines={1}>Mérida</Text> 
          
          <AccordionIcon /></Box>
        </MenuButton>
         <Box width={"352px"} justifyContent="space-between" alignItems="center" display="flex" flexDirection={"row"}></Box>
        <MenuList paddingBottom={"7px"}  marginTop={"2px"} background="white" position={"absolute"} borderRadius="8px"boxSizing={"border-box"} width={"382px"} boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"}> 
        <HStack justifyContent="space-between" width="100%"> 
          <VStack alignItems="flex-start" width="100%">
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(1)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Tulum, Q.R., México</Text>
            </MenuItem>
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(2)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>CDMX</Text>
            </MenuItem>
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(3)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Mérida</Text>
            </MenuItem>
             <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(4)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Playa del Carmen Q.R.</Text>
            </MenuItem>
            
          </VStack>   
        </HStack>
      </MenuList>
      </AccordionItem>
      <Box marginTop="20px" flexDirection={"column"}  justifyContent="center" alignItems="center" display="flex">
       
       <Box marginBottom="20px" paddingY="10px" flexDirection="column"   minW="382px" maxW={"382px"}  paddingX="10px" boxShadow={"inset 4.42173px 4.42173px 22.1087px rgba(0, 0, 0, 0.25)"} display="flex" alignItems={"center"} borderRadius="16.37px" height="max-content" maxWidth="100%" background="linear-gradient(180deg, #FFC803 0%, #F39400 100%)">
         <Container padding={0} marginTop="5px" display="flex" justifyContent="center" alignItems="center"  minW="342px" maxW={"342px"} >
           <div className="mapouter"><div className="gmap_canvas"><iframe width="328px" height="220" id="gmap_canvas" src={`https://maps.google.com/maps?q=21.0356055,-89.596108&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div>
         </Container>
         <Box  marginTop="10px" display="flex" alignItems={"center"} width="90%" marginX="15px" flexDirection="row">
           <Image marginRight={"2px"} height="11px" src={star}/>
          <Text  maxWidth={"302px"} fontWeight={700} fontSize="15px"  textAlign={"left"}>C. 12-A 301, Montebello, 97113 Mérida, Yuc., México</Text>
         </Box>
         <Box width="90%" display="flex" alignItems={"center"}  marginX="15px" flexDirection="row">
           <Image marginRight={"2px"} height="11px" src={clock}/>
            <Text  fontSize={"13px"} >Horarios de atención</Text>
         </Box>
         <Box width="90%" display="flex" textAlign={"left"} flexDirection={"row"}>
            <Text fontSize={"13px"} fontWeight={"700"}  marginRight={"3px"}>Lunes a Viernes</Text> <Text fontSize={"13px"} textAlign={"left"} > de 9:00am a 6:00pm</Text>
          </Box>
          <Box  width="90%" display="flex" flexDirection={"row"}>
            <Text fontSize={"13px"} fontWeight={"700"} textAlign={"left"}  marginRight={"3px"}>Sábado</Text> <Text fontSize={"13px"}  textAlign={"left"}> de 10:00am a 5:00pm</Text>
          </Box>
       </Box>
     </Box> 
     </Accordion>
     </Menu>
      </>
      :   <>
      <Menu>
     <Accordion   allowToggle  maxWidth="80%" minHeight="38px" marginBottom={"50px"} >
      <AccordionItem  background={"#FFC700"} borderRadius={"5px"} width={"382px"} boxSizing={"border-box"} boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"}>
          <MenuButton>
          <Box width={"352px"} justifyContent="space-between" alignItems="center" display="flex" flexDirection={"row"}>
          <MdLocationOn size="22px" color="#E81D2C"/>
          
            <Text marginLeft="10px" fontSize="15px" textAlign={"left"}width="100%" noOfLines={1}>Playa del Carmen Q.R.</Text> 
            
            <AccordionIcon /></Box>
          </MenuButton>
          <MenuList paddingBottom={"7px"}  marginTop={"2px"} background="white" position={"absolute"} borderRadius="8px"boxSizing={"border-box"} width={"382px"} boxShadow={"1.38333px 1.38333px 2.76666px rgba(0, 0, 0, 0.25)"}> 
        <HStack justifyContent="space-between" width="100%"> 
          <VStack alignItems="flex-start" width="100%">
            <MenuItem paddingX="8px" paddingY="2px"  _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(1)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Tulum, Q.R., México</Text>
            </MenuItem>
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(2)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>CDMX</Text>
            </MenuItem>
            <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(3)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Mérida</Text>
            </MenuItem>
             <MenuItem paddingX="8px" paddingY="2px" _hover={{cursor:"pointer"}} onClick={(e:any)=>setAddress(4)} justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
              <Text>Playa del Carmen Q.R.</Text>
            </MenuItem>
            
          </VStack>   
        </HStack>
      </MenuList>
        </AccordionItem>
        <Box marginTop="20px" flexDirection={"column"}  justifyContent="center" alignItems="center" display="flex">
         
         <Box marginBottom="20px" paddingY="10px" flexDirection="column"   minW="382px" maxW={"382px"}  paddingX="10px" boxShadow={"inset 4.42173px 4.42173px 22.1087px rgba(0, 0, 0, 0.25)"} display="flex" alignItems={"center"} borderRadius="16.37px" height="max-content" maxWidth="100%" background="linear-gradient(180deg, #FFC803 0%, #F39400 100%)">
           <Container padding={0} marginTop="5px" display="flex" justifyContent="center" alignItems="center"  minW="342px" maxW={"342px"} >
             <div className="mapouter"><div className="gmap_canvas"><iframe width="328px" height="220" id="gmap_canvas" src={`https://maps.google.com/maps?q=20.6232929,-87.0999665&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div>
           </Container>
           <Box  marginTop="10px" display="flex" alignItems={"center"} width="90%" marginX="15px" flexDirection="row">
             <Image marginRight={"2px"} height="11px" src={star}/>
            <Text  maxWidth={"302px"} fontWeight={700} fontSize="15px"  textAlign={"left"}>41 Sur MZ312 L1, Ejido Sur, 77712 Playa del Carmen, Q.R., México</Text>
           </Box>
           <Box width="90%" display="flex" alignItems={"center"}  marginX="15px" flexDirection="row">
             <Image marginRight={"2px"} height="11px" src={clock}/>
              <Text  fontSize={"13px"} >Horarios de atención</Text>
           </Box>
           <Box width="90%" display="flex" textAlign={"left"} flexDirection={"row"}>
              <Text fontSize={"13px"} fontWeight={"700"}  marginRight={"3px"}>Lunes a Viernes</Text> <Text fontSize={"13px"} textAlign={"left"} > de 9:00am a 6:00pm</Text>
            </Box>
            <Box  width="90%" display="flex" flexDirection={"row"}>
              <Text fontSize={"13px"} fontWeight={"700"} textAlign={"left"}  marginRight={"3px"}>Sábado</Text> <Text fontSize={"13px"}  textAlign={"left"}> de 10:00am a 5:00pm</Text>
            </Box>
         </Box>
       </Box> 
      </Accordion>
      </Menu>
        </>
    }
    
 
       
       
       



     

      </Box>
      <Box height="686px" background="radial-gradient(87.09% 248.88% at 2.35% 100%, #014198 0%, #0070E0 100%)" display="flex" flexDirection="column" alignItems="center">
        <Box textAlign={"center"} paddingX="55px" marginTop="20px" >
          <Text fontSize="17px" fontWeight={700} color="white">Comunícate con nosotros</Text>
          <Text fontSize="14px" fontWeight={500} color="white">Nuestro asesor de ventas siempre está a tu disposición.</Text>
        </Box>
        <Box paddingY="15px" display={"flex"} flexDirection={"column"} height="90px" marginBottom={"10px"}>
          <Button  filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}  onClick={handleCopy} width="237px"  minHeight="28px" disabled={copied} borderRadius="33.8px"><Text color="#1D467C" fontSize="13px">{ copied ? "Copiado" : "Llamar"}</Text></Button>
          <a href="https://wa.link/zfmin0" target="_blank"><Button  filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}  display="flex" height="28px" width="237px" margin="10px auto" fontSize="13px" fontWeight="700" textAlign="center"  color="white" backgroundColor="#FB9F34" borderRadius="33.82px"><Text fontSize="13px" color="white">Whatsapp</Text></Button></a>
        </Box>
        <Divider color="white" width="90%" marginBottom="15px" />
        <Box display="flex" flexDirection="column" alignItems={"center"}>
          <Box textAlign={"center"} paddingX="40px">
            <Text fontSize="17px" fontWeight={700} color="white">¿Prefieres programar la llamada?</Text>
            <Text paddingX="15px" fontSize="14px" fontWeight={500} color="white">Dejanos tus datos y un asesor se pondrá en contacto.</Text>
          </Box>
          <Box maxWidth="260px" marginTop="15px" display="flex" flexDirection="column">
            <Text marginY="2px" fontSize="13px" color="white" fontWeight={500}>Nombre completo (*)</Text>
            <Input onChange={(e: any) => setName(e.target.value)} borderWidth="1.1px" borderColor="#666666" marginY="2px" width="260px" height="32.02px" backgroundColor={"white"} />
            <Text marginY="2px" fontSize="13px" color="white" fontWeight={500}>E-mail (*)</Text>
            <Input onChange={(e: any) => setEmail(e.target.value)} borderWidth="1.1px" borderColor="#666666" marginY="2px" width="260px" height="32.02px" backgroundColor={"white"} />
            <Text marginY="2px" fontSize="13px" color="white" fontWeight={500}>Teléfono</Text>
            <Input onChange={(e: any) => setPhone(e.target.value)} borderWidth="1.1px" borderColor="#666666" marginY="2px" width="260px" height="32.02px" backgroundColor={"white"} />
            <Text marginY="2px" fontSize="13px" color="white" fontWeight={500}>¿Cuál es el principal objetivo que quiero darle a la propiedad? (*)</Text>
            <Select onChange={(e: any) => setReason(e.target.value)} borderWidth="1.1px" borderColor="#666666" placeholder="" marginY="2px" height="32.02px" backgroundColor={"white"}>
              <option>Inversión inmobiliaria</option>
              <option>Uso propio</option>
              <option>Ambos</option>
            </Select>


            {/* <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} >
    
    <Input borderWidth="1.1px" borderColor="#666666" marginY="2px"  width="119px" height="32.02px" backgroundColor={"white"}/>
    </Box > */}
            <Box display={"flex"} flexDirection={"row"}>
              <Box width="130px">
                <Text marginY="2px" fontSize="13px" color="white" fontWeight={500}>Fecha</Text>
                <Input onChange={(e: any) => setDate(e.target.value)} placeholder='dd/mm/aaaa' borderWidth="1.1px" borderColor="#666666" marginY="2px" width="119px" height="32.02px" backgroundColor={"white"} />
              </Box>
              <Box width="130px">
                <Text marginY="2px" fontSize="13px" color="white" fontWeight={500}>Hora</Text>
                <Input onChange={(e: any) => setHour(e.target.value)} borderWidth="1.1px" borderColor="#666666" marginY="2px" width="119px" height="32.02px" backgroundColor={"white"} />
              </Box>
            </Box>
            
            <Button  filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}  onClick={handleClick} marginY="18px" height={"30px"} disabled={name.length&&email.length&&phone.length&&reason.length?false:true} backgroundColor="#FB9F34" textAlign="center" color="white" borderRadius="33.8px">{phonecallReducer.fetching ? <Spinner size="md" /> : "Enviar"}</Button>
          </Box>
        </Box>
        </Box>
        <ContactModal phoneCallReducer={phonecallReducer} isOpen={isOpen} onClose={onClose} phonecall={phonecall} />
        
        <SendedModal phonecall={phonecall} isOpen={isOpenSendedModal}  onClose={onCloseSendedModal}/>
      
    </>
  )
}
