import React, {useState} from 'react'
import share from '../../images/share.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import rooms from '../../images/rooms.svg'
import baths from '../../images/baths.svg'
import beds from '../../images/beds.svg'
import mts from '../../images/mts.svg'
import gps from '../../images/gps.svg'
import Carousel, { Dots, slidesToScrollPlugin, slidesToShowPlugin} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import {  Container, Text, HStack, Image, Menu, MenuButton, MenuList, MenuItem, Button, Box, Divider } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { SearchbarDesktopController } from '../../controllers/Search';
import PropertyInterface from '../../interfaces/Property';
interface DetailsCarouselProps {
   photos: {
        description: string,
        image: string,
    }[],
    selectedProperty: PropertyInterface,
    loading: boolean,
   

}

export const DetailsCarouselDesktop = ({photos, selectedProperty}: DetailsCarouselProps) => {
    let mobile = window.innerWidth
    const [value, setValue] = useState(0);
    const [destacado, setDestacado] = useState(true)
    const [venta, setVenta] = useState(true)
    const [preventa, setPreventa] = useState(true)
    const onChange = (value: any) => {
        setValue(value);
        }

        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          dots: false,
          centerPadding: "60px",
          slidesToShow: 1,
          speed: 500,
 
        };
    return (
        <>
            {photos?.length > 0 && <>
            <Box  backgroundColor={"white"} minWidth="100%" padding={0} overflow="hidden">
            <Box bgGradient='linear(to-r, #BD8F15 0%, #D8BC73 100%)'>
           
            {/* <HStack justifyContent="space-around" paddingY="15px">
                    <Menu>
                        <MenuButton width="100%" color="white" fontWeight="400" borderRadius={0} fontSize="13px" padding="0" backgroundColor="#BD8F15" as={Button} rightIcon={<ChevronUpIcon color="white"/>}>
                          Moneda
                        </MenuButton>
                        <MenuList>
                          <MenuItem>USD</MenuItem>
                          <MenuItem>MXN</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton width="100%" color="white" fontWeight="400" borderRadius={0} fontSize="13px" padding="0" backgroundColor="#BD8F15" as={Button} rightIcon={<ChevronUpIcon color="white"/>}>
                          Unidad de medida
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Cuadrados en metros - m2</MenuItem>
                          <MenuItem>Cuadrados en pies - ft2</MenuItem>
                          <MenuItem>Acres - ac</MenuItem>
                          <MenuItem>Cuadrados yardas - yd2</MenuItem>
                          <MenuItem>Hectáreas - ha</MenuItem>
                        </MenuList>
                    </Menu>
                </HStack> */}
                <SearchbarDesktopController/>
            </Box>
            <Breadcrumb  fontSize="13px" color="#5B5B5B" spacing='8px' paddingLeft="118px" separator={<ChevronRightIcon color='gray.500'/>}>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>{selectedProperty?.publication_title}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box display={"flex"}>
                <Box   paddingLeft={"118px"} minHeight={"500px"} paddingTop="50px" display="flex" flexDirection={"row"}>
               
                <Box paddingBottom="20px" marginBottom="20px" paddingY="10px" flexDirection="column" boxShadow='inset 4.821115016937256px 4.821115016937256px 24.105573654174805px 0px #0000004e' display="flex"  borderRadius="16.37px" height="max-content" width="310px" backgroundColor="#e6e6e6 ">
                <HStack display="flex" justifyContent="center" marginY="15px" >
                  { venta ? <Text  paddingX="9px" opacity="80%" fontSize="10px" fontWeight="700" color="white" backgroundColor="#1D467C" height="24px" width="auto" textAlign="center" paddingTop="5px">Disponible</Text> : null }
                  {/* { preventa ? <Text paddingX="9px"  opacity="80%" fontSize="10px" fontWeight="700" color="white" backgroundColor="#E81D2C" height="24px" width="auto" textAlign="center" paddingTop="5px">Listo para entregar</Text> : null }
                  { destacado ? <Text paddingX="9px"  opacity="80%" fontSize="10px" fontWeight="700" color="white" backgroundColor="#BD8F15" height="24px" width="auto" textAlign="center" paddingTop="5px">Entregado</Text> : null } */}
                </HStack>
                <Container  maxWidth="95%" textAlign="center" >
                  <Text as="h3" fontWeight="400" fontFamily="Raleway" noOfLines={2} overflow={"hidden"} fontSize="22.61px"  color="#000000"  textAlign="center">{selectedProperty?.publication_title}</Text>
                  {selectedProperty.operations&&<Text as="h3" fontSize="25.84px"  fontFamily="Raleway" fontWeight="700" color="#000000" textAlign="center">$ {selectedProperty?.operations?.length && selectedProperty?.operations[0]?.prices[0]?.price} {selectedProperty?.operations?.length && selectedProperty?.operations[0]?.prices[0]?.currency}</Text>}
                  <Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px"  backgroundColor="#7A7A7A"/>
                </Container>
                
                <Text margin="3px" fontFamily="Montserrat" fontWeight="700" color="#000000" lineHeight="18.64px" fontSize="18.2px" textAlign="center">Roi 10% a 15%</Text>
                <Container maxWidth="95%"  >
                  <Divider  border="0.5px" borderColor={"#7A7A7A"}  marginY="8px" backgroundColor="#7A7A7A"/>
                  <Text paddingX="10px" fontFamily="Raleway" lineHeight="18.64px" justifyContent="center" fontWeight={400} display="flex" fontSize="16px" color="#181725"><Image paddingRight="5px" src={gps} alt="Ubicación"/>{selectedProperty?.address}</Text>
                  <Divider  border="0.5px" borderColor={"#7A7A7A"}  marginY="8px" backgroundColor="#7A7A7A"/>
                  {selectedProperty?.suite_amount&&<><Container  paddingX="1 rem" maxWidth="60%"  justifyContent="space-between" alignItems="center" margin="5px auto" minWidth="100%" display="flex" flexWrap="wrap">
                    <Container flexDirection="row" display="flex" justifyContent="space-between" >
                    <HStack  ><Image src={rooms}/><Text fontSize="15px">{selectedProperty?.suite_amount} Cuartos</Text></HStack>
                        {selectedProperty?.bathroom_amount ? <HStack><Image src={baths}/><Text fontSize="15px">{selectedProperty?.bathroom_amount} Baños</Text></HStack> : null}
                        </Container>
                        <Container flexDirection="row" justifyContent="space-between" display="flex">
                        <HStack><Image src={beds}/><Text fontSize="15px">{selectedProperty?.suite_amount} Dormitorios</Text></HStack>
                        <HStack><Image src={mts}/><Text fontSize="15px">{selectedProperty?.total_surface} {selectedProperty?.surface_measurement}</Text></HStack>
                        </Container>
                         </Container>
                        </>}
                    
                     
                  
                </Container>


                </Box> 
               
                <Box marginTop="60px" marginLeft={"-8px"} transform="rotate(270deg)" width="25px" height="25px" borderTop="20px solid #C4C4C4" borderLeft="20px solid transparent" borderRight="20px solid transparent"  display="flex"  backgroundColor="white">
                
                </Box>  
                        
                </Box>
                <div style={{minWidth:"300px"}}>
           
                <Slider {...settings}>
            {photos?.map((photo: any, index: number) => {
                        return <Image paddingLeft={"15px"} height={"480px"} objectFit="cover"  key={index}  src={photo.image} alt={photo.description} />
                    })}
            </Slider>
                
                 {/* <Carousel 
                    value={value}
                    onChange={onChange}
                    plugins={[
                        'centered',
                        'infinite',
                        {
                         resolve: slidesToShowPlugin,
                         options: {
                          numberOfSlides: 1,
                         },
                       },
                   
                     ]}> 
                    {photos?.map((photo: any, index: number) => {
                        return <Box marginX="15px"><Image height={"480px"} width={"auto"}  key={index}  src={photo.image} alt={photo.description} /></Box>
                    })}
                </Carousel> */}
            </div>
            
            
            </Box>
          
            </Box></>}
        </>
    )
}
