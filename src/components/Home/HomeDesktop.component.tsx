import { Container, Text } from '@chakra-ui/layout'
import { Button, HStack, Box, Image,Divider, Input, Select, useDisclosure, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, VStack, MenuOptionGroup, MenuItem, Menu, MenuList, MenuButton, MenuIcon} from '@chakra-ui/react'
import React, { useState, useRef } from 'react'

import { FeaturedController } from '../../controllers/Featured'
import { SearchbarController } from '../../controllers/Search'
import backLogosD from "../../images/backLogosD.png"
import group from "../../images/group.png"
import conocercolor from "../../images/conocercolor.png"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Facebook from "../../images/Redes/Facebook.svg"
import Tiktok from "../../images/Redes/Tiktok.svg"
import LinkedIn from "../../images/Redes/LinkedIn.svg"
import Instagram from "../../images/Redes/Instagram.svg"
import Youtube from "../../images/Redes/Youtube.svg"

import registerlogo from '../../images/registerLogo.svg'
import SPONSORd1 from '../../images/SPONSORS/SPONSORd1.png'
import SPONSORd2 from '../../images/SPONSORS/SPONSORd2.png'
import SPONSORd3 from '../../images/SPONSORS/SPONSORd3.png'
import { FaPhoneSquareAlt, FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';
import CONTACTARME from "../../images/CONTACTARME.png"
import { ContactModal } from '../Modals/ContactModal'
import star from "../../images/star.png"
import clock from "../../images/clock.png"
import { MdEmail,MdLocationOn ,MdOutlineArrowBackIosNew } from 'react-icons/md'
import './styles.css'
import LOGOBLANCO from "../../images/LOGOBLANCO.png"
import BANNERD1 from "../../images/BANNERD1.png"
import BANNERD2 from "../../images/BANNERD2.png"
import BANNERD3 from "../../images/BANNERD3.png"
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import backHomeSponsor from '../../images/backHomeSponsor.png'
import backHomeNum from '../../images/backHomeNum.png'
import backSearch from '../../images/backSearch.png'
import LogoBannerD from "../../images/LogoBannerD.png"
import { url } from 'inspector'
import { ClientCardController } from '../../controllers/ClientCard'
import { SendedModal } from '../Modals/SendedModal'

interface HomeProps{
  callInfo:any,
  phonecall:(name:string, email:string, phone:string, reason:string )=>void,
  phonecallReducer:any
  configurationReducer:any
  Config: any,
  satisfiedCustomersList:any
   
}

export const HomeDesktop = ({callInfo, phonecall, phonecallReducer,configurationReducer,satisfiedCustomersList,Config}: HomeProps) => {
  const countUpRef = useRef<HTMLParagraphElement>(null);
  const [value, setValue] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hour, setHour] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [banners, setBanners] = useState([]);
  const [banner1, setBanner1] = useState(false);
  const [banner2, setBanner2] = useState(false);
  const [banner3, setBanner3] = useState(false);
  const [address, setAddress] = useState(0);
  const [ copied, setCopied ] = useState(false)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
  };
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false
    
    
  };

  const { 
    isOpen: isOpenSendedModal, 
    onOpen: onOpenSendedModal, 
    onClose: onCloseSendedModal 
} = useDisclosure()
  const onChange = (value: any) => {
    
      setValue(value)
      
      }

  let sponsor = [ SPONSORd1, SPONSORd2, SPONSORd3]
  const handleContact = () =>{
    onOpen()
  }

  const handleCopy = () => {
    navigator.clipboard.writeText("+52 1 984 218 1599");
    setCopied(!copied)
  }

  const handleReset = () =>{
    setBanner1(false)
    setBanner2(false)
    setBanner3(false)
  }
  const handleClick = () => {
    if(name!=="" && email!==""&& phone!==""&&  reason!==""){
      phonecall(name, email, phone, reason)

      
    }
    onOpenSendedModal()
  }


  return (
    
    <Box maxWidth={"100vw"}>
  

    
    {(!banner1&&!banner2&&!banner3)?
     <Box  display="flex" flexDirection={"row"} minWidth="100%" maxWidth={"100%"} >
     
          <Box _hover={{cursor:"pointer"}} padding={0} onClick={()=>setBanner1(!banner1)} height="622px" width={"33%"} marginRight="-1px" backgroundImage={BANNERD1} backgroundPosition={"cover"} backgroundSize="cover" display={"flex"} flexDirection="column" alignItems={"center"} >
            <Text marginTop="220px"  fontWeight={800} color="white" fontSize={"36.95px"}>BROKERS</Text>
            <Box>
            <Image marginTop="50px" src={LogoBannerD}/>
            </Box>
          </Box>
          <Box _hover={{cursor:"pointer"}} padding={0} onClick={()=>setBanner2(!banner2)} height="622px" width={"34%"} marginRight="-1px" backgroundImage={BANNERD2} backgroundPosition={"cover"} backgroundSize="cover" display={"flex"} flexDirection="column" alignItems={"center"} >
            <Text marginTop="220px"  fontWeight={800} color="white" fontSize={"36.95px"}>INVERSIONISTAS</Text>
            <Image marginTop="50px" src={LogoBannerD}/>
          </Box>
          <Box _hover={{cursor:"pointer"}} padding={0} onClick={()=>setBanner3(!banner3)} height="622px" width={"33%"} backgroundImage={BANNERD3} backgroundPosition={"cover"} backgroundSize="cover" display={"flex"} flexDirection="column" alignItems={"center"} >
            <Text marginTop="220px"  fontWeight={800} color="white" fontSize={"36.95px"}>DESARROLLADORES</Text>
            <Image marginTop="50px" src={LogoBannerD}/>
          </Box>
         
          
            
          
          
   
       </Box>
       :
       banner1?
       <Box className='banner' paddingBottom="0px" paddingLeft={"20px"} backgroundSize={"100%"} display="flex" flexDirection={"row"} height={"622px"} backgroundImage={"https://static.ecosaludcentro.com/image/imexico/configuration/1645097692-Group%207311.png"}   alignItems={"center"}>
       <Box _hover={{cursor:"pointer"}}>
       <MdOutlineArrowBackIosNew color="white"  size={"40px"}  onClick={handleReset}/></Box>
       <Image src={LogoBannerD} marginLeft="5%" marginBottom={"100px"} />
       <Box display="flex" flexDirection="column"  marginBottom={"30px"} maxWidth={"50%"} alignItems="flex-end" marginLeft="22%" >
            <Text textAlign={"right"} fontSize={"100px"} color="white" fontWeight={800} textShadow="0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25);">BROKERS</Text>
            <Text textAlign={"right"} fontSize={"25px"} color="white" fontWeight={700} textShadow="5px 5px 10px rgba(0, 0, 0, 0.4)">¿Quieres formar parte de Imexico mediante? Conversemos. Estamos a un clic de distancia</Text>
            <Box className='Contactarme' onClick={handleContact} marginTop="20px" width="241px" height={"27px"} background="rgba(0, 0, 0, 0.4)" borderRadius={"91.88px"} border="1.83766px solid #FFFFFF" display="flex" flexDirection={"column"} justifyContent="center"><Text textAlign="center" fontSize={"15px"} color="white" fontWeight={700}>Contactarme</Text></Box>
           </Box>
           </Box>
         
       :
       banner2?
       <Box className='banner' paddingBottom="0px" paddingLeft={"20px"} backgroundSize={"100%"} display="flex" flexDirection={"row"} height={"622px"} backgroundImage={"https://static.ecosaludcentro.com/image/imexico/configuration/1645097708-Group%207310.png"}   alignItems={"center"}>
       <Box _hover={{cursor:"pointer"}}>
       <MdOutlineArrowBackIosNew color="white"  size={"40px"}  onClick={handleReset}/></Box>
       <Image src={LogoBannerD} marginLeft="5%"  marginBottom={"100px"}/>
       <Box display="flex" flexDirection="column"  marginBottom={"30px"} maxWidth={"50%"} alignItems="flex-end" marginLeft="22%" >
         <Text textAlign={"right"} fontSize={"100px"} color="white" fontWeight={800} textShadow="0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25);">INVERSIONISTAS</Text>
         <Text textAlign={"right"} fontSize={"25px"} color="white" fontWeight={700} textShadow="5px 5px 10px rgba(0, 0, 0, 0.4)">Conocé las excelentes propiedades que te ofrece IMexico. Encontrá el lugar donde la realidad se vuelve mágica.</Text>
         <Box className='Contactarme' onClick={handleContact} marginTop="20px" width="241px" height={"27px"} background="rgba(0, 0, 0, 0.4)" borderRadius={"91.88px"} border="1.83766px solid #FFFFFF" display="flex" flexDirection={"column"} justifyContent="center"><Text textAlign="center" fontSize={"15px"} color="white" fontWeight={700}>Contactarme</Text></Box>
         
       </Box>
       </Box>
       :
       
       <Box className='banner' paddingBottom="0px" paddingLeft={"20px"} backgroundSize={"100%"} display="flex" flexDirection={"row"} height={"622px"} backgroundImage={"https://static.ecosaludcentro.com/image/imexico/configuration/1645097724-Group%207309.png"}   alignItems={"center"}>
       <Box _hover={{cursor:"pointer"}}>
       <MdOutlineArrowBackIosNew color="white"  size={"40px"}  onClick={handleReset}/></Box>
       <Image src={LogoBannerD} marginLeft="5%"  marginBottom={"100px"}/>
       <Box display="flex" flexDirection="column"  marginBottom={"30px"} maxWidth={"50%"} alignItems="flex-end" marginLeft="22%" >
         <Text textAlign={"right"} fontSize={"80px"} color="white" fontWeight={800} textShadow="0px 4.22335px 10.5584px rgba(0, 0, 0, 0.25);">DESARROLLADORES</Text>
         <Text textAlign={"right"} fontSize={"25px"} color="white" fontWeight={700} textShadow="5px 5px 10px rgba(0, 0, 0, 0.4)">Quienes confían en el potencial de IMexico son quienes nos impulsan a seguir creciendo. ¿Te interesa ser desarollista? Este es tu lugar.</Text>
         <Box className='Contactarme' onClick={handleContact} marginTop="20px" width="241px" height={"27px"} background="rgba(0, 0, 0, 0.4)" borderRadius={"91.88px"} border="1.83766px solid #FFFFFF" display="flex" flexDirection={"column"} justifyContent="center"><Text textAlign="center" fontSize={"15px"} color="white" fontWeight={700}>Contactarme</Text></Box>
         
         </Box>
         </Box>
      }
            
         

    <Box backgroundImage={backSearch} width="100%" backgroundSize={"cover"} alignItems={"center"} display="flex" flexDirection={"column"} height={"147px"}>
        <Text fontSize="36px" fontWeight="500px" textAlign="center" color="white">Encuentra <strong>la propiedad</strong> de tus sueños.</Text>
       
        <SearchbarController/>
    </Box>
    <Box height="230px" backgroundColor={"#e5e5e5"}  boxShadow="0px 6px 6px rgba(0, 0, 0, 0.35)">
    <Box boxShadow="0px 6px 6px rgba(0, 0, 0, 0.35)" backgroundImage={backLogosD} backgroundSize="cover" minWidth={"100%"} height="216px" display="flex" flexDirection={"row"} justifyContent="center">
      <Box width="50%" display="flex" flexDirection={"row"} justifyContent="space-between" paddingX="9%" alignItems="center">
        <Text fontWeight={700} fontSize="17px" width="232px">Prestadores de Servicios del Sistema Nacional de Competencias</Text>      
        <Image src={conocercolor} />
      </Box>
      <Box width="50%" display="flex" flexDirection={"row"} justifyContent="space-between" paddingX="12%" alignItems="center">
      <Text fontWeight={700} fontSize="17px" width="232px">Organismo Certificador</Text>      
      <Image  src={group}/>
      </Box>
    </Box>
    </Box>
    
    
    <Box height={"498px"} backgroundImage={backHomeNum} backgroundSize="cover">
      <Image src={LOGOBLANCO} margin="0 auto" paddingTop="70px" paddingBottom={"20px"}/>
      
      <Box paddingTop="60px" justifyContent={"space-between"} paddingX="180px" display="flex" flexDirection="row">
      
   <CountUp start={0} end={30000} duration={2}  decimals={0} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
      <Box>
      <HStack margin="0 auto" justifyContent="center"><Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"}>+</Text><Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"} ref={countUpRef as React.RefObject<HTMLParagraphElement>}></Text></HStack>
       <Text color="white" textAlign={"center"} fontSize="20.01" fontWeight={500}>Brokers Afiliados</Text>
      </Box>
      </VisibilitySensor>
      )}
   </CountUp>
   <CountUp start={0} end={25} duration={2} decimals={0} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
      <Box>
      <HStack margin="0 auto" justifyContent="center"><Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"}>+</Text><Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"} ref={countUpRef as React.RefObject<HTMLParagraphElement>}></Text></HStack>
       <Text color="white" textAlign={"center"} fontSize="20.01" fontWeight={500}>Opciones de inversión</Text>
      </Box>
      </VisibilitySensor>
      )}
   </CountUp>
   <CountUp start={0} end={15} duration={2} decimals={0} redraw={true}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
      <Box>
      <Text color="white" textAlign={"center"} fontWeight={700} fontSize={"55.67px"} ref={countUpRef as React.RefObject<HTMLParagraphElement>}></Text>
      <Text color="white" textAlign={"center"} fontSize="20.01" fontWeight={500}>Años de experiencia</Text>
      </Box>
      </VisibilitySensor>
      )}
   </CountUp>
      </Box>
      </Box>
     
      <FeaturedController title={"Las propiedades que estas buscando"}/>



      <Box  display={"flex"} flexDirection={"row"} maxWidth="100%" >
      
      <Box backgroundImage={backHomeSponsor} backgroundSize="cover" width="100%" height={"693px"} display="flex" flexDirection="column" alignItems="center" >
        <Text marginTop="20px"  paddingTop="10px" color="#1D467C" textAlign={"center"} fontSize="30px" fontWeight={700}>Partners comerciales</Text>
          <Container minWidth="100%" paddingRight={"5%"} alignItems="center" >
          <Slider {...settings1}>
          {sponsor?.map((photo: any, index: number) => {
                            return <Image height={"570px"} width="auto" key={index}  src={photo}/>
                        })}
          </Slider></Container>
       </Box>
      </Box>
    
    <Box height={"521px"} backgroundColor={"white"} display="flex" flexDirection={"row"} >
      <Box width={"50%"} height="100%" justifyContent={"center"} alignItems="center" display={"flex"}>
        <Box display="flex" flexDirection={"column"} backgroundColor={"white"}  alignItems={"center"} >
          <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
            <Image width="auto" height="auto" src={registerlogo} margin="0 auto" paddingTop="51px" paddingBottom="30px"/>
          </Box>
      
          <Box display="flex" flexDirection={"row"} alignItems={"center"}> 
            <FaPhoneSquareAlt size={"17px"} style={{marginTop:"5px"}} color="#E81D2C" />
            <Text marginLeft="10px"  fontSize={"21px"} >(+52) 1 984 218 1599</Text>
          </Box>
          <Box display="flex" flexDirection={"row"}> 
            <MdEmail size={"18px"} style={{marginTop:"5px" }} color="#E81D2C" />
            <Text marginLeft="10px"  fontSize={"21px"}>info@imexicorealestate.com</Text>
          </Box>
          <Divider width="100%" borderWidth="0.5px" borderColor="#A4A4A4" color="#A4A4A4" marginY="20px"/>
      
          <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} width="100%" >
          <a href="https://www.facebook.com/imexico.realestate" target="_blank"> <Image src={Facebook}/></a>
        <a href="https://www.instagram.com/imexico.realestate" target="_blank"> <Image src={Instagram}/></a>
        <a href="https://www.youtube.com/channel/UCFSMo37utXcCmk_joGOWeJg" target="_blank" rel="noreferrer"> <Image src={Youtube}/></a>
          <a href="https://mx.linkedin.com/company/imexicorealestate" target="_blank"> <Image src={LinkedIn}/></a>
          <a href="https://www.tiktok.com/@imexico.realestate?lang=es" target="_blank"> <Image src={Tiktok}/></a>

          </Box>
          <Divider width="100%" borderWidth="0.5px" borderColor="#A4A4A4" color="#A4A4A4" marginY="20px"/>
          <Box display="flex" flexDirection={"row"}>
            <Text fontSize={"15px"} fontWeight={"700"} color="#1D467C" marginRight={"3px"}>Lunes a Viernes</Text> <Text fontSize={"15px"} fontWeight={"700"} color="#7A7A7A"> de 9:00am a 6:00pm</Text>
          </Box>
          <Box display="flex" flexDirection={"row"}>
            <Text fontSize={"15px"} fontWeight={"700"} color="#1D467C" marginRight={"3px"}>Sábado</Text> <Text fontSize={"15px"} fontWeight={"700"} color="#7A7A7A"> de 10:00am a 5:00pm</Text>
          </Box> 
        </Box>
      </Box>
      <Divider orientation="vertical" color="#A4A4A4" height={"85%"}  alignSelf="center" borderWidth="0.5px" borderColor="#A4A4A4"/>
      
      <Box width={"50%"} height="max-content" justifyContent={"center"}  display={"flex"} paddingTop="5%">
     
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
                  <Container padding={0} boxSize="100%" marginTop="10px" display="flex" justifyContent="center"  minW="342px" maxW={"342px"}>
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
    </Box>
    <Box  backgroundColor={"#E5E5E5"} height="430px" alignItems={"center"} flexDirection={"column"} display={"flex"}>
        <Text fontSize="20px" fontWeight={700} color="#545454" marginTop="20px" marginBottom={"30px"}>Clientes Satisfechos</Text>
       <Box paddingBottom={"20px"} className="scrollbar" overflowX="scroll" style={{}} paddingX="30px" display="flex" flexDirection={"row"}maxWidth={"100%"}>
        {satisfiedCustomersList?.map((e:any)=>{
          
          return <ClientCardController  client={e}/>
        })
        }</Box>
      </Box>
    <Box id="call-phone" paddingTop="40px" height={"409px"} background='radial-gradient(87.09% 248.88% at 2.35% 100%, #014198 0%, #0070E0 100%)' width="100%" display="flex" flexDirection={"row"} >
      <Box width={"40%"}>
        <Box textAlign={"center"} paddingX="55px" alignItems={"center"} flexDirection="column" display="flex" marginTop="65px" height={"150px"}>
          <Text fontSize="25px" fontWeight={700} color="white">Comunícate con nosotros</Text>
          <Text fontSize="17px" fontWeight={500} color="white" width="300px">Nuestro asesor de ventas siempre está a tu disposición.</Text>
        </Box>
        <Box  display={"flex"} flexDirection={"column"} height="90px" alignItems={"center"}>
          <Button filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} onClick={handleCopy} disabled={copied} height={"33px"} width="255px" borderColor="#1D467C" borderWidth={"2px"} borderRadius="33.8px"><Text color="#1D467C" fontSize="15.84px">{ copied ? "Copiado" : "Llamar"}</Text></Button>
          <a href="https://wa.link/zfmin0" target="_blank"><Button filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} height={"33px"} width="255px"  marginTop="8px" backgroundColor="#FB9F34" borderRadius="33.8px"><Text fontSize="13px" color="white">Whatsapp</Text></Button></a>
        </Box>
      </Box>
      <Divider orientation="vertical" backgroundColor="white" height={"85%"}  alignSelf="center" borderWidth="0.5px" borderColor="white"/>
      <Box width={"60%"}>
      <Box display="flex" flexDirection="column" alignItems={"center"}>
          <Box textAlign={"center"} paddingX="40px">
            <Text fontSize="25px" fontWeight={700} color="white">¿Prefieres programar la llamada?</Text>
            <Text paddingX="15px" fontSize="17px" fontWeight={500} color="white">Dejanos tus datos y un asesor se pondrá en contacto.</Text>
          </Box>
        <Box maxWidth="260px" marginTop="15px" display="flex" flexDirection="column"  alignItems={"center"} >
          <Box display="flex" flexDirection="row" >
            <Box display="flex" flexDirection="column" marginX="30px">
              <Text  marginY="2px" fontSize="13px" color="white" fontWeight={500}>Nombre completo (*)</Text>
              <Input onChange={(e:any)=>setName(e.target.value)} borderWidth="1.1px" borderColor="#666666" marginY="2px"  width="260px" height="32.02px" backgroundColor={"white"}/>
              <Text  marginTop="32px" fontSize="13px" color="white" fontWeight={500}>E-mail (*)</Text>
              <Input onChange={(e:any)=>setEmail(e.target.value)} borderWidth="1.1px" borderColor="#666666" marginY="2px"  width="260px" height="32.02px" backgroundColor={"white"}/>
            </Box>
            <Box display="flex" flexDirection="column" marginX="30px">
              <Text  marginY="2px" fontSize="13px" color="white" fontWeight={500}>Teléfono</Text>
              <Input onChange={(e:any)=>setPhone(e.target.value)} borderWidth="1.1px" borderColor="#666666" marginY="2px"  width="260px" height="32.02px" backgroundColor={"white"}/>
              <Text marginTop="12px" fontSize="13px" color="white" fontWeight={500}>¿Cuál es el principal objetivo que quiero darle a la propiedad? (*)</Text>
              <Select  onChange={(e:any)=>setReason(e.target.value)} borderWidth="1.1px" borderColor="#666666" placeholder="" marginY="2px" height="32.02px" backgroundColor={"white"}>
              
                <option >Inversión inmobiliaria</option>
                <option>Uso propio</option>
                <option>Ambos</option>
               
              </Select>
            </Box>
          </Box>
        
          <Button filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} disabled={name.length&&email.length&&phone.length&&reason.length?false:true} onClick={handleClick} marginTop="28px"  height={"33px"} width="255px" backgroundColor="#FB9F34" borderRadius="33.8px" ><Text fontSize="13px" color="white" >Enviar</Text></Button>
        </Box>
        </Box>
      </Box>
      </Box>
      <SendedModal phonecall={phonecall} isOpen={isOpenSendedModal}  onClose={onCloseSendedModal}/>
    <ContactModal phoneCallReducer={phonecallReducer}isOpen={isOpen} onClose={onClose} phonecall={phonecall} />
    </Box>
   
  )
} 
